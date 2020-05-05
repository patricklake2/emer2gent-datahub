<template>
  <article id="app">
    <header-nav />
    <div id="main">
      <router-view />
    </div>
  </article>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
  },
};
</script>

<style>
#main {
  min-height: 80vh;
}
</style>
