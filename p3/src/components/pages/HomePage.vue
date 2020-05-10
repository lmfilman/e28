<template>
  <div>
    <div>
      <p>This app is for determining what to make for dinner given some recipes we like and some recipes we're interested in trying out.</p>
    </div>
    <div>
      <button @click='findRandom'>Find random recipe</button>
      <div class='random' v-if='showRandom'>
        <router-link :to='{name: "recipe", params: {id: randomRecipe.id}}'>
          <div class='recipe'>
            <div class='recipe-name'>{{ randomRecipe.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
  name: '',
  data: function() {
    return {
      randomRecipe: null,
      showRandom: false,
      recipes: []
    };
  },
  methods: {
    findRandom: function() {
      this.showRandom = true;
      this.randomRecipe = this.recipes[Math.floor(Math.random() * this.recipes.length)];
    },
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
.random {
  margin-top: 20px;
}
</style>