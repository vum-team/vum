import Vue from 'vue'
import Router from 'vue-router'

// VUI
import { Base } from './components/'

// demos
import Home from './demos/Home'
import Buttons from './demos/Buttons'
import Column from './demos/Column'
import Grid from './demos/Grid'
import Modal from './demos/Modal'
import List from './demos/List'

Vue.use(Router)

let App = Vue.extend({
  components: {
    Base
  }
})

let router = new Router()

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/buttons': {
    component: Buttons
  },
  '/column': {
    component: Column
  },
  '/grid': {
    component: Grid
  },
  '/modal': {
    component: Modal
  },
  '/list': {
    component: List
  }
})

router.start(App, '#app')
