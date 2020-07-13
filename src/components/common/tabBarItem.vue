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
      return this.$route.fullPath.indexOf(this.path) !== -1
    },
    styleColor () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
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
