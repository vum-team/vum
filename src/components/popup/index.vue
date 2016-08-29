<template>
  <overlay :show.sync="show" :click="close"></overlay>
  <div transition="popup-modal"
       v-if="show"
       class="popup-modal {{className}} {{full ? 'full' : ''}}">
    <page-header v-if="showTitleBar">
      <header-title>{{title}}</header-title>
      <header-link @click="close()">{{closeButtonText}}</header-link>
    </page-header>
    <div class="modal-content">
      <slot></slot>
    </div>
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
