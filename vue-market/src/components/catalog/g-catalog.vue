<template>
  <div class="g-catalog">
    <h2 class="g-catalog-title">catalog</h2>
    <g-catalog-item
      v-for="product in products"
      :key="product.article"
      :product_data="product"
      @sendArticle="showChildrenArticleConsole"
     />
  </div>
</template>

<script>
import gCatalogItem from "./g-catalog-item.vue";
import{mapActions} from 'vuex'

export default {
  name: "g-catalog",
  components: {
    gCatalogItem,
  },
  props: {},
  data() {
    return {

    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    showChildrenArticleConsole(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
};
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
