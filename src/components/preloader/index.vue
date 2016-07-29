<template>
  <div class="preloader-overlay" v-if="show" transition="preloader-overlay"></div>
  <div class="preloader-modal" v-if="show" transition="preloader-modal">
    <span class="preloader preloader-white"></span>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      twoWay: true,
      required: true
    }
  }
}
</script>

<style lang="less">
@import 'preloader.less';
</style>
