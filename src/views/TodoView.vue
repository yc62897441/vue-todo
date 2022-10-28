<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="title-wrapper">
        <h1>TODO List</h1>
      </div>
      <div class="input-wrapper">
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="newTodo">
          <button class="btn btn-primary" type="button" v-on:click="addTodo">新增</button>
        </div>
      </div>
      <div class="todo-list-wrapper">
        <div class="todo-wrapper" v-for="todo in todos" v-bind:key="todo.id">
          <template v-if="todo.isCompleted">
            <button type="button" class="btn btn-secondary" disabled>完成</button>
            <div class="isCompleted">{{ todo.title }}</div>
          </template>
          <template v-else>
            <button type="button" class="btn btn-success" v-on:click="finishTodo(todo.id)">完成</button>
            <div>{{ todo.title }}</div>
          </template>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    addTodo() {
      if (this.newTodo === '') { return }
      this.todos.push({
        id: uuidv4(),
        title: this.newTodo,
        isCompleted: false
      })
      this.newTodo = ''
      this.commitTodos()
    },
    finishTodo(todoId) {
      this.todos.forEach(todo => {
        if (todo.id === todoId) {
          todo.isCompleted = true
        }
      })
      this.commitTodos()
    },
    commitTodos() {
      this.$store.commit('setTodos', this.todos)
    }
  }
}
</script>

<style>
.form-control {
  border-color: black;
  border-radius: 0px;
  margin-right: 2rem;
}

.todo-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-primary {
  background-color: #b7defd;
  border-color: #b7defd;
}

.btn-success {
  background-color: #c9efd1;
  border-color: #c9efd1;
}

.isCompleted {
  color: gray;
  text-decoration: line-through;
}
</style>