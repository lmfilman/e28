<template>
  <div id="app">
    <img alt="Logo" src="@/assets/images/logo.png">

    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link :to='{ name: link }' exact>{{ link }}</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: function() {
    return {
      links: ['home', 'recipes', 'categories', 'add a recipe']
    }
  },
  mounted: function() {
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/p2.scss';
</style>
