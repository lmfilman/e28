import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App.vue'
import RecipesPage from '@/components/pages/RecipesPage.vue'
import RecipePage from '@/components/pages/RecipePage.vue'
import HomePage from '@/components/pages/HomePage.vue'
import CategoriesPage from '@/components/pages/CategoriesPage.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  { path: '/recipes/:id', component: RecipePage, name: 'recipe', props: true },
  { path: '/categories', component: CategoriesPage, name: 'categories' }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')