<template>
  <div id="app" style="min-height: 100%">
    <fix></fix>
  </div>
</template>

<script>
import fix from './components/fix.vue'
export default {
  name: 'App',
  components: {
    fix
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c5032;
  margin-top: 0px;
  height: 100%;
}
</style>
