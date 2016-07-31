/**
 * vue-router does not support reverse transition
 */

export default class RouterConfig {
  constructor (router) {
    this.router = router
    this.history = window.sessionStorage
  }
  config () {
    const history = this.history
    const router = this.router
    this.router.beforeEach(function (t) {
      const to = t.to.path
      const from = t.from.path
      if (history.getItem(to)) {
        router.app.$el.className = 'transition-reverse'
        history.removeItem(to)
      } else {
        history.setItem(from, 1)
        router.app.$el.className = ''
      }
      t.next()
    })
  }
}
