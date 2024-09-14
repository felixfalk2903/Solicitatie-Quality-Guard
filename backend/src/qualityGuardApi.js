const axios = require('axios').default;


class qualityGuardAPI {
    contractId = "21"
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
    GetIngredients(recipe){
        
    }

}


module.exports = qualityGuardAPI