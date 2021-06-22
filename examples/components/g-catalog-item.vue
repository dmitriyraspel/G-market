<template>
    <div class="g-catalog-item">
        <img src="https://dmitriyraspel.github.io/demo_gold_tech/img/product-placeholder.png" alt="" class="g-catalog-item-main-img">
        <p class="g-catalog-item-title">"Георгий Победоносец" 2018-2020г.в (ММД) 1/4 унции</p>
        <p class="g-catalog-item-description">
            Какое-то описание, которое не видно в каталоге, только где один товар!
        </p>
        <p class="g-catalog-item-price">12 000,00 ₽</p>
        <div class="buttons-wrap">
            <button class="add-to-cart">В корзину</button>
            <button class="btn-icon add-to-compare"></button>
            <button class="btn-icon add-to-wishlist"></button>

        </div>
    </div>
</template>

<script>
export default {
    name: "g-catalog-item",
    props: {},
    data() {
        return {}
    },
    computed: {},
}
</script>

<style>
.g-catalog-item {
    display: flex;
    flex-direction: column;
    width: 600px;
    border: 1px solid #999;
    border-radius: 20px;
    margin: 30px;
}
.g-catalog-item-title {
    margin-top: 20px;
}
.g-catalog-item-main-img {
    width: 276px;
    height: 276px;
    background: rgba(238, 238, 238, 0.9);
}
.g-catalog-item-price {
    font-size: 16px;
    font-weight: bold;
    margin-top: auto;
}
.buttons-wrap {
    margin-top: 26px;
    display: flex;
}
.add-to-compare::before {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/balance.png") center no-repeat;
    background-size: contain;
}
.add-to-wishlist::before {
    background: url("https://dmitriyraspel.github.io/demo_gold_tech/img/heart.png") center no-repeat;
    background-size: contain;
}
.add-to-cart {
    margin-right: 20px;
}
</style>