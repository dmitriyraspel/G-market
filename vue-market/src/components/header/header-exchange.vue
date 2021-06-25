<template>
  <div class="header-exchange">
    <div class="container">
      <div class="exchange__body">
        <div class="exchange__marquee">
          <div class="exchange-line">
            <span class="exchange__title"> Биржевые индексы: </span>
            <ul class="exchange__list">
              <li class="exchange__item">
                Золото:
                <span class="exchange__val" id="exchange-gold-1">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-gold"
                  id="exchange-gold-arrow-1"
                ></span>
              </li>
              <li class="exchange__item">
                Серебро:
                <span class="exchange__val" id="exchange-silver-1">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-silver"
                  id="exchange-silver-arrow-1"
                ></span>
              </li>
              <li class="exchange__item">
                Платина:
                <span class="exchange__val" id="exchange-platinum-1">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-platinum"
                  id="exchange-platinum-arrow-1"
                ></span>
              </li>
              <li class="exchange__item">
                Доллар:
                <span class="exchange__val" id="exchange-usd-1">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-usd"
                  id="exchange-usd-arrow-1"
                ></span>
              </li>
              <li class="exchange__item">
                Евро: <span class="exchange__val" id="exchange-eur-1">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-eur"
                  id="exchange-eur-arrow-1"
                ></span>
              </li>
            </ul>
          </div>
          <div class="exchange-line">
            <span class="exchange__title"> Биржевые индексы: </span>
            <ul class="exchange__list">
              <li class="exchange__item">
                Золото:
                <span class="exchange__val" id="exchange-gold-2">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-gold"
                  id="exchange-gold-arrow-2"
                ></span>
              </li>
              <li class="exchange__item">
                Серебро:
                <span class="exchange__val" id="exchange-silver-2">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-silver"
                  id="exchange-silver-arrow-2"
                ></span>
              </li>
              <li class="exchange__item">
                Платина:
                <span class="exchange__val" id="exchange-platinum-2">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-platinum"
                  id="exchange-platinum-arrow-2"
                ></span>
              </li>
              <li class="exchange__item">
                Доллар:
                <span class="exchange__val" id="exchange-usd-2">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-usd"
                  id="exchange-usd-arrow-2"
                ></span>
              </li>
              <li class="exchange__item">
                Евро: <span class="exchange__val" id="exchange-eur-2">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-eur"
                  id="exchange-eur-arrow-2"
                ></span>
              </li>
            </ul>
          </div>
          <div class="exchange-line">
            <span class="exchange__title"> Биржевые индексы: </span>
            <ul class="exchange__list">
              <li class="exchange__item">
                Золото:
                <span class="exchange__val" id="exchange-gold-3">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-gold"
                  id="exchange-gold-arrow-3"
                ></span>
              </li>
              <li class="exchange__item">
                Серебро:
                <span class="exchange__val" id="exchange-silver-3">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-silver"
                  id="exchange-silver-arrow-3"
                ></span>
              </li>
              <li class="exchange__item">
                Платина:
                <span class="exchange__val" id="exchange-platinum-3">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-platinum"
                  id="exchange-platinum-arrow-3"
                ></span>
              </li>
              <li class="exchange__item">
                Доллар:
                <span class="exchange__val" id="exchange-usd-3">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-usd"
                  id="exchange-usd-arrow-3"
                ></span>
              </li>
              <li class="exchange__item">
                Евро: <span class="exchange__val" id="exchange-eur-3">--</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-eur"
                  id="exchange-eur-arrow-3"
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-exchange",
};
</script>

<style lang="scss">
@keyframes marquee {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(-100%, 0);
    }
}
.header-exchange {
  background: #c39b6a;
  color: #fff;
  font-size: 12px;
  padding: 6px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.exchange__body {
  position: relative;
}
.exchange__marquee {
  white-space: nowrap;
  overflow-wrap: normal;
  overflow: hidden;
}
.exchange__title {
  display: inline-block;
  margin-right: 50px;
  opacity: 0.7;
}
.exchange__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
}
.exchange__item {
  display: inline-block;
  margin-right: 50px;
  opacity: 0.7;
  padding-right: 19px;
  position: relative;
}
.exchange-line {
  display: inline-block;
  animation: marquee 35.6s linear infinite;
}
.container {
  width: 90%;
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
}
</style>
