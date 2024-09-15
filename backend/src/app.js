const express = require('express')
const qualityGuardApi = require('./qualityGuardApi')
const cors = require('cors');
const app = express()
app.use(cors())
const port = 3000
let qualityGuardAPI = new qualityGuardApi(process.env.KEY)



app.get('/getQualityGuardRecipes', async (req, res) => {
    let data = await qualityGuardAPI.GetAllRecepies()
    console.log(data)
    res.send(data)
})

app.get('/getQualityGuardRecipeById/:recipeId', async (req, res) => {
    let data = await qualityGuardAPI.GetIngredients(req.params.recipeId)
    console.log("hello")
    res.send(data)
})

app.get('/getQualityGuardAllergensById/:AllergenId', async (req, res) => {
    let data = await qualityGuardAPI.GetIngredients(req.params.AllergenId)
    console.log("hello")
    res.send(data)
})

app.listen(port, () => {
})
