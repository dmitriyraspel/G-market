<template>
  <div class="g-catalog-item">
    <img  :src=" 'https://goldconnect.online/images/coins/' + product_data.image " alt="" class="g-catalog-item-img">
    <h3 class="g-catalog-item-name">{{product_data.name}}</h3>
    <p class="g-catalog-item-price">{{product_data.price}} p.</p>
    <button 
    class="add-to-cart" 
    @click="sendDataToParent" 
    >Добавить в корзину
    </button>

  </div>
</template>

<script>
export default {
  name: 'g-catalog-item',
  props: {
    product_data: {
      type: Object,
      defaul() {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    sendDataToParent() {
      this.$emit('sendArticle', this.product_data.article)
    }
  }
}
</script>

<style lang="scss">
.g-catalog-item {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  max-width: 600px;
  padding: 10px;
  text-align: center;
}
.g-catalog-item-img {
  height: auto;
  max-width: 150px;
}
.g-catalog-item-name {
  font-size: 24px;
}
.g-catalog-item-price {
  font-weight: 700;
}
.add-to-cart {
  font-size: 16px;
}
</style>
