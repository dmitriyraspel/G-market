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
    <button class="add-to-cart" @click="addToCart(item.id)" :disabled="checkIfItemInCart(item.id)">{{ checkIfItemInCart(item.id) ? 'added' : 'Добавить в корзину' }} </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'g-catalog-item',
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(['itemsInCart']),

  },
  methods: {
    ...mapActions(['add_to_cart']),
    addToCart(id) {
        this.add_to_cart(id)
    },
    checkIfItemInCart(id) {
      if (this.itemsInCart.includes(id))
        return true
      else
        return false
    }
  },
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
