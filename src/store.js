import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 2, name: 'Anna', registered: false},
      {id: 3, name: 'Chris', registered: false},
      {id: 4, name: 'Sven', registered: false}
    ]
  },
  getters: {
    unregisteredUsers (state) {
      return state.users.filter((user) => {
        return !user.registered
      })
    },
    registrations (state) {
      return state.registrations
    },
    totalRegistrations (state) {
      return state.registrations.length
    }
  },
  mutations: {
    register (state, user) {
      const date = new Date()
      state.user.registered = true
      this.$store.state.registrations.push({
        userId: user.id,
        name: user.name,
        date: date.getMonth() + '/' + date.getDay()
      })
    }
  }

})
