<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import 'normalize.css/normalize.css';
export default {};
</script>

<style lang="less">
@import url('./assets/styles/index.less');
</style>
