const express = require('express')
const qualityGuardApi = require('./qualityGuardApi')
const app = express()
const port = 3000
let qualityGuardAPI = new qualityGuardApi(process.env.KEY)


app.get('/getQualityGuardRecipes', (req, res) => {
    let data = qualityGuardAPI.GetAllRecepies()
    res.send(data)
})

app.get('/getQualityGuardRecipes', (req, res) => {
    let data = qualityGuardAPI.GetIngredients(req.body.recipeId)
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
