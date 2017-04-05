<template>
  <div>
    <overlay :show="show" :transparent="true"></overlay>
    <transition name="transition-modal">
      <div class="preloader-modal" v-if="show">
        <span class="preloader preloader-white"></span>
      </div>
    </transition>
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
