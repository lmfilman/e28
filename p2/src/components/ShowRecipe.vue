<template>
  <router-link :to='{name: "recipe", params: {id: recipe.id}}'>
    <div class='recipe'>
      <div class='recipe-name'>{{ recipe.name }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: '',
  props: ['recipe'],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>