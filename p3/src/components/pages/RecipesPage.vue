<template>
  <div id='recipes'>
    <div class="row">
      <div class="column filter-category-label">
        Category (any of):
      </div>
      <div class="column filter-category-select">
        <multiselect v-model='selectedCategories' :options="categoryOptions" :multiple="true" :taggable="true" id='categories'></multiselect>
      </div>
    </div>
    <div class='row recipe' v-for='recipe in recipesToDisplay' :key='recipe.id'>
      <div class='column recipe-name'>
        <div>{{ recipe.name }}</div>
      </div>
      <div class='column recipe-link'>
        <router-link :to='{name: "recipe", params: {id: recipe.id}}'>
          <img :src='"@/assets/images/web_no_text.png"' style='width:25px'>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: '',
  components: { Multiselect },
  data: function() {
    return {
      selectedCategories: []
    };
  },
  methods: {
    intersection: function(arr1, arr2) {
      let set1 = new Set(arr1);
      let set2 = new Set(arr2);
      return new Set([...set1].filter(x => set2.has(x)));
    }
  },
  computed: {
    categoryOptions: function() {
      let categories = this.recipes.map(recipe => recipe.categories);
      let mergedCategories = [].concat.apply([], categories);
      return [...new Set(mergedCategories)].sort();
    },
    recipes: function() {
      return this.$store.state.recipes;
    },
    recipesToDisplay: function() {
      if (this.selectedCategories.length == 0) {
        return this.recipes;
      } else {
        return this.recipes.filter(recipe => this.intersection(recipe.categories, this.selectedCategories).size > 0);
      }
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.recipe {
  width: 75%;
  margin: auto;
  margin-bottom: 10px;
  border: 1px solid black;
}

.recipe-name {
  font-size: 1.5rem;
  width: 90%;
  margin-top: 5px;
}

.recipe-link {
  width: 10%;
}

.filter-category-label {
  margin-top: 10px;
  padding-right: 0px;
  width: 30%;
}

.filter-category-select {
  width: 70%;
  margin-bottom: 10px;
}
</style>