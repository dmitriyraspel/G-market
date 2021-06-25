<template>
  <div class="fix-menu-wrap">
    <div class="fix-menu">
      <div class="fix-menu__item">
        <a
          href="/catalog"
          class="fix-menu__link fix-menu__link-catalog slide-nav-toggle"
          aria-controls="slide-nav"
          aria-expanded="false"
        >
          <span class="fix-menu__title">Каталог</span>
        </a>
      </div>
      <div class="fix-menu__item">
        <a href="#" class="fix-menu__link fix-menu__link-charts">
          <span class="fix-menu__title">Статистика</span>
        </a>
      </div>
      <div class="fix-menu__item">
        <a href="/" class="fix-menu__link fix-menu__link-home">
          <span class="fix-menu__title">Главная</span>
        </a>
      </div>
      <div class="fix-menu__item">
        <a
          id="fixcartlink"
          href="/cart"
          class="fix-menu__link fix-menu__link-cart"
        >
          <span class="fix-menu__title">Корзина</span>
          <span class="cart-qty">4</span>
        </a>
      </div>
      <div class="fix-menu__item only-mobile">
        <a href="/customer/info" class="fix-menu__link fix-menu__link-account">
          <span class="fix-menu__title">Профиль</span>
        </a>
      </div>
      <div class="fix-menu__item not-mobile">
        <a href="/wishlist" class="fix-menu__link fix-menu__link-wishlist">
          <span class="fix-menu__title">Избранное</span>
          <span class="wishlist-qty">3</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fix-menu-wrap",
};
</script>

<style lang="scss">
.fix-menu-wrap {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 100vw;
    height: 60px;
    -webkit-transition: all 0.4s linear;
    transition: all 0.4s linear;
    z-index: 100;
    -webkit-box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px 10px 0px 0px;
    background: #f9f8f8;
}

.fix-menu {
    width: 100%;
    max-width: 100%;
    height: 100%;
    padding: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.fix-menu__item {
    width: 62px;
    height: 52px;
    max-width: 100%;
    max-height: 100%;
    -ms-flex-preferred-size: 20%;
    flex-basis: 20%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    position: relative;
    text-align: center;
    overflow: hidden;
}
.fix-menu__link {
    text-decoration: none;
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 12px;
}
.fix-menu__link::after {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 24px;
    background-size: contain;
}
.fix-menu__link-wishlist::after {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/heart-temp.png") center no-repeat;
    background-size: contain;
}
.fix-menu__link-account::after {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/user-temp.png") center no-repeat;
    background-size: contain;
}
.fix-menu__link-cart::after {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/cart_46-41.png") center no-repeat;
    background-size: contain;
}
.fix-menu__link-catalog::after {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/katalog-temp.png") center no-repeat;
    background-size: contain;
}
.fix-menu__link-charts::after {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/charts-temp.png") center no-repeat;
    background-size: contain;
}
.fix-menu__link-home::after {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/G-temp.png") center no-repeat;
    background-size: contain;
}
.fix-menu__link-dialer::after {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/dialer-temp.png") center no-repeat;
    background-size: contain;
}
.fix-menu__title {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    line-height: 16px;
    padding-bottom: 8px;
    height: 16px;
    font-size: 10px;
    color: #666;
}
.fix-menu .qty,
.fix-menu .cart-qty,
.fix-menu .wishlist-qty,
.fix-menu .account-notification {
    position: absolute;
    top: 0;
    left: calc(50% + 14px);
    font-size: 10px;
    color: #666;
}
.fix-menu .account-notification {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #C39B6A;
    font-size: 0;
}
@media (min-width: 1001px) {
    .fix-menu-wrap {
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        border-radius: 10px 0px 0px 10px;
        width: 80px;
        height: 300px;
    }
    .fix-menu {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-bottom: 10px;
    }
    .fix-menu__item {
        width: 100%;
    }
    .fix-menu__link {
        width: 100%;
    }
}
@media (max-width: 1000px) {
    .not-mobile {
        display: none;
    }
}
@media (min-width: 1001px) {
    .only-mobile {
        display: none;
    }
}
</style>
