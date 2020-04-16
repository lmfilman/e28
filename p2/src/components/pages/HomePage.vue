<template>
  <div>
    <p>This app is for determining what to make for dinner given some recipes we like and some recipes we're interested in trying out.</p>

    <show-featured :category='"Soup"'></show-featured>
  </div>
</template>

<script>
import ShowFeatured from './../ShowFeatured.vue'

export default {
  name: '',
  components: {
    'show-featured': ShowFeatured
  },
  data: function() {
    return {
    };
  }
};
</script>

<style scoped>
</style>