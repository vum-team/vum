export default {
  bind () {
    this._start = (e) => this.start(e)
    this._move = (e) => this.move(e)
    this._end = (e) => this.end(e)

    if (document.createElement('div').ontouchstart !== undefined) {
      this.el.addEventListener('touchstart', this._start)
      this.el.addEventListener('touchmove', this._move)
      this.el.addEventListener('touchend', this._end)
    } else {
      this.el.addEventListener('mousedown', this._start)
      this.el.addEventListener('mousemove', this._move)
      this.el.addEventListener('mouseup', this._end)
    }
  },
  update (v, ov) {
    if (this.arg === 'start') this.swipeStart = v
    if (this.arg === 'move') this.swipeMove = v
    if (this.arg === 'end') this.swipeEnd = v
  },
  unbind () {
    this.el.removeEventListener('touchstart', this._start)
    this.el.removeEventListener('touchmove', this._move)
    this.el.removeEventListener('touchend', this._end)
    this.el.removeEventListener('mousedown', this._start)
    this.el.removeEventListener('mousemove', this._move)
    this.el.removeEventListener('mouseup', this._end)
  },
  _point (e) {
    if (e.touches) {
      return {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      }
    } else {
      return {
        x: e.pageX,
        y: e.pageY
      }
    }
  },
  start (e) {
    this.touching = true
    const point = this._point(e)
    this.startPoint = point
    this.startTime = +new Date()
    if (this.swipeStart) this.swipeStart(this.startPoint)
    this.diff = {
      x: 0,
      y: 0
    }
  },
  move (e) {
    if (!this.touching) return false
    e.preventDefault()
    const point = this._point(e)
    this.movePoint = point
    this.diff = {
      x: point.x - this.startPoint.x,
      y: point.y - this.startPoint.y
    }
    if (this.swipeMove) this.swipeMove(point, this.diff, +new Date() - this.startTime)
  },
  end (e) {
    if (this.swipeEnd) this.swipeEnd(this.movePoint, this.diff, +new Date() - this.startTime)
    this.touching = false
  }
}
