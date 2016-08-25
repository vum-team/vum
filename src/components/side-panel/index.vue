<template>
  <div class="slide-wrap {{ touching ? 'touching' : '' }}" v-show="showWrap" v-swipe:start="slideStart" v-swipe:move="slideMove" v-swipe:end="slideEnd">
    <overlay :show.sync="show" :click="close" :opacity="opacity"></overlay>
    <div class="side" v-show="show" transition="side">
      <div class="panel" v-bind:style="{ transform: 'translate3d('+x+'px, 0, 0)' }">
        <slot></slot>
      </div>
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
    }
  },
  data () {
    return {
      width: 0,
      showWrap: false,
      touching: false,
      x: 0,
      opacity: 1
    }
  },
  watch: {
    show (v, ov) {
      if (v === true) {
        this.x = 0
        this.showWrap = v
      } else {
        setTimeout(() => {
          this.showWrap = v
        }, 300)
      }
    }
  },
  methods: {
    slideStart (point) {
      this.width = this.$el.querySelector('.side').getBoundingClientRect().width
      this.touching = true
    },
    slideMove (point, diff, time) {
      if (diff.x > 0) {
      } else {
        this.x = -Math.pow(-diff.x, 0.9)
        this.opacity = (this.width - Math.abs(this.x)) / this.width
      }
    },
    slideEnd (point, diff, time) {
      this.touching = false
      if (this.x < 0 && (Math.abs(this.x) > 80 || Math.abs(this.x) > 20 && time < 200)) {
        this.show = false
      } else {
        this.x = 0
      }
      this.opacity = 1
    },
    close () {
      this.show = false
    }
  },
  ready () {
  }
}
</script>

<style lang="less" scoped>
@import './side.less';
</style>
