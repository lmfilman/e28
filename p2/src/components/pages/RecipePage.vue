<template>
  <div id='recipe-page'>
    <div v-if='recipe'>
      <p>{{ recipe.name }}</p>
      <p>{{ recipe.referenceType }}</p>
      <p>{{ recipe.reference }}</p>
      <p>{{ recipe.numberOfTimesCooked }}</p>
      <p>{{ recipe.liked }}</p>
      <p>{{ recipe.ingredients }}</p>
      <p>{{ recipe.healthiness }}</p>
      <p>{{ recipe.categories }}</p>
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