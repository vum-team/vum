<template>
  <div>
    <overlay :show.sync="show" :click="overlayClick"></overlay>
    <div class="modal" v-if="show" transition="modal">
      <div class="modal-inner">
        <div class="modal-title">
          <slot name="title">Confirm</slot>
        </div>
        <div class="modal-text">
          <slot name="content"></slot>
        </div>
      </div>
      <slot name="buttons">
      </slot>
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
      required: true,
      twoWay: true
    },
    overlayClose: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    overlayClick () {
      if (this.overlayClose) this.show = false
    }
  }
}
</script>

<style lang="less">
@import 'modal.less';
</style>
