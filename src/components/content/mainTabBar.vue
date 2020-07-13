<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-img-active>
            <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-img>
            <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>
            首页
          </div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category" >
        <template v-slot:item-img-active>
              <img src="~assets/img/tabbar/category_active.svg" alt="">
         </template>
         <template v-slot:item-img>
              <img src="~assets/img/tabbar/category.svg" alt="">
         </template>
         <template v-slot:item-text>
           <div>
             分类
           </div>
         </template>
      </tab-bar-item>

      <tab-bar-item path="shopcart">
        <template v-slot:item-img-active>
           <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
         </template>
         <template v-slot:item-img>
           <img src="~assets/img/tabbar/shopcart.svg" alt="">
         </template>
         <template v-slot:item-text>
           <div>
             购物车
           </div>
         </template>
      </tab-bar-item>

      <tab-bar-item path='/personcenter'>
        <template v-slot:item-img-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-img>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>
            个人中心
          </div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabBar'
import TabBarItem from 'components/common/tabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style lang="less">
  @import "~assets/css/MainTabBar/MainTabBar.less";
</style>
