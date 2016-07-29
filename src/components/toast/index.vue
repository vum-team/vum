<template>
  <div class="toast-overlay" v-if="show && overlay" transition="toast-overlay"></div>
  <div class="toast-modal" v-if="show" transition="toast-modal">
    <div class="icon-wrap"><i class="icon icon-{{type}}"></i></div>
    <div class="text">{{text}}</div>
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
      default: 3000,
      required: false
    },
    overlay: {
      type: Boolean,
      default: false
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
