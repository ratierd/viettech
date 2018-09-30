<template>
<div class="uk-section uk-section-default">
    <div class="uk-container">
        <h1 class="uk-text-left" data-editable data-name="title">Incubators</h1>
        <p>An incubator is a structure helping young firms (start-ups) during their early months of years. It provides help to run or set up a business through: an open space, access to expert advisors, mentors, administrative support, office equipment, training, and/or potential investors</p>
        <br/>
    </div>
    <div class="uk-container">
        <table-vue v-bind:rawData="this.$store.getters.incubators" v-bind:displayType="false"/>
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