<template>
<div class="uk-section uk-section-default" id="content-root">
    <div class="uk-container">
        <div id="student-list-root" class="uk-card uk-card-default">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div>
                        <h4 class="uk-card-title uk-margin-remove-bottom">Students</h4>
                        <p uk-margin >
                            <span class="filter uk-badge" onclick="this.classList.toggle('activeFilter')" v-on:click="toggleFilter('sciences')">Sciences</span>
                            <span class="filter uk-badge uk-label-success" onclick="this.classList.toggle('activeFilter')" v-on:click="toggleFilter('management')">Management</span>
                            <span class="filter uk-badge uk-label-warning" onclick="this.classList.toggle('activeFilter')" v-on:click="toggleFilter('finance')">Finance</span>
                            <span class="filter uk-badge uk-label-danger" onclick="this.classList.toggle('activeFilter')" v-on:click="toggleFilter('environment')">Environment</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <dl class="uk-description-list">
                    <template v-for="(student, key, index) in students">
                        <dt :class="student.competences" v-bind:key="index">
                            <img v-if="!!student.avatar" class="uk-preserve-width uk-border-circle" :src="'/avatar/' + student.avatar" width="50" alt="avatar" />
                            <img v-if="!student.avatar" class="uk-preserve-width uk-border-circle" :src="'/avatar/avatar.jpg'" width="50" alt="avatar" />
                            <span class="student-name">{{student.firstname + ' ' + student.lastname}}</span>
                        </dt>
                        <dd :class="student.competences" v-bind:key="index">
                            <span v-for="(competence, key, index) in student.competences" v-bind:key="index" class="uk-label" style="font-size: 8; color: #111; margin-right: 5px; background-color: #dedede">
                                {{competence}}
                            </span>
                        </dd>
                        <dd :class="student.competences" v-bind:key="index">Mail address : {{student.mail}}</dd>
                        <dd :class="student.competences" v-bind:key="index">
                            <template v-for="(contact, key, index) in student.contact">
                                <a v-if="key === 'linkedIn'" v-bind:key="index" :href="'https://www.linkedin.com/in/' + contact" class="uk-icon-button" uk-icon="linkedin"></a>
                                <a v-if="key === 'twitter'" v-bind:key="index" :href="'https://twitter.com/' + contact" class="uk-icon-button" uk-icon="twitter"></a>
                                <a v-if="key === 'facebook'" v-bind:key="index" :href="'https://facebook.com/' + contact" class="uk-icon-button" uk-icon="facebook"></a>
                            </template>
                        </dd>
                    </template>
                </dl>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            students: this.$store.getters.allStudents,
            filters: []
        }
    },
    watch: {
        filters: function(oldFilters, newFilters) {
            this.students = this.$store.getters.allStudents.filter(student => {
                let result = true
                newFilters.forEach(filter => {
                    result &= student.competences.includes(filter)
                })
                return result
            })
        }
    },
    methods: {
        toggleFilter(filter) {
            if (this.filters.includes(filter)) {
                this.filters.splice(this.filters.indexOf(filter), 1)
            }
            else{
                this.filters.push(filter)
            }
        }
    }
}
</script>


<style scoped>
dd, dt {
    margin-bottom: 4px;
}
dd > a {
    margin-right: 10px;
}
.activeFilter{
    -webkit-filter: brightness(80%);
    filter: brightness(80%);
}
.filter {
    margin-right: 10px;
    cursor: pointer;
}
.student-name {
    margin-left: 10px;
    margin-right: 10px;
}
</style>