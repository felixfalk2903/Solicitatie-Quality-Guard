import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: [{
      "id": 23,
      "plu": "123456",
      "name": {
        "nl-BE": "Gebakken kabeljauw met saffraansaus en gestampte aardappel met jonge ui, mangetout en groene asperges",
        "de-DE": "",
        "en-GB": "",
        "fr-FR": "gebak fr bakkeljauw"
      },
      "recipeCategory": {
        "nl-BE": "Brood.",
        "de-DE": "Brot",
        "en-GB": "Bread",
        "fr-FR": "Pain"
      },
      "lastModified": "2024-09-03 12:14:19.0",
      "active": true,
      "validated": true
    },
    {
      "id": 23,
      "plu": "",
      "name": {
        "nl-BE": "Volkoren Brood",
        "de-DE": "",
        "en-GB": "",
        "fr-FR": ""
      },
      "recipeCategory": {
        "nl-BE": "Barbecuevlees",
        "de-DE": "Grill fleisch",
        "en-GB": "Barbecue meat",
        "fr-FR": "Viande barbecue"
      },
      "lastModified": "2024-08-01 17:38:24.0",
      "active": true,
      "validated": true
    },],
    currentIdRecipe: 0,
    currentRecipe: {},
    allergensPerRecipe: []
  },
  getters: {
    recipes(state) {
      return state.recipes
    },
    currentRecipe(state) {
      console.log(state.currentRecipe)
      return state.currentRecipe
    },
    currentIdRecipe(state) {
      return state.currentIdRecipe
    },
    allergensPerRecipe(state){
      return state.currentIdRecipe
    }
  },
  mutations: {
    change_recipes(state, payload) {
      state.recipes = payload
    },
    change_currentRecipe(state, payload) {
      state.currentRecipe = payload
    },
    change_currentIdRecipe(state, payload) {
      state.currentIdRecipe = payload
    },
    change_allergensPerRecipe(state,payload){
      state.allergensPerRecipe = payload
    }
  },
  actions: {
    GetAllRecieps({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/getQualityGuardRecipes'
      })
        .then((response) => {
          console.log(response.data)
          commit('change_recipes', response.data)
        });
    },

    GetSpecificRecipe({ commit, state }) {
      axios({
        method: 'get',
        url: `http://localhost:3000/getQualityGuardRecipeById/${state.currentIdRecipe}`
      })
        .then((response) => {
          commit('change_currentRecipe', response.data)
        });
    },
    //No right where provided to retrive allergen information
    GetAlergensForRecipe({ state }) {
      state.currentRecipe.retailproducts.forEach(element => {
        axios({
          method: 'get',
          url: `http://localhost:3000/getQualityGuardAllergensById/${element.retailProduct.id}`
        })
          .then((response) => {
            console.log(response.data)
          });
      });
      
    },
  },
  

  modules: {},
});
