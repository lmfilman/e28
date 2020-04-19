<template>
  <div id='featured'>
    <h2>Featured Recipes</h2>
    <ul>
      <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
  name: '',
  props: ['category'],
  data: function() {
    return {
      recipes: []
    };
  },
  computed: {
    featuredRecipes: function() {
      function isMatch(recipe) {
        return recipe.categories.includes(this);
      }
      return this.recipes.filter(isMatch, this.category);
    }
  },
  mounted: function() {
    app.api.all('recipes').then(response => {
      let keys = Object.keys(response);
      this.recipes = keys.map(function(key) {
        let recipe = response[key];
        recipe['id'] = key;
        return recipe;
      });
    });
  }
};
</script>

<style scoped>
</style>