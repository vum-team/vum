import moment from 'moment'
import util from '../../util'

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
      format: 'YYYY-MM-DD', // format
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
    this.selectedDate = d.clone()
    this.currentMonth = d.clone()
    this.update()
  }

  update () {
    this.currentMonthDates = this.genDates(this.currentMonth.year(), this.currentMonth.month())
    const nextMonth = this.currentMonth.clone().add(1, 'months')
    this.nextMonthDates = this.genDates(nextMonth.year(), nextMonth.date())

    this.updateData()
  }

  updateData () {
    var d = this.data
    d.currentYear = this.currentMonth.year()
    d.currentMonth = this.currentMonth.month()
    d.selectedDate = this.selectedDate
    d.today = this.today
    d.currentMonthDates = this.currentMonthDates
    d.prevMonthDates = this.prevMonthDates
    d.nextMonthDates = this.nextMonthDates
  }

  genDates (year, month) {
    const dates = []
    const selected = this.selectedDate.clone()
    const today = this.today.clone()
    const current = moment().year(year).month(month).clone()
    let i
    const self = this

    const add = (d, unshift) => {
      d.today = self.sameDate(today, d.date)
      d.selected = self.sameDate(selected, d.date)
      d.disabled = !self._isValid(d.date)
      dates[unshift ? 'unshift' : 'push'](d)
    }

    for (i = 1; i <= current.endOf('month').date(); i++) {
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

    if (current.clone().endOf('month').day() !== 0) {
      let next = current.clone().add(1, 'months').startOf('month')
      for (i = current.clone().endOf('month').day() + 1; ; i++) {
        add({
          date: next.clone(),
          nextMonth: true
        })
        if (next.day() === 0) {
          break
        }
        next.add(1, 'days')
      }
    }

    return dates
  }

  sameDate (a, b) {
    return moment(a).clone().startOf('date').isSame(moment(b).clone().startOf('date'))
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
