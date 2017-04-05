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
    show: {
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
    overlayClick () {
      this.mutableShow = false
    }
  },
  watch: {
    show (v, ov) {
      this.mutableShow = v
    },
    mutableShow (v, ov) {
      this.$emit(v ? 'show' : 'hide')
    }
  }
}
</script>

<style lang="less">
@import 'modal.less';
</style>
