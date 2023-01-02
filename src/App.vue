<template>
  <nav-bar />
  <router-view />
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {NavBar}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
