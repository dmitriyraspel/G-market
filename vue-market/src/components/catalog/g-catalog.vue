<template #catalog>
  <div class="g-catalog">
    <h2 class="g-catalog-title">catalog</h2>
    <g-catalog-item 
      v-for="(item, itemIndex) in catalog" 
      :key="itemIndex"
      :item="item"
    />   
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import gCatalogItem from './g-catalog-item.vue'

export default {
  name: 'g-catalog',
  components: {
    gCatalogItem
  },
  created() {
    this.fetchCatalog()
  },
  methods: {
    ...mapActions(['fetchCatalog'])
  },
  computed: {
    ...mapGetters(['catalog'])
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
  min-width: 280px;
  flex-basis: 25%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  // align-items: center;
}
.g-catalog .g-catalog-item-img {
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
.g-catalog .g-catalog-item .add-to-cart {
  margin-top: auto;
}
.g-catalog-title {
  width: 100%;
}
</style>
