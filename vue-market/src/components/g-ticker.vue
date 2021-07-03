<template>
  <div class="header-exchange">
    <div class="container">
      <div class="exchange__body">
        <div class="exchange__marquee">
          <div class="exchange-line">
            <span class="exchange__title"> Биржевые индексы: </span>
            <ul class="exchange__list" v-for="i in 3" :key="i">
              <li
                class="exchange__item"
                v-for="(t, tIndex) in tickers"
                :key="tIndex"
              >
                {{ tickerNames[t.acronim] }}
                <span class="exchange__val" id="exchange-gold-1">{{
                  t.buy
                }}</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-gold"
                  id="exchange-gold-arrow-1"
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
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'g-ticker',
  data: () => ({
    tickerNames: {
      USD: 'Доллар',
      EUR: 'Евро',
      XAU: 'Золото',
      PL: 'Платинф',
      XAG: 'Серебро',
    },
  }),
  mounted() {
    this.fetchTickers();
  },
  methods: {
    ...mapActions(['fetchTickers']),
  },
  computed: {
    ...mapGetters({
      tickers: 'tickers',
    }),
  },
};
</script>

<style lang="scss">
@keyframes marquee {
  0% {
    transform: translate(0%, 0);
  }
  100% {
    transform: translate(100%, 0);
  }
}
.header-exchange {
  background: #c39b6a;
  color: #fff;
  font-size: 12px;
  padding: 6px 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
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
