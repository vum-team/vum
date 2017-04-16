<template>
  <div class="calendar">
    <div class="toolbar">
      <div class="year-picker">
        <div :class="'icon icon-prev ' + (reachMinYear ? 'disabled' : '')" @click="prevYear()"></div>
        <div class="year-value">{{currentYear}}</div>
        <div :class="'icon icon-next ' + (reachMaxYear ? 'disabled' : '')" @click="nextYear()"></div>
      </div>
      <div class="month-picker">
        <div :class="'icon icon-prev ' + (reachMin ? 'disabled' : '')" @click="prevMonth()"></div>
        <div class="month-value">{{currentMonth+1}}</div>
        <div :class="'icon icon-next ' + (reachMax ? 'disabled' : '')" @click="nextMonth()"></div>
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

    <div :class="'months ' + (transition ? 'transition' : '')" v-swipe:start="_start" v-swipe:move="_move" v-swipe:end="_end">
      <div class="months-inner" v-bind:style="{ transform: 'translate3d(' + diff + 'px, 0, 0)' }" v-transitionend="_transitionend">
        <div class="month prev-year-month" v-if="changeyear">
          <div v-bind:class="_dateClass(d)" v-for="(d, index) in prevYearDates" :key="index">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month prev-month" v-show="!changeyear">
          <div v-bind:class="_dateClass(d)" v-for="(d, index) in prevMonthDates" :key="index">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month current-month">
          <div v-bind:class="_dateClass(d)" v-for="(d, index) in currentMonthDates" :key="index" @click="select(d)">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month next-month" v-show="!changeyear">
          <div v-bind:class="_dateClass(d)" v-for="(d, index) in nextMonthDates" :key="index">
            <span>{{d.d}}</span>
          </div>
        </div>
        <div class="month next-year-month" v-if="changeyear">
          <div v-bind:class="_dateClass(d)" v-for="(d, index) in nextYearDates" :key="index">
            <span>{{d.d}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Store from './store'
import moment from 'moment'

const FORMAT = 'YYYY-MM-DD'

export default {
  props: {
    date: {
      type: String
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
    const data = this.store.data
    data.transition = false
    data.diff = 0
    data.width = 0
    data.changeyear = false // tag to show: change month or change year
    return data
  },
  methods: {
    nextMonth () {
      if (this.reachMax) return false
      this.transition = true
      this.diff = -this.width
    },
    prevMonth () {
      if (this.reachMin) return false
      this.transition = true
      this.diff = this.width
    },
    nextYear () {
      if (this.reachMaxYear) return false
      this.store.genYearDates()
      this.transition = true
      this.changeyear = true // add a tag
      this.diff = -this.width
    },
    prevYear () {
      console.log(1)
      if (this.reachMinYear) return false
      this.store.genYearDates()
      this.transition = true
      this.changeyear = true // add a tag
      this.diff = this.width
    },
    select (d) {
      console.log('select', d)
      if (d.nextMonth) {
        this.nextMonth()
        this.toSelectDate = d.date
      } else if (d.prevMonth) {
        this.prevMonth()
        this.toSelectDate = d.date
      } else {
        this.store.select(d.date)
      }
    },
    updateWidth () {
      this.width = this.$el.getBoundingClientRect().width
    },
    _start () {
      this.updateWidth() // the calendar may be hidden after inited, for example, the calendar maybe in a popup
    },
    _move (point, diff, time) {
      const x = diff.x
      if (this.reachMax && x < 0) {
        this.diff = -Math.pow(-x, 0.7)
      } else if (this.reachMin && x > 0) {
        this.diff = Math.pow(x, 0.7)
      } else {
        this.diff = x
      }
    },
    _end (point, diff, time) {
      if (!diff) return false
      const x = diff.x
      if ((this.reachMax && x < 0) || (this.reachMin && x > 0)) {
        this.transition = true
        this.diff = 0
        return false
      }
      if (x > 100 || (x > 30 && time < 200)) {
        this.prevMonth()
      } else if (x < -100 || (x < -30 && time < 200)) {
        this.nextMonth()
      } else {
        this.transition = true
        this.diff = 0
      }
    },
    _transitionend () {
      console.log('transitionend')
      this.transition = false
      const store = this.store
      console.log(this.diff)
      if (this.diff > 0) {
        this.changeyear ? store.prevYear() : store.prevMonth()
      } else if (this.diff < 0) {
        this.changeyear ? store.nextYear() : store.nextMonth()
      }
      if (this.toSelectDate) this.store.select(this.toSelectDate)
      this.toSelectDate = undefined
      this.diff = 0
      this.changeyear = false
    },
    _sameDate (a, b) {
      return moment(a).format(FORMAT) === moment(b).format(FORMAT)
    },
    _dateClass (d) {
      return {
        date: true,
        selected: this._sameDate(d.date, this.selectedDate),
        'today': this._sameDate(d.date, this.today),
        'disabled': d.disabled,
        'current-date': d.currentMonth,
        'prev-date': d.prevMonth,
        'next-date': d.nextMonth
      }
    }
  },
  mounted () {
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

    // this.date = moment(this.store.data.selectedDate).format(this.format)
    this.$nextTick(() => {
      this.updateWidth()
    })
  },
  watch: {
    selectedDate (v, ov) {
      const date = moment(v).format(this.format)
      this.$emit('change', date)
    }
  }
}
</script>

<style lang="less" scoped>
@import './calendar.less';
</style>
