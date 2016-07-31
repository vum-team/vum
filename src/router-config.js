/**
 * vue-router does not support reverse transition
 */

export default class RouterConfig {
  constructor (router) {
    this.router = router
    this.history = {}
  }
  config () {
    const history = this.history
    const router = this.router
    this.router.beforeEach(function (t) {
      const to = t.to.path
      const from = t.from.path
      if (history[to]) {
        router.app.$el.className = 'transition-reverse'
        history[to] = null
      } else {
        history[from] = true
        router.app.$el.className = ''
      }
      t.next()
    })
  }
}
