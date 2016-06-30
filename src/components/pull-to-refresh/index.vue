<template>
  <div class="pull-to-refresh"
       v-bind:class="{
         'pull-down': (state === 0),
         'pull-up': (state === 1),
         refreshing: (state === 2),
         touching: touching
       }"
      @touchstart="touchStart($event)"
      @touchmove="touchMove($event)"
      @touchend="touchEnd($event)"
       >
    <div class="pull-to-refresh-inner"
      :style="{ transform: 'translate3d(0, ' + top + 'px, 0)' }"
      >
      <div class="pull-to-refresh-layer">
        <div class="preloader"></div>
        <div class="pull-to-refresh-arrow"></div>
        <span class="label-down">Pull Down to Refresh</span>
        <span class="label-up">Release to Refresh</span>
        <span class="label-refresh">Refreshing...</span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 44
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: true
    }
  },
  data () {
    return {
      top: 0,
      state: 0, // 0:down, 1: up, 2: refreshing
      startY: 0,
      touching: false
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
      this.touching = true
    },
    touchMove (e) {
      if (this.$el.scrollTop > 0) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    touchEnd (e) {
      this.touching = false
      if (this.state === 2) { // in refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else {  // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    refresh () {
      this.state = 2
      this.top = this.offset
      this.onRefresh(this.done)
    },
    done () {
      this.state = 0
      this.top = 0
    }
  }
}
</script>
<style lang="less" scoped>
@import 'pull-to-refresh.less';
</style>
