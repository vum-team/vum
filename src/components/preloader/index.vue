<template>
  <div>
    <overlay :show="mutableShow" :transparent="true"></overlay>
    <transition name="preloader-modal">
      <div class="preloader-modal" v-if="mutableShow">
        <span class="preloader preloader-white"></span>
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

<style lang="less">
@import 'preloader.less';
</style>
