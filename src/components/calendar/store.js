import moment from 'moment'

const Store = class {
  constructor () {
    this.today = moment()
    this.currentMonthDates = []
    this.prevMonthDates = []
    this.nextMonthDates = []
    this.selectedDates = []

    this.select()
  }

  select (d) {
    d = moment(d || this.today)
    this.selectedDates = [d]
    this.currentMonth = d
    this.update()
  }

  update () {
    this.year = this.currentMonth.year()
    this.month = this.currentMonth.month()
    this.genDates(this.year, this.month)
  }

  genDates (year, month) {
    const dates = []
    const selected = this.selectedDates[0].clone()
    const today = this.today.clone()
    const current = this.currentMonth
    for (var i = 1; i <= current.endOf('month').date(); i++) {
      const date = moment().year(year).month(month).date(i)
      dates.push({
        date: date,
        currentMonth: true,
        today: this.sameDate(today, date),
        selected: this.sameDate(selected, date)
      })
    }

    if (current.clone().startOf('month').day() !== 1) {
      var start = current.clone().startOf('month').day() || 7  // sunday is 0, change to 7 to make it easy to caculate
      let prev = current.clone().subtract(1, 'months').endOf('month')
      for (var j = start - 1; j >= 1; j--) {
        dates.unshift({
          date: prev.clone(),
          prevMonth: true
        })
        prev.subtract(1, 'days')
      }
    }

    if (current.clone().endOf('month').day() !== 0) {
      let next = current.clone().add(1, 'months').startOf('month')
      for (var k = current.clone().endOf('month').day() + 1; ; k++) {
        dates.push({
          date: next.clone(),
          nextMonth: true
        })
        if (next.day() === 0) {
          break
        }
        next.add(1, 'days')
      }
    }

    this.currentMonthDates = dates
  }

  sameDate (a, b) {
    return a.clone().startOf('date').isSame(b.clone().startOf('date'))
  }

  nextMonth () {
    this.currentMonth.add(1, 'months')
    this.update()
  }
  prevMonth () {
    this.currentMonth.subtract(1, 'months')
    this.update()
  }
  nextYear () {
    this.currentMonth.add(1, 'years')
    this.update()
  }
  prevYear () {
    this.currentMonth.subtract(1, 'years')
    this.update()
  }
}

export default Store
