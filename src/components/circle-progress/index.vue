<template>
  <div class="circle"
       v-bind:style="{
         width: diameter + 'px',
         height: diameter + 'px'
       }">
    <svg width="{{diameter}}" height="{{diameter}}" viewPort="0 0 {{diameter}} {{diameter}}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle
        r="{{radius-lineWidth}}"
        cx="{{radius}}"
        cy="{{radius}}"
        fill="transparent"
        stroke="{{backgroundColor}}"
        stroke-width="{{lineWidth}}"
        stroke-dasharray="dasharray"
        stroke-dashoffset="0"
        ></circle>
      <circle
        class="bar"
        r="{{radius-lineWidth}}"
        cx="{{radius}}"
        cy="{{radius}}"
        fill="transparent"
        stroke="{{foregroundColor}}"
        stroke-width="{{lineWidth}}"
        stroke-dasharray="{{dasharray}}"
        stroke-dashoffset="{{(100-percent)/100*(diameter-lineWidth*2)*3.141592658 + 'px'}}"
        ></circle>
    </svg>
    <div class="text"
         v-bind:style="{
           color: textColor,
           'font-size': textSize+'px'
         }">{{textFormat.replace('{percent}', percent)}}</div>
  </div>
</template>

<script>
const PI = Math.PI
export default {
  props: {
    percent: { // percent of hight, 0 ~ 100
      type: Number,
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
      default: '{percent}'
    },
    textColor: {
      type: String,
      default: '#999'
    },
    textSize: {
      type: Number,
      default: 24
    }
  },
  computed: {
    dasharray () {
      return (this.diameter - this.lineWidth * 2) * PI
    },
    radius () {
      return this.diameter / 2
    }
  }
}
</script>

<style lang="less" scoped>
svg circle {
  transition: stroke-dashoffset .6s;
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
