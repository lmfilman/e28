<template>
  <div id='featured'>
    <h2>Featured Recipes</h2>
    <ul>
      <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
import { recipes } from './../recipes.js'

export default {
  name: '',
  props: ['category'],
  data: function() {
    return {
      recipes: recipes
    };
  },
  computed: {
    featuredRecipes: function() {
      function isMatch(recipe) {
        return recipe.categories.includes(this);
      }
      return this.recipes.filter(isMatch, this.category);
    }
  }
};
</script>

<style scoped>
</style>