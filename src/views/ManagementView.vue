<template>
  <div class="container">
    <div class="main-wrapper">
      <div class="title-wrapper">
        <h1>Management Page</h1>
      </div>
      <div class="statistic-wrapper">
        <div class="statistic">總數：{{ totalNum }} 件</div>
        <div class="statistic">未完成數量：{{ completedNum }} 件</div>
        <div class="statistic">完成進度百分比：{{ completedPercent }}%</div>
      </div>
      <div>
        <button class="btn btn-danger" type="button" v-on:click="clearAllTodos">清空 TODO List</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['todos']),
    totalNum() {
      return this.todos.length
    },
    completedNum() {
      let count = 0
      this.todos.forEach(todo => {
        if (todo.isCompleted) {
          count++
        }
      })
      return count
    },
    completedPercent() {
      if (this.totalNum === 0) {
        return 0
      }
      return (this.completedNum * 100 / this.totalNum).toFixed(0)
    }
  },
  methods: {
    clearAllTodos() {
      this.$store.commit('setTodos', [])
    }
  }
}
</script>

<style>
.statistic-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.statistic {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 400;
}
</style>