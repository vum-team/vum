export default {
  inserted (el) {
    el.addEventListener('click', function () {
      window.history.back()
    })
  }
}
