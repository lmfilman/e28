<template>
  <div id='recipes'>
    <router-link v-for='recipe in recipes' :key='recipe.id' :to='{name: "recipe", params: {id: recipe.id}}'>
      <div class='recipe'>
        <div class='recipe-name'>{{ recipe.name }}</div>
      </div>
    </router-link>
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