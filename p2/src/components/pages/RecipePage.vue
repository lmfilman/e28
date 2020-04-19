<template>
  <div id='recipe-page'>
    <h1>Recipe {{ id }}</h1>

    <div v-if='recipe'>
      <p>{{ recipe.name }}</p>
    </div>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
  name: '',
  props: ['id'],
  data: function() {
    return {
      recipe: null
    };
  },
  mounted: function() {
    app.api.get('recipes', this.id).then(response => {
      this.recipe = response;
    });
  }
};
</script>

<style scoped>
</style>