<template>
  <div class="home">
    <nav-bar class="navBar">
      <div slot="center" class='title'>购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/navBar'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
 .navBar {
   background-color: pink;
   .title {
     text-align: center;
     color: #fff;
     font-size: 18px;

   }
 }
</style>
