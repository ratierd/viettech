<template>
<div class="uk-section uk-section-default">
    <div class="uk-container">
        <h1 class="uk-text-left" data-editable data-name="title">Accelerators</h1>
        <p>Startup accelerators, also known as seed accelerators, are fixed-term, cohort-based programs that include seed investment, connections, mentorship, educational components, and culminate in a public pitch event or demo day to accelerate growth. Most startup accelerators in Silicon Valley and globally are privately funded as an investment fund that take equity and focus on a wide range of industrie</p>
        <br/>
    </div>
    <div class="uk-container">
        <table-vue v-bind:rawData="this.$store.getters.accelerators" v-bind:displayType="false" />
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