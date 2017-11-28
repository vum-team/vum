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
    this.router.beforeEach(function (to, from, next) {
      console.log(to, from, next)
      try {
        const _to = to.path
        const _from = from.path
        const scrollTop = router.app.$el.querySelector('.page-content').scrollTop
        const h = db.get(_to)
        if ((h && h.history) || (_from && _from.indexOf(_to) === 0)) {
          router.app.$el.className = 'transition-reverse'
          h.history = false
          db.set(_to, h)
        } else {
          db.set(_from, {
            scrollTop: scrollTop,
            history: true
          })
          router.app.$el.className = ''
        }
      } catch (e) {
        // swallo error
        console.log(e)
      }
      next()
    })
    this.router.afterEach(function (to, from, next) {
      const h = db.get(to.path)
      if (h && h.scrollTop) {
        Vue.nextTick(() => {
          console.log('should scroll to' + h.scrollTop)
          const _to = router.app.$el.querySelectorAll('.page-content')[1]
          if (_to) _to.scrollTop = h.scrollTop  // TODO:
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
