<template>
  <div>
    <overlay :show="mutableShow" :transparent="true" v-if="overlay"></overlay>
    <transition name="toast-modal">
      <div class="toast-modal" v-if="mutableShow">
        <div class="icon-wrap"><i :class="'icon icon-' + type"></i></div>
        <div class="text">{{text}}</div>
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
  data () {
    return {
      mutableShow: this.show
    }
  },
  methods: {
    open () {
      this.mutableShow = true
      this.$emit('open', this)
      clearTimeout(this.timeout)
      setTimeout(() => {
        this.close()
      }, this.duration)
    },
    close () {
      this.mutableShow = false
      this.$emit('close', this)
    }
  }
}
</script>

<style lang="less" scoped>
@import 'toast.less';
</style>
