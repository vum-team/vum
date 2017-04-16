<template>
  <div class="circle"
       v-bind:style="{
         width: diameter + 'px',
         height: diameter + 'px'
       }">
    <svg :width="diameter" :height="diameter" :view-port="'0 0 ' + diameter + ' ' + diameter" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle
        :r="radius-lineWidth"
        :cx="radius"
        :cy="radius"
        fill="transparent"
        :stroke="backgroundColor"
        :stroke-width="lineWidth"
        :stroke-dasharray="dasharray"
        stroke-dashoffset="0"
        ></circle>
      <circle
        class="bar"
        :r="radius-lineWidth"
        :cx="radius"
        :cy="radius"
        fill="transparent"
        :stroke="foregroundColor"
        :stroke-width="lineWidth"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="(100-circlePercent)/100*(diameter-lineWidth*2)*3.141592658 + 'px'"
        v-bind:style="{
          'transition-duration': (duration/1000)+'s'
        }"
        ></circle>
    </svg>
    <div class="text"
         v-bind:style="{
           color: textColor,
           'font-size': textSize+'px'
         }">{{textFormat.replace('{percent}', textPercent)}}</div>
  </div>
</template>

<script>
const PI = Math.PI
export default {
  props: {
    percent: { // percent of hight, 0 ~ 100
      type: Number,
      default: 0,
      required: true
    },
    diameter: { // the diameter of circle, include line width
      type: Number,
      default: 120
    },
    lineWidth: { // the line width of circle
      type: Number,
      default: 8
    },
    foregroundColor: {
      type: String,
      default: '#04BE02'
    },
    backgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, .3)'
    },
    textFormat: {
      type: String,
      default: '{percent}' // format the text in circle
    },
    textColor: {
      type: String,
      default: '#999'
    },
    textSize: {
      type: Number,
      default: 24
    },
    duration: {
      type: Number,
      default: 600 // duration of animation
    }
  },
  data () {
    return {
      textPercent: 0, // the really percent used in text
      circlePercent: 0 // the really percent used in circle
    }
  },
  computed: {
    dasharray () {
      return (this.diameter - this.lineWidth * 2) * PI
    },
    radius () {
      return this.diameter / 2
    }
  },
  watch: {
    percent (v, ov) {
      this.percent = v
      this.$nextTick(this.sync)
    }
  },
  methods: {
    sync () { // sync p with percent in 'duration' time
      let t = this.textPercent
      let i = 0
      clearInterval(this.interval)
      // increase text percent with interval
      this.interval = setInterval(() => {
        if (i >= this.duration) {
          clearInterval(this.interval)
          this.textPercent = this.percent
          return
        }
        t += (this.percent - this.textPercent) / 10 // increase t
        this.textPercent = parseInt(t)
        i += 20
      }, 20)
      // increase circle
      this.circlePercent = this.percent
    }
  },
  mounted () {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.sync()
    }, 200) // delay for initial value
  },
  destroyed () {
    // do clear
    clearTimeout(this.timeout)
    clearInterval(this.interval)
  }
}
</script>

<style lang="less" scoped>
svg .circle {
  transition-property: stroke-dashoffset;
}
.circle {
  position: relative;
  margin: 20px auto;
}
.text {
  position: absolute;
  height: 32px;
  line-height: 32px;
  top: 50%;
  left: 0;
  margin-top: -16px;
  text-align: center;
  width: 100%;
}
</style>
