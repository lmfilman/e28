import Vue from 'vue'
import Vuex from 'vuex'

import * as app from '@/common/app.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: []
  },
  mutations: {
    updateRecipes(state, payload) {
      state.recipes = payload;
    }
  },
  actions: {
    setRecipes(context) {
      app.api.all('recipes').then(response => {
        let keys = Object.keys(response);
        context.commit('updateRecipes', keys.map(key => response[key]));
      });
    }
  },
  getters: {
    getRecipeById(state) {
      return function (id) {
        for (let key of Object.keys(state.recipes)) {
          if (state.recipes[key].id == id) {
            return state.recipes[key];
          }
        }
      }
    }
  }
})
