<template>
<div class="uk-section uk-section-default">
    <div class="uk-container">
        <h1 class="uk-text-left" data-editable data-name="title">Start-up</h1>
        <p>A startup is a young company that is just beginning to develop. Usually, startups offer something new in their project (product, service, value, organization etc) that is not currently on the market</p>
        <br/>
    </div>
    <div class="uk-container">
        <table-vue v-bind:rawData="this.$store.getters.startup" v-bind:displayType="false"/>
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