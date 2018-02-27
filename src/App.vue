<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppNav></AppNav>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/Header/Header'
import AppNav from './components/Nav/Nav'
export default {
  name: 'App',
  components: {
    AppHeader, AppNav
  }
}
</script>

<style>
</style>
