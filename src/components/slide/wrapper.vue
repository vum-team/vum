<template>
  <div class="slide-wrap {{ transition && !touching ? 'transition' : '' }}" v-swipe:start="_swipeStart" v-swipe:move="_swipeMove" v-swipe:end="_swipeEnd">
    <div class="slide-inner" v-bind:style="{ transform: 'translate3d('+(-this.activeIndex*100+diff/width*100)+'%, 0, 0)' }" v-transitionend="end">
      <slide class="shadow-slide-first" :show.sync="true">
        <img src="../../assets/images/slide/3.jpg" alt="">
      </slide>
      <slot></slot>
      <slide class="shadow-slide-last" :show.sync="true">
        <img src="../../assets/images/slide/0.jpg" alt="">
      </slide>
    </div>
    <div class="bullets">
      <div class="bullet {{ activeIndex === i || (activeIndex === amount - 1 && i === 1) || (activeIndex === 0 && i === amount - 2) ? 'active' : ''}}" v-for="i in bullets"></div>
    </div>
  </div>
</template>

<script>
import Slide from './slide'

export default {
  props: {
    activeIndex: {  // the activeindex of real slide index from 1, because of shadow slide
      type: Number,
      default: 1,
      twoWay: true
    },
    autoPlay: {
      type: Number,
      default: 3000,
      twoWay: true
    },
    lazy: { // lazy load content
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      width: 0,
      amount: 0,
      diff: 0,
      touching: false,
      transition: true
    }
  },
  components: {
    Slide
  },
  computed: {
    bullets () {
      const r = []
      for (let i = 1; i < this.amount - 1; i++) {
        r.push(i)
      }
      return r
    }
  },
  methods: {
    _swipeStart (point, diff) {
      clearInterval(this.interval)
    },
    _swipeMove (point, diff, time) {
      if ((this.activeIndex === 0 && diff.x > 0) || (this.activeIndex === this.amount - 1 && diff.x < 0)) {
        this.diff = Math.pow(Math.abs(diff.x), 0.8) * (diff.x > 0 ? 1 : -1)
      } else {
        this.diff = diff.x
      }
      this.touching = true
    },
    _swipeEnd (point, diff, time) {
      this.touching = false
      if (Math.abs(diff.x) >= this.width / 2 || // move long
        (Math.abs(diff.x) > 20 && time < 150) // or move shot but fast
        ) {
        if (diff.x < 0 && this.activeIndex < this.amount - 1) this.activeIndex ++
        if (diff.x > 0 && this.activeIndex > 0) this.activeIndex --
      }
      this.diff = 0
      this._setAutoPlay()
    },
    _updateChildren () {
      this.$children.forEach((c, i) => {
        const a = this.activeIndex
        c.show = !this.lazy || c.show || (a === i || a === i - 1 || a === i + 1)
      })
    },
    _setAutoPlay () {
      if (this.autoPlay <= 0) return
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.activeIndex ++
      }, this.autoPlay)
    },
    end () {
      this._updateChildren()
      if (this.activeIndex === this.amount - 1 || this.activeIndex === 0) {
        this.transition = false
        this.activeIndex = this.activeIndex === 0 ? this.amount - 2 : 1
        setTimeout(() => {  // nexttick does not work
          this.transition = true
        }, 100)
      }
    }
  },
  watch: {
    activeIndex (v, ov) {
      if (v < 0) this.activeIndex = this.amount - 1
      else if (v > this.amount - 1) this.activeIndex = 0
      else this.activeIndex = v
    },
    autoPlay (v, ov) {
      this._setAutoPlay()
    }
  },
  ready () {
    this.width = this.$el.getBoundingClientRect().width
    this.amount = this.$children.length
    this._setAutoPlay()
    this._updateChildren()
  }
}
</script>

<style lang="less" scoped>
@import './wrapper.less';
</style>
