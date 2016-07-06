<template>
  <div class="popup-overlay" transition="popup-overlay" v-if="show" @click="close()"></div>
  <div class="popup-modal" transition="popup-modal" v-if="show">
    <header class="bar bar-nav bar-standard" v-if="showTitleBar">
      <a class="button button-link pull-right" @click="close()">{{closeButtonText}}</a>
      <h1 class="title">{{title}}</h1>
    </header>
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
    title: {
      type: String,
      default: 'Popup Title'
    },
    showTitleBar: {
      type: Boolean,
      default: true
    },
    closeButtonText: {
      type: String,
      default: 'Close'
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
@import './popup.less';
</style>
