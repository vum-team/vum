<template>
  <div class="calendar">
    <div class="toolbar">
      <div class="year-picker">
        <div class="icon icon-prev" @click="prevYear()"></div>
        <div class="year-value">{{year}}</div>
        <div class="icon icon-next" @click="nextYear()"></div>
      </div>
      <div class="month-picker">
        <div class="icon icon-prev" @click="prevMonth()"></div>
        <div class="year-value">{{month+1}}</div>
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

const store = new Store()

export default {
  props: {
    selectedDate: {
      type: String,
      required: false,
      default: '2016-12-12'
    }
  },
  data () {
    return store
  },
  methods: {
    nextMonth () {
      store.nextMonth()
    },
    prevMonth () {
      store.prevMonth()
    },
    nextYear () {
      store.nextYear()
    },
    prevYear () {
      store.prevYear()
    },
    select (d) {
      store.select(d)
    }
  }
}
</script>

<style lang="less" scoped>
@import './calendar.less';
</style>
