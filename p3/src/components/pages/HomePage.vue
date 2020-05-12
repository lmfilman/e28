<template>
  <div>
    <div>
      <p>This app is for determining what to make for dinner given some recipes we like and some recipes we're interested in trying out.</p>
    </div>
    <div>
      <button data-test='home-page-button' @click='findRandom'>Find random recipe</button>
      <div class='random' v-if='showRandom'>
        <router-link data-test='home-page-recipe-link' :to='{name: "recipe", params: {id: randomRecipe.id}}'>
          <div class='recipe'>
            <div class='recipe-name'>{{ randomRecipe.name }}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data: function() {
    return {
      randomRecipe: null,
      showRandom: false,
    };
  },
  methods: {
    findRandom: function() {
      this.showRandom = true;
      this.randomRecipe = this.recipes[Math.floor(Math.random() * this.recipes.length)];
    },
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    }
  }
};
</script>

<style scoped>
.random {
  margin-top: 20px;
}
</style>