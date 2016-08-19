<template>
  <div class="slide-wrap {{ touching ? 'touching' : '' }}" v-swipe:move="_swipeMove" v-swipe:end="_swipeEnd">
    <div class="slide-inner" v-bind:style="{ transform: 'translate3d('+x+'px, 0, 0)' }">
      <slot></slot>
    </div>
    <div class="bullets">
      <div class="bullet {{ activeIndex === i ? 'active' : ''}}" v-for="i in bullets"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: Number,
      default: 0,
      twoWay: true
    },
    autoPlay: {
      type: Number,
      default: 3000,
      twoWay: true
    }
  },
  data () {
    return {
      width: 0,
      amount: 0,
      diff: 0,
      touching: false
    }
  },
  computed: {
    x () {
      return this.diff - this.activeIndex * this.width
    },
    bullets () {
      const r = []
      for (let i = 0; i < this.amount; i++) {
        r.push(i)
      }
      return r
    }
  },
  methods: {
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
    }
  },
  watch: {
    activeIndex (v, ov) {
      if (v < 0) this.activeIndex = this.amount - 1
      else if (v > this.amount - 1) this.activeIndex = 0
      else this.activeIndex = v
    },
    autoPlay (v, ov) {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        if (this.touching) return
        this.activeIndex ++
      }, this.autoPlay)
    }
  },
  ready () {
    this.width = this.$el.getBoundingClientRect().width
    this.amount = this.$children.length

    if (this.autoPlay > 0) {
      this.interval = setInterval(() => {
        if (this.touching) return
        this.activeIndex ++
      }, this.autoPlay)
    }
  }
}
</script>

<style lang="less" scoped>
@import './wrapper.less';
</style>
