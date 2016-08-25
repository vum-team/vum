<template>
  <overlay :show.sync="show" :transparent="true" v-if="overlay"></overlay>
  <div class="toast-modal" v-if="show" transition="toast-modal">
    <div class="icon-wrap"><i class="icon icon-{{type}}"></i></div>
    <div class="text">{{text}}</div>
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
    },
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success'  // success, error
    },
    duration: {
      type: Number,
      default: 3000
    },
    overlay: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show (val, oldVal) {
      if (val) {
        const self = this
        setTimeout(function () {
          self.show = false
        }, this.duration)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import 'toast.less';
</style>
