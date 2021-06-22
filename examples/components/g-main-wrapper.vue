<template>
    <div class="g-main-wrapper">
        <g-header></g-header>
        <g-catalog></g-catalog>
        <g-cart></g-cart>
        <g-fix-menu></g-fix-menu>
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import gCatalog from './g-catalog'
import gCart from './g-cart'
import gHeader from './g-header'
import gFixMenu from './g-fix-menu.vue'

export default {
    name: "g-main-wrapper",
    components: {
        gHeader,
        gFixMenu,
        gCatalog,
        gCart
    },
    props: {},
    data() {
        return {
            title: "Main Wrapper"
        }
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {}

    }
</script>

<style>
.g-main-wrapper {
    min-width: 100%;
    min-height: 100%;
    position: relative;
    border: 1px solid #eee;
}
</style>