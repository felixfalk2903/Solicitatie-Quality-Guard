const express = require('express')
const qualityGuardApi = require('./qualityGuardApi')
const jsonDB = require('./jsonDB')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3000
let QualityGuardAPI = new qualityGuardApi(process.env.KEY)

let JsonDB = new jsonDB()
initDB()


app.get('/getQualityGuardRecipes', async (req, res) => {
    //get data from database for quick retreaval and check if local data still matches incoming data
    let dataJsonDB = await JsonDB.read()
    res.send(dataJsonDB)
    checkIfThereAreNewRecepies(dataJsonDB)
})

app.get('/getQualityGuardRecipeById/:recipeId', async (req, res) => {
    let data = await QualityGuardAPI.GetIngredients(req.params.recipeId)
    res.send(data)
})

app.get('/getQualityGuardAllergensById/:recipeId', async (req, res) => {
    let data = await QualityGuardAPI.GetAlergies(req.params.recipeId)
    res.send(data)
})

app.listen(port, () => {
})

async function checkIfThereAreNewRecepies(potentiallyOldData){
    let potentiallyNewData = await QualityGuardAPI.GetAllRecepies()
    if(potentiallyNewData != potentiallyOldData){
        await JsonDB.write(potentiallyNewData)
    }

}

async function initDB(){
    let data = await QualityGuardAPI.GetAllRecepies()
    JsonDB.init(data)
}