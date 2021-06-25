<template>
  <div class="g-header">
      <header-exchange/>
    <div class="container header-inner">
            <div class="header-logo">
                <img class="header-logo-img" src="https://dmitriyraspel.github.io/demo_gold_tech/img/GT_Market_logo.png" alt="GoldTechMarket-logo">
            </div>

            <div class="header-inner-right">
                <ul class="header-links">
                    <li class="not-mobile">
                        <a href="#" class="ico-account"></a>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>
import headerExchange from './header-exchange'
export default {
  name: 'g-header',
  components: {
    headerExchange
  }
}
</script>


<style lang="scss">
.header {
    position: relative;
    z-index: 10;
    width: 100%;
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    position: relative;
}
.header-logo {
    margin: 0 15px 0 0;
    max-width: calc(100% - 120px);
}
.header-logo-img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 45px;
    opacity: 1;
}
.header-inner-right {
    display: flex;
    align-items: center;
    justify-content: end;
}
.header-links {
    margin: 0;
    padding: 0;
    list-style: none;
}
.header-links li {
    position: relative;
    padding: 0;
    width: 36px;
    height: 36px;
}
.ico-account::before {
    content: "";
    position: absolute;
    display: block;
    width: 24px;
    height: 24px;
    top: 0;
    left: 6px;
    position: absolute;
    background-color: #42b983;
    border-radius: 50%;
}
</style>
