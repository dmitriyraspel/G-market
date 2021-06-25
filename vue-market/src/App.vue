<template>
  <g-header/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <fix-menu-wrap/>
</template>

<script>
import gHeader from './components/header/g-header.vue'
import HelloWorld from './components/HelloWorld.vue'
import fixMenuWrap from './components/fix-menu/fix-menu-wrap.vue'

export default {
  name: 'App',
  components: {
    gHeader,
    HelloWorld,
    fixMenuWrap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
