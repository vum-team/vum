<template>
  <div class="calendar">
    <div class="toolbar">
      <div class="year-picker">
        <div class="icon icon-prev" @click="prevYear()"></div>
        <div class="year-value">{{currentYear}}</div>
        <div class="icon icon-next" @click="nextYear()"></div>
      </div>
      <div class="month-picker">
        <div class="icon icon-prev" @click="prevMonth()"></div>
        <div class="year-value">{{currentMonth+1}}</div>
        <div class="icon icon-next" @click="nextMonth()"></div>
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
        <div class="date" v-for="d in currentMonthDates" track-by="$index" @click="select(d.date)">
          <span :class="{
            selected: d.selected,
            'today': d.today,
            'disabled': d.disabled,
            'current-month': d.currentMonth,
            'prev-month': d.prevMonth,
            'next-month': d.nextMonth
            }">{{d.date.date()}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from './store'

export default {
  props: {
    date: {
      type: String,
      required: true,
      twoWay: true
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    max: {
      type: String,
      default: undefined
    },
    min: {
      type: String,
      default: undefined
    },
    disableDates: {
      type: Array,
      default: undefined
    },
    disableWeekend: {
      type: Boolean,
      default: undefined
    },
    disable: {
      type: Function,
      default: undefined
    }
  },
  data () {
    const store = new Store()
    this.store = store
    return this.store.data
  },
  methods: {
    nextMonth () {
      this.store.nextMonth()
    },
    prevMonth () {
      this.store.prevMonth()
    },
    nextYear () {
      this.store.nextYear()
    },
    prevYear () {
      this.store.prevYear()
    },
    select (d) {
      this.store.select(d)
    }
  },
  ready () {
    this.store.config({
      min: this.min,
      max: this.max,
      disable: this.disable,
      disableDates: this.disableDates,
      disableWeekend: this.disableWeekend,
      format: this.format
    })
    if (this.date) {
      this.store.select(this.date)
    }

    this.date = this.store.data.selectedDate.format(this.format)
  },
  watch: {
    selectedDate (v, ov) {
      this.date = v.format(this.format)
    }
  }
}
</script>

<style lang="less" scoped>
@import './calendar.less';
</style>
