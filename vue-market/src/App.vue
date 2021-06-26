<template>
  <g-header/>
  <g-catalog-wrapper/>
  <g-home/>
  <fix-menu-wrap/>
  <g-customer/>

</template>

<script>
import gHeader from './components/header/g-header.vue'
import gCatalogWrapper from './components/g-catalog-wrapper.vue'
import gHome from './components/homepage/g-home.vue'
import fixMenuWrap from './components/fix-menu/fix-menu-wrap.vue'
import gCustomer from './components/customer/g-customer.vue'


export default {
  name: 'App',
  components: {
    gHeader,
    gCatalogWrapper,
    gHome,
    gCustomer,

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
  padding-bottom: 90px;
}
#app * {
  box-sizing: border-box;
}
.gold,
a.gold {
  color: #c39b6a;
}
button, .btn,
input[type=submit],
input[type=button] {
  border: none;
  border-radius: 18px;
  background: #c39b6a;
  color: #fff;
  height: 36px;
  font-size: 16px;
  padding: 8px 16px;
}
</style>
