<template>
  <div class="g-home">
    <g-header/>
    <g-catalog-wrapper/>
    <g-fix-menu-wrap/>
  <g-customer/>

  </div>
</template>

<script>
import gHeader from '@/components/header/g-header.vue'
import gCatalogWrapper from '@/components/g-catalog-wrapper.vue'
import fixMenuWrap from '@/components/fix-menu/g-fix-menu-wrap.vue'
import gCustomer from '@/components/customer/g-customer.vue'
export default {
  name: 'Home',
  components: {
    'g-header': gHeader,
    'g-catalog-wrapper':gCatalogWrapper,
    'g-customer': gCustomer,
    'g-fix-menu-wrap': fixMenuWrap
  }
}
</script>

<style lang="scss">

</style>
