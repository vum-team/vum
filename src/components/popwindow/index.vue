<template>
  <div>
    <overlay :show="mutableShow" :click="close"></overlay>
    <transition name="popwindow-modal">
      <div v-if="mutableShow"
           class="popwindow-modal">
        <div class="modal-content">
          <slot></slot>
        </div>
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
@import './popwindow.less';
</style>
