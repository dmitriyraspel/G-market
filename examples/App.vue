<template>
  <g-main-wrapper></g-main-wrapper>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import gMainWrapper from './components/g-main-wrapper'

export default {
  name: 'App',
  components: {
    gMainWrapper
  }
}
</script>

<style>
*,
*::before,
*::after {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}
html {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
body {
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
#app {
  color: #666;
}
.container {
    width: calc(100vw - 30px);
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
}
button, .btn {
  cursor: pointer;
  width: 180px;
  height: 40px;
  padding: 8px 16px;
  background: #C39B6A;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
}
.btn-icon {
    background: none;
    border: none;
    width: 36px;
    height: 36px;
    position: relative;
    padding: 0;
}
.btn-icon::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
}
</style>
