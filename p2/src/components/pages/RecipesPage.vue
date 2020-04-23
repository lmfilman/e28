<template>
  <div id='recipes'>
    <div class='row recipe' v-for='recipe in recipes' :key='recipe.id'>
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
import * as app from '@/common/app.js';

export default {
  name: '',
  data: function() {
    return {
      recipes: []
    };
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
</style>