const axios = require('axios').default;


class qualityGuardAPI {
    contractId = "191"
    baseApiEndpoint = `https://guardian-api.qguard.be`
    constructor(apiKey) {
        this.key = apiKey
    }
    GetAllRecepies() {
        return new Promise((resolve,reject)=>{
            axios({
                method: 'get',
                url: this.baseApiEndpoint + `/api/RecipeInfo/contracts/${this.contractId}/recipes`,
                headers: { "Qguard-API-Key": this.key },
            }).then(function (response) {
                resolve(response.data) 
            }).catch((err)=>{
                reject(err)
            });
        })
    }
    GetIngredients(recipeId){
        return new Promise((resolve,reject)=>{
            axios({
                method: 'get',
                url: this.baseApiEndpoint + `/api/RecipeInfo/recipes/${recipeId}/ingredients`,
                headers: { "Qguard-API-Key": this.key },
            }).then(function (response) {
                resolve(response.data) 
            }).catch((err)=>{
                reject(err)
            });
        })
    }
    //No right where provided to retrive allergen information
    GetAlergies(recipeId){
        return new Promise((resolve,reject)=>{
            axios({
                method: 'get',
                url: this.baseApiEndpoint + `/api/RecipeInfo/${this.contractId}/recipes/${recipeId}?showImage=true`,
                headers: { "Qguard-API-Key": this.key, "accept": "*/*" },
            }).then(function (response) {
                resolve(response.data) 
            }).catch((err)=>{
                reject(err)
            });
        })
    }

}


module.exports = qualityGuardAPI