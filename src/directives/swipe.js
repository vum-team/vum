export default {
  bind () {
    this.el.addEventListener('touchstart', (e) => this.start(e))
    this.el.addEventListener('touchmove', (e) => this.move(e))
    this.el.addEventListener('touchend', (e) => this.end(e))
  },
  update (v, ov) {
    if (this.arg === 'start') this.swipeStart = v
    if (this.arg === 'move') this.swipeMove = v
    if (this.arg === 'end') this.swipeEnd = v
  },
  unbind () {
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
