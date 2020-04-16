<template>
  <div id='recipes'>
    <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
  </div>
</template>

<script>
import ShowRecipe from '@/components/ShowRecipe.vue'
const axios = require('axios');

export default {
  name: '',
  components: {
    'show-recipe': ShowRecipe
  },
  data: function() {
    return {
      recipes: []
    };
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