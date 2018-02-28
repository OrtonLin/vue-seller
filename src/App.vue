<template>
  <div id="app">
    <AppHeader :poiInfo='poiInfo'></AppHeader>
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
  },
  data(){
    return {
      poiInfo:{name:'test'},
    }
  },
  created(){
    var app = this;
    this.$axios.get('/api/goods')
    .then(function (response) {
      if(response.data.code == 0)
      {
          app.poiInfo = response.data.data.poi_info;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style>
</style>
