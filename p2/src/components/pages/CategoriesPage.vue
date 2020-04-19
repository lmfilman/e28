<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

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
    app.api.all('recipes').then(response => {
      let keys = Object.keys(response);
      this.recipes = keys.map(key => response[key]);
    });
  }
};
</script>

<style scoped>
</style>