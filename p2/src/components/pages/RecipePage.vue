<template>
  <div id='recipe-page'>
    <div v-if='recipe'>
      <div class="row">
        <div class="column familiarity">
          <div v-if='recipe.liked'>
            <img alt="Liked" src="@/assets/images/star.png" style='width:125px'>
          </div>
          <p>{{numberOfTimesCookedText}}</p>
        </div>
        <div class="column details">
          <h2>{{recipe.name}}</h2>
          <p>
            <u>Ingredients:</u>
            <ul>
              <li v-for='ingredient in recipe.ingredients' :key='ingredient'>{{ingredient}}</li>
            </ul>
          </p>
          <p><u>Healthiness:</u> {{ recipe.healthiness }}</p>
          <p>
            <u>Categories:</u>
            <ul>
              <li v-for='category in recipe.categories' :key='category'>{{category}}</li>
            </ul>
          </p>
        </div>
        <div class="column">
          <p>{{ recipe.referenceType }}</p>
          <p>{{ recipe.reference }}</p>
        </div>
      </div>
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
  },
  computed: {
    numberOfTimesCookedText: function() {
      let singular = this.recipe.numberOfTimesCooked == 1
      return "Made " + this.recipe.numberOfTimesCooked + " " + (singular ? 'time' : 'times');
    }
  }
};
</script>

<style scoped>
.familiarity {
  border: 1px solid black;
  width: 20%;
  margin-top: 30px;
  margin-right: 30px;
}

.details {
  width: 40%;
}
.row {
  margin-top: 50px;
}

</style>