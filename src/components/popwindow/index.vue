<template>
  <div class="popwindow-overlay" transition="popwindow-overlay" v-if="show" @click="close()"></div>
  <div transition="popwindow-modal"
       v-if="show"
       class="popwindow-modal {{className}} {{full ? 'full' : ''}}">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
      twoWay: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
@import './popwindow.less';
</style>
