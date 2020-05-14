<template>
  <div id='add-a-recipe'>
    <h2>Add a Recipe</h2>

    <label for='name'>Name</label>
    <input type='text' v-model='$v.recipe.name.$model' id='name' />
    <div v-if='$v.recipe.name.$error'>
      <div class='form-feedback-error' v-if='!$v.recipe.name.required'>This field is required.</div>
    </div>

    <label for='reference-type'>Reference Type</label>
    <multiselect v-model='$v.recipe.referenceType.$model' :options="referenceTypeOptions" id='reference-type'></multiselect>
    <div v-if='$v.recipe.referenceType.$error'>
      <div class='form-feedback-error' v-if='!$v.recipe.referenceType.required'>This field is required.</div>
    </div>

    <label for='reference'>Reference (ex. url, book title & page #)</label>
    <input type='text' v-model='recipe.reference' id='reference' />

    <label for='number-of-times-cooked'>Number of times cooked</label>
    <input v-model='$v.recipe.numberOfTimesCooked.$model' id='number-of-times-cooked' />
    <div v-if='$v.recipe.numberOfTimesCooked.$error'>
      <div class='form-feedback-error' v-if='!$v.recipe.numberOfTimesCooked.required'>This field is required</div>
      <div class='form-feedback-error' v-if='!$v.recipe.numberOfTimesCooked.numeric'>Must be a number greater than or equal to 0</div>
    </div>

    <label for='liked'>Liked?</label>
    <input type='checkbox' v-model='recipe.liked' id='liked' />

    <label for='ingredients'>Ingredients</label>
    <multiselect v-model='recipe.ingredients' :options="ingredientOptions" :multiple="true" :taggable="true" id='ingredients' @tag="addIngredient"></multiselect>

    <label for='healthiness'>Healthiness</label>
    <multiselect v-model='recipe.healthiness' :options="healthinessOptions" id='healthiness'></multiselect>

    <label for='categories'>Categories</label>
    <multiselect v-model='recipe.categories' :options="categoryOptions" :multiple="true" :taggable="true" id='categories' @tag="addCategory"></multiselect>

    <input data-test='create-recipe-submit' type='submit' value='Add' @click.prevent='addRecipe' />

    <div data-test='create-recipe-form-errors' class='form-feedback-error' v-if='$v.$anyError'>
      Please correct the above errors
    </div>

    <transition name='fade'>
      <div data-test='create-recipe-success' class='alert' v-if='added'>Your product was added!</div>
    </transition>
  </div>
</template>

<script>
import * as app from '@/common/app.js';
import Multiselect from 'vue-multiselect';
import { uuid } from 'vue-uuid';
import { required, numeric } from 'vuelidate/lib/validators'


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
      },
      referenceType: {
        required
      },
      numberOfTimesCooked: {
        required,
        numeric
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
      newCategory = newCategory.toLowerCase();

      this.recipe.categories.push(newCategory);
      this.categoryOptions.push(newCategory);
    },
    addIngredient: function(newIngredient) {
      newIngredient = newIngredient.toLowerCase();

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
