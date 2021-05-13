<template>

    <div class="tab-bar-item" @click="goViews">
        <slot v-if="isActive" name="item-img-active"></slot>
        <slot v-else name="item-img"></slot>
        <div :style="styleColor"><slot name="item-text"></slot></div>

    </div>

</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: '/path'
    },
    activeColor: {
      type: String,
      default: 'red'
    }

  },
  data () {
    return {

    }
  },
  computed: {
    isActive () {
      // 判断当前路由是否包含tab-bar-item组件的传值，从而决定激活还是非激活的插槽
      return this.$route.fullPath.indexOf(this.path) !== -1
    },
    styleColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    // 每次点击相应路由跳转
    goViews () {
      this.$router.push({
        path: this.path
      })
    }
  }
}
</script>

<style lang="less">

</style>
