export default {
  bind () {
    this.el.addEventListener('transitionend', (e) => this.end(e))
  },
  update (v, ov) {
    this.transitionend = v
  },
  end () {
    this.transitionend()
  }
}
