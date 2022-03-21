<template>
  <div id="app">
    <span class="menu">
      <h5 class="red" @click="switchApp('order')">order</h5>
      <h5 class="red" @click="switchApp('predict')">predict</h5>
    </span>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  methods: {
    switchApp(path) {
      history.pushState({}, '', path);
    }
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;

  height: 100vh;

  .menu {
    display: flex;
    flex-direction: column;
    width: 200px;
    border-right: 1px solid #666;
  }
}
.red {
  color: red;
}
</style>
