<template>
<div class="uk-section uk-section-default">
    <div class="uk-container">
        <h1>{{organism.name}}</h1>
        <p style="display:flex;justify-content:flex-start;flex-wrap:wrap"><span><span uk-icon="icon: link; ratio: 1"></span>&nbsp;<a v-bind:href="'http://' + organism.contact.website" target="blank">{{organism.contact.website}}</a></span>&ensp;<span><span uk-icon="icon: mail; ratio: 1"></span>&nbsp;{{organism.contact.mail}}</span>&ensp;<span><span uk-icon="icon: receiver; ratio: 1"></span>&nbsp;{{organism.contact.phone}}</span></p>
        <p class="uk-article-meta">Written by <a href="/aboutus/agathehatchi">Agathe Hatchi</a> and <a href="/aboutus/leagrimal">Léa Grimal</a></p>
        <div uk-grid>
            <div class="uk-width-expand@m">
                <div v-html="organism['main-content']" data-editable data-name="main-content"></div>
            </div>
            <div class="uk-width-1-3@m">
                <div v-html="organism['side-content']" data-editable data-name="side-content"></div>
            </div>
            <!-- <div class="uk-width-expand@m" data-editable data-name="main-content">
                <template v-for="(section, key, index) in organism['main-content']">
                    <p class="uk-text-lead" v-bind:key="index">{{key}}</p>
                    <p v-bind:key="index" v-html="section"></p>
                </template>
            </div>
            <div class="uk-width-1-3@m" data-editable data-name="side-content">
                <template v-for="(section, key, index) in organism['side-content']">
                    <p class="uk-text-lead" v-bind:key="index">{{key}}</p>
                    <p v-bind:key="index" v-html="section"></p>
                </template>
            </div> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    validate ({ params }) {
        return /^\d+$/.test(params.id)
    },
    data () {
        return {
            organism: this.$store.getters.getOrganismById(this.$route.params.id)
        }
    }
}
</script>

<style>
</style>