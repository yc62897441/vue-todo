import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    }
  },
  actions: {
  },
  modules: {
  }
})
