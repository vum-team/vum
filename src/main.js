import Vue from 'vue'
import Router from 'vue-router'

// VUI
import { Base } from './components/'

// demos
import Buttons from './demos/Buttons'
import Home from './demos/Home'
import Toast from './demos/Toast'

Vue.use(Router)

let App = Vue.extend({
  components: {
    Base
  }
})

let router = new Router()

router.map({
  '/': {
    component: Home
  },
  '/buttons': {
    component: Buttons
  },
  '/toast': {
    component: Toast
  }
})

router.start(App, '#app')
