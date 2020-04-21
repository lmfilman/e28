<template>
  <div>
    <h2>Add a Recipe</h2>

    <label for='name'>Name</label>
    <input type='text' v-model='recipe.name' id='name' />

    <label for='id'>URL Identifier</label>
    <input type='text' v-model='recipe.id' id='id' />

    <label for='reference_type'>Reference Type (web, book, idea)</label>
    <input type='text' v-model='recipe.reference_type' id='reference_type' />

    <label for='source'>Source (website title, book title)</label>
    <input type='text' v-model='recipe.source' id='source' />

    <label for='reference'>Reference (url, page #)</label>
    <input type='text' v-model='recipe.reference' id='reference' />

    <label for='number_of_times_cooked'>Number of times cooked</label>
    <input type='text' v-model='recipe.number_of_times_cooked' id='number_of_times_cooked' />

    <label for='liked'>Liked?</label>
    <input type='checkbox' v-model='recipe.liked' id='liked' />

    <label for='ingredients'>Ingredients (comma separated)</label>
    <input type='text' v-model='recipe.ingredients' id='ingredients' />

    <label for='healthiness'>Healthiness</label>
    <multiselect v-model='recipe.healthiness' :options="healthiness_options" id='healthiness'></multiselect>

    <label for='categories'>Categories</label>
    <multiselect v-model='recipe.categories' :options="category_options" :multiple="true" :taggable="true" id='categories' @tag="addCategory"></multiselect>

    <input type='submit' value='Add' @click.prevent='addRecipe' />

    <transition name='fade'>
      <div class='alert' v-if='added'>Your product was added!</div>
    </transition>
  </div>
</template>

<script>
import * as app from '@/common/app.js';
import Multiselect from 'vue-multiselect';

export default {
  name: '',
  components: { Multiselect },
  data: function() {
    return {
      added: false,
      category_options: ['Asian', 'Soup'],
      healthiness_options: ['Low', 'Medium', 'High'],
      recipe: {
        name: '',
        id: '',
        reference_type: '',
        source: '',
        reference: '',
        number_of_times_cooked: 0,
        liked: false,
        ingredients: '',
        healthiness: [],
        categories: []
      }
    };
  },
  methods: {
    addRecipe: function() {
      app.api.add('recipes', this.recipe).then(id => {
          console.log('Recipe was added with the id: ' + id);
          this.added = true;
          setTimeout(() => (this.added = false), 3000);
          this.recipe = {
            name: '',
            id: '',
            reference_type: '',
            source: '',
            reference: '',
            number_of_times_cooked: 0,
            liked: false,
            ingredients: '',
            healthiness: [],
            categories: []
          }
      });
    },
    addCategory: function(newCategory) {
      this.recipe.categories.push(newCategory);
      this.category_options.push(newCategory);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
input {
    font-size: 15pt;
}
textarea,
input[type='text'] {
    width: 50%;
}
textarea {
    height: 75px;
    display: block;
    margin: auto;
}
label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}
input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>
