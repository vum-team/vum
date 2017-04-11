<template>
  <div :class="'slide-wrap ' + (transition && !touching ? ' transition' : '')" v-swipe:start="_swipeStart" v-swipe:move="_swipeMove" v-swipe:end="_swipeEnd">
    <div class="slide-inner" v-bind:style="{ transform: 'translate3d('+(-mutableActiveIndex*100+diff/width*100)+'%, 0, 0)' }" v-transitionend="_transitionEnd">
      <slide class="shadow-slide-first" :show="true">
        <div v-html="shadowSlideFirst"></div>
      </slide>
      <slot></slot>
      <slide class="shadow-slide-last" :show="true">
        <div v-html="shadowSlideLast"></div>
      </slide>
    </div>
    <div class="bullets">
      <div :class="'bullet ' + (mutableActiveIndex === i || (mutableActiveIndex === amount - 1 && i === 1) || (mutableActiveIndex === 0 && i === amount - 2) ? 'active' : '')" v-for="i in bullets"></div>
    </div>
  </div>
</template>

<script>
import Slide from './slide'

export default {
  props: {
    activeIndex: {  // the activeIndex of real slide index from 1, because of shadow slide
      type: Number,
      default: 1
    },
    autoPlay: {
      type: Number,
      default: 0
    },
    lazy: { // lazy load content
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mutableActiveIndex: this.activeIndex,
      width: 0,
      amount: 0,
      diff: 0,
      touching: false,
      transition: false,
      shadowSlideFirst: '',
      shadowSlideLast: ''
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
      if ((this.mutableActiveIndex === 0 && diff.x > 0) || (this.mutableActiveIndex === this.amount - 1 && diff.x < 0)) {
        this.diff = Math.pow(Math.abs(diff.x), 0.8) * (diff.x > 0 ? 1 : -1)
      } else {
        this.diff = diff.x
      }
      console.log(this.diff)
      this.touching = true
    },
    _swipeEnd (point, diff, time) {
      this.touching = false
      if (Math.abs(diff.x) >= this.width / 2 || // move long
        (Math.abs(diff.x) > 20 && time < 200) // or move shot but fast
        ) {
        if (diff.x < 0 && this.mutableActiveIndex < this.amount - 1) this.next()
        if (diff.x > 0 && this.mutableActiveIndex > 0) this.prev()
      }
      this.transition = true
      this.diff = 0
      this._setAutoPlay()
    },
    _updateChildren () {
      this.$children.forEach((c, i) => {
        const a = this.mutableActiveIndex
        c.show = !this.lazy || c.show || (a === i || a === i - 1 || a === i + 1)
      })
      const children = this.$children
      console.log(this.$children)
      this.shadowSlideLast = children[1].$el.innerHTML
      this.shadowSlideFirst = children[children.length - 2].$el.innerHTML
    },
    _setAutoPlay () {
      if (this.autoPlay <= 0) return
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.next()
      }, this.autoPlay)
    },
    _transitionEnd () {
      this.transition = false
      this._updateChildren()
      if (this.mutableActiveIndex === this.amount - 1 || this.mutableActiveIndex === 0) {
        this.mutableActiveIndex = this.mutableActiveIndex === 0 ? this.amount - 2 : 1
      }
    },
    next () {
      this.transition = true
      this.mutableActiveIndex++
    },
    prev () {
      this.transition = true
      this.mutableActiveIndex--
    }
  },
  watch: {
    mutableActiveIndex (v, ov) {
      if (v < 0) this.mutableActiveIndex = this.amount - 1
      else if (v > this.amount - 1) this.mutableActiveIndex = 0
      else this.mutableActiveIndex = v
    },
    autoPlay (v, ov) {
      this._setAutoPlay()
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.width = this.$el.getBoundingClientRect().width
      this.amount = this.$children.length
      this._setAutoPlay()
      this._updateChildren()
    })
  }
}
</script>

<style lang="less" scoped>
@import './wrapper.less';
</style>
