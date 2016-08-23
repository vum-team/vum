export default {
  bind () {
    this._start = (e) => this.start(e)
    this._move = (e) => this.move(e)
    this._end = (e) => this.end(e)
    this.el.addEventListener('touchstart', this._start)
    this.el.addEventListener('touchmove', this._move)
    this.el.addEventListener('touchend', this._end)
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
  },
  _point (e) {
    return {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    }
  },
  start (e) {
    e.preventDefault()
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
    e.preventDefault()
    if (this.swipeEnd) this.swipeEnd(this.movePoint, this.diff, +new Date() - this.startTime)
  }
}
