<template>
  <div>
    <h2>Add a Recipe</h2>

    <label for='name'>Name</label>
    <input type='text' v-model='$v.recipe.name.$model' id='name' :class='{ "form-input-error": $v.recipe.name.$error }' />
    <div v-if='$v.recipe.name.$error'>
      <div class='form-feedback-error' v-if='!$v.recipe.name.required'>Name is required.</div>
    </div>

    <label for='reference-type'>Reference Type</label>
    <multiselect v-model='recipe.referenceType' :options="referenceTypeOptions" id='reference-type'></multiselect>

    <label for='reference'>Reference (ex. url, book title & page #)</label>
    <input type='text' v-model='recipe.reference' id='reference' />

    <label for='number-of-times-cooked'>Number of times cooked</label>
    <input type='number' v-model.number='recipe.numberOfTimesCooked' id='number-of-times-cooked' />

    <label for='liked'>Liked?</label>
    <input type='checkbox' v-model='recipe.liked' id='liked' />

    <label for='ingredients'>Ingredients</label>
    <multiselect v-model='recipe.ingredients' :options="ingredientOptions" :multiple="true" :taggable="true" id='ingredients' @tag="addIngredient"></multiselect>

    <label for='healthiness'>Healthiness</label>
    <multiselect v-model='recipe.healthiness' :options="healthinessOptions" id='healthiness'></multiselect>

    <label for='categories'>Categories</label>
    <multiselect v-model='recipe.categories' :options="categoryOptions" :multiple="true" :taggable="true" id='categories' @tag="addCategory"></multiselect>

    <input type='submit' value='Add' @click.prevent='addRecipe' />

    <div class='form-feedback-error' v-if='$v.$anyError'>Please correct the above errors</div>

    <transition name='fade'>
      <div class='alert' v-if='added'>Your product was added!</div>
    </transition>
  </div>
</template>

<script>
import * as app from '@/common/app.js';
import Multiselect from 'vue-multiselect';
import { uuid } from 'vue-uuid';
import { required } from 'vuelidate/lib/validators'


export default {
  name: '',
  components: { Multiselect },
  data: function() {
    return {
      added: false,
      categoryOptions: [],
      healthinessOptions: ['Low', 'Medium', 'High'],
      ingredientOptions: [],
      referenceTypeOptions: ['Web', 'Book', 'Idea', 'Custom'],
      recipe: {
        name: '',
        id: '',
        referenceType: '',
        reference: '',
        numberOfTimesCooked: 0,
        liked: false,
        ingredients: [],
        healthiness: '',
        categories: []
      }
    };
  },
  validations: {
    recipe: {
      name: {
        required
      }
    }
  },
  methods: {
    addRecipe: function() {
      this.$v.$touch();

      if(this.$v.$anyError == false) {
        this.$v.$reset();

        app.api.add('recipes', this.recipe).then(id => {
            console.log('Recipe was added with the id: ' + id);
            this.added = true;
            setTimeout(() => (this.added = false), 3000);
            this.recipe = {
              name: '',
              id: uuid.v1(),
              referenceType: '',
              reference: '',
              numberOfTimesCooked: 0,
              liked: false,
              ingredients: [],
              healthiness: [],
              categories: []
            }
        });

        this.$store.dispatch('setRecipes');
      }
    },
    addCategory: function(newCategory) {
      this.recipe.categories.push(newCategory);
      this.categoryOptions.push(newCategory);
    },
    addIngredient: function(newIngredient) {
      this.recipe.ingredients.push(newIngredient);
      this.ingredientOptions.push(newIngredient);
    }
  },
  mounted: function() {
    let recipes = this.$store.state.recipes;

    let categories = recipes.map(recipe => recipe.categories);
    let mergedCategories = [].concat.apply([], categories);
    this.categoryOptions = [...new Set(mergedCategories)].sort();

    let ingredients = recipes.map(recipe => recipe.ingredients);
    let mergedIngredients = [].concat.apply([], ingredients);
    this.ingredientOptions = [...new Set(mergedIngredients)].sort();

    this.recipe.id = uuid.v1();
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
