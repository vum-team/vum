<template>
  <div>
    <overlay :show.sync="show" :transparent="true"></overlay>
    <div class="preloader-modal" v-if="show" transition="preloader-modal">
      <span class="preloader preloader-white"></span>
    </div>
  </div>
</template>

<script>
import Overlay from '../overlay'

export default {
  components: {
    Overlay
  },
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
