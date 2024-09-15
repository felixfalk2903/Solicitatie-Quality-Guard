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
  },]
  },
  getters: {
    recipes(state) {
      console.log(state.recipes)
      return state.recipes
    }
  },
  mutations: {
    change_recipes(state, payload) {
      state.recipes = payload
    }
  },
  actions: {
    GetAllRecieps({ commit }) {
      axios({
        method: 'get',
        url: 'http://localhost:3000/getQualityGuardRecipes'
      })
        .then((response) => {
          console.log(response.data.length)
          commit('change_recipes', response.data)
        });
    },
  modules: {},
});
