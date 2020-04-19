<template>
  <div id='recipes'>
    <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
  </div>
</template>

<script>
import ShowRecipe from '@/components/ShowRecipe.vue'
import * as app from '@/common/app.js';

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