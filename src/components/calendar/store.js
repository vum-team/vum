import moment from 'moment'

const Store = class {
  constructor () {
    this.currentDate = moment()
    this.currentMonthDates = []
    this.prevMonthDates = []
    this.nextMonthDates = []
    this.selectedDates = []

    this.select()
  }

  select (d) {
    d = moment(d || this.currentDate)
    this.selectedDates = [d]
    this.year = d.year()
    this.month = d.month()
    this.date = d.date()
    this.genDates()
  }

  getSelectedDates (f) {
    f = f || 'YYYY-MM-DD'
    return this.selectedDates.map(d => {
      moment(d).format(f)
    })
  }

  genDates () {
    const dates = []
    for (var i = 1; i <= this.selectedDates[0].endOf('month').date(); i++) {
      dates.push({
        date: i,
        currentMonth: true,
        currentDate: this.currentDate.date() === i,
        selected: this.selectedDates[0].date() === i
      })
    }

    if (this.currentDate.startOf('month').day() !== 1) {
      var start = this.currentDate.startOf('month').day() || 7  // sunday is 0, change to 7 to make it easy to caculate
      let prev = this.currentDate.clone().subtract(1, 'months').endOf('month')
      for (var j = start - 1; j >= 1; j--) {
        dates.unshift({
          date: prev.date(),
          prevMonth: true
        })
        prev.subtract(1, 'days')
      }
    }

    if (this.currentDate.endOf('month').day() !== 0) {
      let next = this.currentDate.clone().add(1, 'months').startOf('month')
      for (var k = this.currentDate.endOf('month').day() + 1; ; k++) {
        dates.push({
          date: next.date(),
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

  nextMonth () {
    this.currentDate.add(1, 'months')
    this.select()
  }
  prevMonth () {
    this.currentDate.subtract(1, 'months')
    this.select()
  }
  nextYear () {
    this.currentDate.add(1, 'years')
    this.select()
  }
  prevYear () {
    this.currentDate.subtract(1, 'years')
    this.select()
  }
}

export default Store
