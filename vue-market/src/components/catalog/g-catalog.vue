<template>
  <div class="g-catalog">
    <h2 class="g-catalog-title">catalog</h2>
    <g-catalog-item/>
    <g-catalog-item/>
    <g-catalog-item/>
    <g-catalog-item/>
    <g-catalog-item/>
    <g-catalog-item/>
    <g-catalog-item/>   
  </div>
</template>

<script>
import gCatalogItem from './g-catalog-item.vue'

export default {
  name: 'g-catalog',
  components: {
    gCatalogItem
  }
}
</script>

<style lang="scss">
.g-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.g-catalog .g-catalog-item {
  flex-basis: 25%;
  margin: 20px;
}
.g-catalog-title {
  width: 100%;
}
</style>
