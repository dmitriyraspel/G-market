<template>
  <div class="g-catalog-item">
    <img
      :src="
        'https://goldconnect.online/images/coins/' +
          'nugget-kangaroo-gold-coin-1.2oz_2021_1.png'
      "
      alt=""
      class="g-catalog-item-img"
    />
    <h3 class="g-catalog-item-name">{{ item.name }}</h3>
    <p class="g-catalog-item-price">{{ item.price }}</p>
    <button class="add-to-cart" @click="addToCart">Добавить в корзину</button>
  </div>
</template>

<script>
export default {
  name: 'g-catalog-item',
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    addToCart() {

    }
  }
};
</script>

<style lang="scss">
.g-catalog-item {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  max-width: 600px;
  padding: 15px;
}
.g-catalog-item-img {
  height: auto;
  width: 280px;
}
</style>
