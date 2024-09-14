const express = require('express')
const qualityGuardApi = require('./qualityGuardApi')
const app = express()
const port = 3000
let qualityGuardAPI = new qualityGuardApi(process.env.KEY)


app.get('/getQualityGuardRecipes', async (req, res) => {
    let data = await qualityGuardAPI.GetAllRecepies()
    console.log(data)
    res.send(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
