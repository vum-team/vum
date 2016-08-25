import moment from 'moment'
import util from '../../util'

const FORMAT = 'YYYY-MM-DD'

const Store = class {
  constructor () {
    this.today = moment()
    this.currentMonthDates = []
    this.prevMonthDates = []
    this.nextMonthDates = []
    this.selectedDate
    this.data = {}

    this.conf = {
      min: '1970-01-01',  // max date
      max: '2030-12-31',  // min date
      format: FORMAT, // format
      disableDates: [], // disabled dates, eg: ['2012-12-12']
      disableWeekend: false, // disable weekend
      disable: undefined // function
    }

    this.select()
  }

  config (conf) {
    util.extend(this.conf, conf)
  }

  select (d) {
    if (!this._isValid(d)) return false
    d = moment(d || this.today)
    const s = this.selectedDate
    this.selectedDate = d.clone()
    this.currentMonth = d.clone()
    if (s && d.year() === s.year() && d.month() === s.month()) {
      // when select date of same month, no need to update all data
      this.updateData()
    } else {
      this.update()
    }
  }

  update () {
    const startTime = +new Date()
    this.currentMonthDates = this.genDates(this.currentMonth.year(), this.currentMonth.month())
    const nextMonth = this.currentMonth.clone().add(1, 'months')
    this.nextMonthDates = this.genDates(nextMonth.year(), nextMonth.month())
    const prevMonth = this.currentMonth.clone().subtract(1, 'months')
    this.prevMonthDates = this.genDates(prevMonth.year(), prevMonth.month())

    this.updateData()
    console.log(+new Date() - startTime)
  }

  // for performance: generate year dates when need
  genYearDates () {
    const nextYear = this.currentMonth.clone().add(1, 'years')
    this.nextYearDates = this.genDates(nextYear.year(), nextYear.month())
    const prevYear = this.currentMonth.clone().subtract(1, 'years')
    this.prevYearDates = this.genDates(prevYear.year(), prevYear.month())
    this.data.prevYearDates = this.prevYearDates
    this.data.nextYearDates = this.nextYearDates
    console.log(1)
  }

  updateData () {
    var d = this.data
    d.currentYear = this.currentMonth.year()
    d.currentMonth = this.currentMonth.month()
    d.selectedDate = this.selectedDate.format(FORMAT)
    d.today = this.today.format(FORMAT)
    d.currentMonthDates = this.currentMonthDates
    d.prevMonthDates = this.prevMonthDates
    d.nextMonthDates = this.nextMonthDates
    d.prevYearDates = []
    d.nextYearDates = []
    d.reachMax = this.reachMax()
    d.reachMin = this.reachMin()
    d.reachMaxYear = this.reachMaxYear()
    d.reachMinYear = this.reachMinYear()
    console.log(this.data)
  }

  genDates (year, month) {
    const dates = []
    const current = moment().year(year).month(month).clone()
    let i
    const self = this

    const add = (d, unshift) => {
      d.disabled = !self._isValid(d.date)
      d.d = d.date.date()
      d.date = d.date.format(FORMAT) // for performance
      Object.freeze(d)
      dates[unshift ? 'unshift' : 'push'](d)
    }

    for (i = 1; i <= current.clone().endOf('month').date(); i++) {
      const date = moment().year(year).month(month).date(i)
      add({
        date: date,
        currentMonth: true
      })
    }

    if (current.clone().startOf('month').day() !== 1) {
      var start = current.clone().startOf('month').day() || 7  // sunday is 0, change to 7 to make it easy to caculate
      let prev = current.clone().subtract(1, 'months').endOf('month')
      for (i = start - 1; i >= 1; i--) {
        add({
          date: prev.clone(),
          prevMonth: true
        }, true)
        prev.subtract(1, 'days')
      }
    }

    let next = current.clone().add(1, 'months').startOf('month')
    for (i = current.clone().endOf('month').day() + 1; ; i++) {
      add({
        date: next.clone(),
        nextMonth: true
      })
      if (next.day() === 0 && dates.length >= 42) {
        break
      }
      next.add(1, 'days')
    }
    return dates
  }

  sameDate (a, b) {
    return a.format(FORMAT) === b.format(FORMAT)
  }

  _isValid (date) {
    date = moment(date).clone().startOf('date')
    const conf = this.conf

    // check min max
    if (!this._isInRange(date)) return false

    // check disabled
    var disableDates = conf.disableDates || []

    for (let i = 0; i < disableDates.length; i++) {
      if (this.sameDate(disableDates[i], date)) return false
    }

    // check disable weekend
    if (conf.disableWeekend && (date.day() === 6 || date.day() === 0)) {
      return false
    }

    // check disable function
    if (conf.disable && conf.disable(date.format(conf.format), date)) {
      return false
    }
    return true
  }

  _isInRange (date) {
    date = moment(date).clone().startOf('date')
    const conf = this.conf
    if (conf.min && date.isBefore(conf.min) || conf.max && date.isAfter(conf.max)) return false
    return true
  }

  reachMax () {
    return this.currentMonth.clone().add(1, 'months').startOf('month').isAfter(this.conf.max)
  }

  reachMin () {
    return this.currentMonth.clone().subtract(1, 'months').startOf('month').isBefore(this.conf.min)
  }

  reachMaxYear () {
    return this.currentMonth.clone().add(1, 'years').startOf('month').isAfter(this.conf.max)
  }

  reachMinYear () {
    return this.currentMonth.clone().subtract(1, 'years').startOf('month').isBefore(this.conf.min)
  }

  nextMonth () {
    if (!this._isInRange(this.currentMonth.clone().add(1, 'months').startOf('month'))) return false
    this.currentMonth.add(1, 'months')
    this.update()
  }
  prevMonth () {
    if (!this._isInRange(this.currentMonth.clone().subtract(1, 'months').endOf('month'))) return false
    this.currentMonth.subtract(1, 'months')
    this.update()
  }
  nextYear () {
    if (!this._isInRange(this.currentMonth.clone().add(1, 'years').startOf('month'))) return false
    this.currentMonth.add(1, 'years')
    this.update()
  }
  prevYear () {
    if (!this._isInRange(this.currentMonth.clone().subtract(1, 'years').endOf('month'))) return false
    this.currentMonth.subtract(1, 'years')
    this.update()
  }
}

export default Store
