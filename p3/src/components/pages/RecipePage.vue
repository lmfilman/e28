<template>
  <div id='recipe-page'>
    <div v-if='recipe'>
      <div class="row">
        <h2>{{recipe.name}}</h2>
        <div class="column badges">
          <div v-if='recipe.liked'>
            <img alt="Liked" src="@/assets/images/star.png" style='width:125px'>
          </div>
          <div v-if='recipe.healthiness == "High"'>
            <img alt="Healthy" src="@/assets/images/healthy.png" style='width:100px'>
          </div>
          <p>{{numberOfTimesCookedText}}</p>
        </div>
        <div class="column details">
          <p>
            <u>Ingredients:</u>
            <ul>
              <li v-for='ingredient in recipe.ingredients' :key='ingredient'>{{ingredient}}</li>
            </ul>
          </p>
          <p>
            <u>Categories:</u>
            <ul>
              <li v-for='category in recipe.categories' :key='category'>{{category}}</li>
            </ul>
          </p>
        </div>
        <div class="column">
          <a v-if='recipe.referenceType == "Web"' :href='recipe.reference'>
            <img :src='"@/assets/images/web.png"' style='width:100px'>
          </a>
          <div v-else-if='recipe.referenceType == "Book"'>
            <img :src='"@/assets/images/book.png"' style='width:100px'>
            <p>{{recipe.reference}}</p>
          </div>
          <div v-else>
            <img :src='"@/assets/images/" + recipe.referenceType.toLowerCase() + ".png"' style='width:100px'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['id'],
  data: function() {
    return {
    };
  },
  computed: {
    numberOfTimesCookedText: function() {
      let singular = this.recipe.numberOfTimesCooked == 1
      return "Made " + this.recipe.numberOfTimesCooked + " " + (singular ? 'time' : 'times');
    },
    recipe: function() {
      return this.$store.getters.getRecipeById(this.id);
    }
  }
};
</script>

<style scoped>
.badges {
  border: 1px solid black;
  width: 20%;
  margin-top: 30px;
}

.details {
  width: 50%;
}

.row {
  margin-top: 50px;
}

</style>