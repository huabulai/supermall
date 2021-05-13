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
      // 第一次修改
      // 第二次修改
      age: 24
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
