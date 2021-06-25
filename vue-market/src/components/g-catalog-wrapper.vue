<template>
  <div class="g-catalog-wrapper">
    <g-catalog/>
    <g-cart/>
  </div>
</template>

<script>
import gCatalog from './catalog/g-catalog.vue'
import gCart from './catalog/g-cart.vue'

export default {
  name: 'g-catalog-wrapper',
  components: {
    gCatalog,
    gCart
  }
}
</script>

<style lang="scss">
.g-catalog-wrapper {
  width: 90%;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
}
</style>
