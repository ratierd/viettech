<template>
<div class="uk-card uk-card-default" id="table-vue-root">
    <div class="uk-card-header" v-if="this.rawData.length > 0">
        <h2>Organism</h2>
    </div>
    <div class="uk-card-body" v-if="this.rawData.length > 0">
        <div class="uk-overflow-auto">
            <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
                <thead>
                    <tr id="table-head">
                        <td v-for="(head, key, index) in heads" v-bind:key="index" :class="head.class" v-html="head.name"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-row" v-for="(row, key, index) in rows" v-bind:key="index">
                        <td v-for="(field, key, index) in row" v-bind:key="index" :class="field.class" v-html="field.value"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>

export default {
    props: {
        rawData: Array,
        displayType: {
            type: Boolean,
            default: true
        }
    },
    data() {
        if(this.displayType) {
            return {
                'heads': [
                    {'name': 'Name', 'class': 'uk-table-shrink uk-text-nowrap' },
                    {'name': 'Type', 'class': 'uk-table-shrink uk-text-nowrap' },
                    {'name': 'Description', 'class': 'uk-table-expand' }, 
                    {'name': 'Address', 'class': 'uk-width-small' }, 
                    {'name': 'Mail', 'class': 'uk-table-shrink uk-text-nowrap' }, 
                    {'name': 'Phone', 'class': 'uk-table-shrink uk-text-nowrap' }, 
                ],
                'rows': this.rawData.map(organism => {
                    return [
                        /*'name':*/ { 'value': '<a class="uk-link-reset" href="/organism/' + organism.id + '">' + organism.name + '</a>', 'class': 'uk-text-nowrap uk-table-link link'},
                        /*'type':*/ { 'value': organism.type, 'class': 'uk-text-nowrap' },
                        /*'description':*/ { 'value': organism.description, 'class': 'uk-text-truncate' },
                        /*'address':*/ { 'value': organism.address, 'class': 'uk-text-truncate' },
                        /*'mail':*/ { 'value': organism.contact.mail, 'class': 'uk-text-nowrap' },
                        /*'phone':*/ { 'value': organism.contact.phone, 'class': 'uk-text-nowrap' }
                    ]
                })
            }
        }
        else {
            return {
                'heads': [
                    {'name': 'Name', 'class': 'uk-table-shrink uk-text-nowrap' },
                    {'name': 'Description', 'class': 'uk-table-expand' }, 
                    {'name': 'Adress', 'class': 'uk-width-small' }, 
                    {'name': 'Mail', 'class': 'uk-table-shrink uk-text-nowrap' }, 
                    {'name': 'Phone', 'class': 'uk-table-shrink uk-text-nowrap' }, 
                ],
                'rows': this.rawData.map(organism => {
                    return [
                        /*'name':*/ { 'value': '<a class="uk-link-reset" href="/organism/' + organism.id + '">' + organism.name + '</a>', 'class': 'uk-text-nowrap uk-table-link link'},
                        /*'description':*/ { 'value': organism.description, 'class': 'uk-text-truncate' },
                        /*'address':*/ { 'value': organism.address, 'class': 'uk-text-truncate' },
                        /*'mail':*/ { 'value': organism.contact.mail, 'class': 'uk-text-nowrap' },
                        /*'phone':*/ { 'value': organism.contact.phone, 'class': 'uk-text-nowrap' }
                    ]
                })
            }
        }
    }
}
</script>

<style scoped>
svg{
  height: 80%;
  max-height: 80%;
}
.link {
    color: #1e87f0;
}
</style>