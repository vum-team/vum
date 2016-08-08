<template>
  <div class="calendar">
    <div class="toolbar">
      <div class="year-picker">
        <div class="icon icon-prev"></div>
        <div class="year-value">{{y}}</div>
        <div class="icon icon-next"></div>
      </div>
      <div class="month-picker">
        <div class="icon icon-prev"></div>
        <div class="year-value">{{m}}</div>
        <div class="icon icon-next"></div>
      </div>
    </div>
    <div class="weekdays">
      <div class="weekday">周一</div>
      <div class="weekday">周二</div>
      <div class="weekday">周三</div>
      <div class="weekday">周四</div>
      <div class="weekday">周五</div>
      <div class="weekday">周六</div>
      <div class="weekday">周日</div>
    </div>

    <div class="months">
      <div class="month">
        <div class="date" v-for="d in dates" track-by="$index">
          <span>{{d}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    currentDate: {
      type: String,
      required: false,
      default: '2016-12-12'
    }
  },
  data () {
    return {
      y: 2016,
      m: 12,
      d: 12,
      dates: []
    }
  },
  ready () {
    let i = 1
    while (this.dates.length < 35) {
      this.dates.push(i)
      i = (i > 31 ? 1 : i + 1)
    }
    moment
  }
}
</script>

<style lang="less" scoped>
@import './calendar.less';
</style>
