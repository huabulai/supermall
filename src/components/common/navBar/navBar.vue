<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  .navBar {
    height: 44px;
    line-height: 44px;
    display: flex;
    .left,.right {
      width: 60px;

    }
    .center {
      flex:1;

    }
  }
</style>
