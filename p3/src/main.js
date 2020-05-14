import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from '@/App.vue'
import RecipeCreatePage from '@/components/pages/RecipeCreatePage.vue'
import RecipesPage from '@/components/pages/RecipesPage.vue'
import RecipePage from '@/components/pages/RecipePage.vue'
import HomePage from '@/components/pages/HomePage.vue'

import store from '@/common/store';

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  { path: '/recipes/:id', component: RecipePage, name: 'recipe', props: true },
  { path: '/admin', component: RecipeCreatePage, name: 'add a recipe' }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')
