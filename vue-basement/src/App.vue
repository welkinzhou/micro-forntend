<script setup lang="ts"></script>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/app-vue">Sub-Vue</router-link> |
      <router-link to="/app-angular">Sub-Angular</router-link>
    </div>
    <div class="content">
      <router-view />
      <div id="subapp-container"></div>
    </div>
  </div>
</template>

<style>
* {
  padding: 0px;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#nav {
  color: aqua;
  background: #2c3e50;
  padding: 16px 0;
}
#nav > a {
  text-decoration: none;
  color: aquamarine;
  padding: 4px 8px;
}
.content {
  flex: 1;
  background: #f1f1f1;
  padding-top: 24px;
  box-sizing: border-box;
}
</style>
