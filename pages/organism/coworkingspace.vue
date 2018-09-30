<template>
<div class="uk-section uk-section-default">
    <div class="uk-container">
        <h1 class="uk-text-left" data-editable data-name="title">Co-working space</h1>
        <p>A co-working refers to a space providing a full equipment (wifi, computers, rooms etc) for individuals or small business owners where they can work collaboratively in a shared area. It’s helpful when you don’t have a specific work space at the beginning of a project, when you travel, when you need to be inspired or helped to go on</p>
        <br/>
    </div>
    <div class="uk-container">
        <table-vue v-bind:rawData="this.$store.getters.coworkingspace" v-bind:displayType="false"/>
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