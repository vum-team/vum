export default {
  bind (el, binding) {
    el.addEventListener('transitionend', (e) => binding.value(e))
  }
}
