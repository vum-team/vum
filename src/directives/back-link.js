export default {
  bind () {
    this.el.addEventListener('click', function () {
      window.history.back()
    })
  }
}
