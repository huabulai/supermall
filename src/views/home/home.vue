<template>
  <div class="home">
    <nav-bar class="navBar">
      <template v-slot:center>
        <div class="title">
          购物街
        </div>
      </template>
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
    return {
      age: 25, // 大一岁了
      name: 'kobe',
      role: 'basketballPlayer',
      daughter: 'gigi',
      skinColor: 'black'
    }
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
