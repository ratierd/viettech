import Vuex from 'vuex'

var state = require('./state.json')

const createStore = () => {
    return new Vuex.Store({
        state: state,
        getters: {
            fullState(state) {
                return state
            },
            organismsNb(state) {
                return state.organisms.length
            },
            allOrganism(state) {
                return state.organisms
            },
            accelerators(state) {
                return state.organisms.filter(organism => {
                    return organism.type === 'Accelerator'
                })
            },
            incubators(state) {
                return state.organisms.filter(organism => {
                    return organism.type === 'Incubator'
                })
            },
            coworkingspace(state) {
                return state.organisms.filter(organism => {
                    return organism.type === 'Co-working space'
                })
            },
            startup(state) {
                return state.organisms.filter(organism => {
                    return organism.type === 'Start-up'
                })
            },
            getOrganismById: (state) => (id) => {
                return state.organisms.find(organism => organism.id === id)
            },
            allStudents(state) {
                return state.persons.filter(person => {
                    return person.status.includes('student')
                })
            },
            getStudentByFullName: (state) => (firstname, lastname) => {
                return state.persons.filter(person => {
                    return person.status.includes('student')
                })
                .find(student => student.firstname === firstname && student.lastname === lastname)
            }
        },
        mutations: {
            deleteOrganism(state, id) {
                state.organisms.splice(state.organisms.findIndex(organism => organism.id === id), 1)
            },
            addOrganism(state, newOrganism) {
                state.organisms.push(newOrganism)
            },
            deletePerson(state, person) {
                state.persons.splice(state.persons.findIndex(p => p == person), 1)
            },
            addPerson(state, person) {
                state.persons.push(person)
            }
        }
    })
}

export default createStore