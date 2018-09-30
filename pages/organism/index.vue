<template>
<div class="uk-section uk-section-default">
    <div class="uk-container">
        <table-vue v-bind:rawData="this.$store.getters.allOrganism"/>
    </div>
</div>
</template>

<script>
import TableVue from '~/components/TableVue.vue'

export default {
    components: {
        TableVue
    }
}
</script>

<style>
</style>