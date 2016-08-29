import BackLink from './directives/back-link'
import Swipe from './directives/swipe'
import Transitionend from './directives/transitionend'

/**
 * vue-router does not support reverse transition
 */

class RouterConfig {
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
      if (history.getItem(to) || (from && from.startsWith(to))) {
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

export default {
  install (Vue) {
    Vue.directive('back-link', BackLink)
    Vue.directive('swipe', Swipe)
    Vue.directive('transitionend', Transitionend)
  },
  router (router) {
    const rc = new RouterConfig(router)
    rc.config()
  }
}
