<template>
  <div id="app">
    <keep-alive>
       <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  },
  data () {
    return {}
  }
}
</script>
<style>
@import 'assets/css/base.css';
</style>
