<template>
  <g-header/>
  <g-catalog-wrapper/>
  <g-home/>
  <fix-menu-wrap/>
</template>

<script>
import gHeader from './components/header/g-header.vue'
import gCatalogWrapper from './components/g-catalog-wrapper.vue'
import gHome from './components/homepage/g-home.vue'
import fixMenuWrap from './components/fix-menu/fix-menu-wrap.vue'

export default {
  name: 'App',
  components: {
    gHeader,
    gCatalogWrapper,
    gHome,
    fixMenuWrap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 60px;
}
</style>
