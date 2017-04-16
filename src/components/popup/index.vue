<template>
  <div>
    <overlay :show="mutableShow" :click="close"></overlay>
    <transition name="popup-modal">
      <div v-show="mutableShow"
           :class="'popup-modal ' + className + (full ? ' full' : '')">
        <page-header v-if="showTitleBar">
          <header-title>{{title}}</header-title>
          <header-link @click.native="close()">{{closeButtonText}}</header-link>
        </page-header>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Header, Link, Title } from '../header'
import Overlay from '../overlay'

export default {
  components: {
    Overlay,
    'page-header': Header,
    'header-link': Link,
    'header-title': Title
  },
  props: {
    show: {
      type: Boolean,
      default: false
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
    },
    full: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      mutableShow: this.show
    }
  },
  methods: {
    open () {
      this.mutableShow = true
      this.$emit('open', this)
    },
    close () {
      this.mutableShow = false
      this.$emit('close', this)
    }
  }
}
</script>

<style lang="less" scoped>
@import './popup.less';
</style>
