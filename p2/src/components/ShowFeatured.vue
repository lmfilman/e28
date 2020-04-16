<template>
  <div id='featured'>
    <h2>Featured Recipes</h2>
    <ul>
      <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');

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
    axios.get('http://localhost:8080/recipes.json')
      .then(response => {
        this.recipes = response.data['recipes'];
      });
  }
};
</script>

<style scoped>
</style>