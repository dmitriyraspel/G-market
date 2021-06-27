<template>
  <div class="g-cart">
    <h2>Cart</h2>
    <g-cart-item/>
  </div>
</template>

<script>
import gCartItem from './g-cart-item.vue'

export default {
  name: 'g-cart',
  components: {
    gCartItem
  }
}
</script>

<style lang="scss">

</style>
