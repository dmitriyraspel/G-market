<template>
    <div class="g-catalog">
        <g-catalog-item></g-catalog-item>
        <g-catalog-item></g-catalog-item>
        <g-catalog-item></g-catalog-item>
    </div>
</template>

<script>
import gCatalogItem from './g-catalog-item'

export default {
    name: "g-catalog",
    components: {
        gCatalogItem
    },
    props: {},
    data() {
        return {}
    },
    computed: {},
}
</script>

<style>
.g-catalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>