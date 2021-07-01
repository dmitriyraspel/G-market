<template>
  <div class="g-cart-popup" v-if="cartPopUpVisible">
      <div class="g-cart-popup-header">
        <span class="g-cart-popup-header-title">Товары (4)</span>
        <span class="g-cart-popup-header-remove-all">Очистить список</span>
      </div>

    <g-cart-item/>
      
    <g-cart-total/>

    <div class="g-cart-popup-buttons">
        <button class="g-cart-popup-to-checkout">Оформить заказ</button>
        <button class="g-cart-popup-to-cart">В корзину</button>
    </div>
  </div>
</template>

<script>
import gCartItem from './g-cart-item.vue'
import gCartTotal from './g-cart-total.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'g-cart-popup',
  components: {
    gCartItem,
    gCartTotal
  },
  computed: {
    ...mapGetters(['cartPopUpVisible'])
  }
}
</script>

<style lang="scss">
.g-cart-popup {
    position: absolute;
    top: 0;
    right: 75px;
    background: #fff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    max-width: 600px;
    padding: 15px;
}
.g-cart-popup-header,
.g-cart-popup .g-cart-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}
.g-cart-popup-buttons {
    display: flex;
    justify-content: flex-end;
}
.g-cart-popup-buttons .g-cart-popup-to-cart {
    margin-left: 15px;
}
.g-cart-popup .g-cart-item-quantity {
    display: none;
}
</style>
