<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: '',
  data: function() {
    return {
      recipes: []
    };
  },
  computed: {
    categories: function() {
      let categories = this.recipes.map(recipe => recipe.categories);
      let mergedCategories = [].concat.apply([], categories);

      // Return unique, sorted categories
      return [...new Set(mergedCategories)].sort();
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