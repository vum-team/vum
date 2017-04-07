<template>
  <div>
    <overlay :show="mutableShow" :click="overlayClick"></overlay>
    <transition name="modal">
      <div class="modal" v-if="mutableShow">
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
    show: { // init status
      type: Boolean,
      default: false
    },
    overlayClose: {
      type: Boolean,
      default: false
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
    },
    overlayClick () {
      this.mutableShow = false
    }
  }
}
</script>

<style lang="less">
@import 'modal.less';
</style>
