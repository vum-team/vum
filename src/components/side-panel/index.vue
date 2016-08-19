<template>
  <div class="slide-wrap {{ touching ? 'touching' : '' }}" v-show="showWrap" v-swipe:start="slideStart" v-swipe:move="slideMove" v-swipe:end="slideEnd">
    <div class="side-overlay" v-show="show" transition="side-overlay" @click="show = false"></div>
    <div class="side" v-show="show" transition="side">
      <div class="panel" v-bind:style="{ transform: 'translate3d('+x+'px, 0, 0)' }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  },
  data () {
    return {
      showWrap: false,
      touching: false,
      x: 0
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
      this.touching = true
    },
    slideMove (point, diff, time) {
      if (diff.x > 0) {
      } else {
        this.x = -Math.pow(-diff.x, 0.9)
      }
    },
    slideEnd (point, diff, time) {
      this.touching = false
      if (this.x < 0 && (Math.abs(this.x) > 80 || Math.abs(this.x) > 20 && time < 200)) {
        this.show = false
      } else {
        this.x = 0
      }
    }
  },
  ready () {
  }
}
</script>

<style lang="less" scoped>
@import './side.less';
</style>
