<template>
  <div class="g-cart-item">
    <img  
    :src=" 'https://goldconnect.online/images/coins/' + 'nugget-kangaroo-gold-coin-1.2oz_2021_1.png' " 
    alt="" 
    class="g-cart-item-img">

    <div class="g-cart-item-name">
      <h2>product name</h2>
      <div class="qty">2 шт.</div>
    </div>
    <p class="g-cart-item-price">31 768</p>
    <div class="g-cart-item-quantity">
      <span>Количество:</span>
      <span class="quantity__tools">
        <span class="quantity__btn">-</span>
        
        <span class="quantity__btn">+</span>
      </span>
    </div>
    <button 
    class="delete-from-cart"
    >Удалить
    </button>
  </div>
</template>

<script>
export default {
  name: 'g-cart-item',
}
</script>

<style lang="scss">
.g-cart-item {
  display: flex;
}
.g-cart-item-img {
  height: auto;
  max-width: 100px;
}
.delete-from-cart {
  width: 24px;
  height: 24px;
  font-size: 4px;
  overflow: hidden;
  padding: 0;
}
.g-cart-item-name h2 {
  font-size: 16px;
  margin-right: 15px;
}
.g-cart-item-price,
.g-cart-item button {
  min-width: max-content;
}

</style>
