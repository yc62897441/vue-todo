<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container" id="navbar-container">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/todolist">TODO List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/management">Management Page</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  height: 5rem;
  margin-bottom: 1.5rem;
}

#navbar-container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}
</style>
