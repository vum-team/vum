import BackLink from './directives/back-link'
import Swipe from './directives/swipe'
import Transitionend from './directives/transitionend'
import db from './db'
import Vue from 'vue'

/**
 * vue-router does not support reverse transition
 */

class RouterConfig {
  constructor (router) {
    this.router = router
  }
  config () {
    const router = this.router
    this.router.beforeEach(function (t) {
      try {
        const to = t.to.path
        const from = t.from.path
        const scrollTop = t.from.router.app.$el.querySelector('.page-content').scrollTop
        const h = db.get(to)
        if (h && h.history || (from && from.indexOf(to) === 0)) {
          router.app.$el.className = 'transition-reverse'
          h.history = false
          db.set(to, h)
        } else {
          db.set(from, {
            scrollTop: scrollTop,
            history: true
          })
          router.app.$el.className = ''
        }
      } catch (e) {
        // swallo error
        console.log(e)
      }
      t.next()
    })
    this.router.afterEach(function (t) {
      const h = db.get(t.to.path)
      if (h && h.scrollTop) {
        Vue.nextTick(() => {
          console.log('should scroll to' + h.scrollTop)
          const to = t.to.router.app.$el.querySelectorAll('.page-content')[1]
          if (to) to.scrollTop = h.scrollTop  // TODO:
        })
      }
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
