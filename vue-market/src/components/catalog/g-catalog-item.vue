<template>
  <div class="g-catalog-item">
    <img  
    :src=" 'https://goldconnect.online/images/coins/' + 'nugget-kangaroo-gold-coin-1.2oz_2021_1.png' " 
    alt="" 
    class="g-catalog-item-img">
    <h3 class="g-catalog-item-name">product name</h3>
    <p class="g-catalog-item-price">31 768</p>
    <button 
    class="add-to-cart" 
    >Добавить в корзину
    </button>

  </div>
</template>

<script>
export default {
  name: 'g-catalog-item',
}
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
