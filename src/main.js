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
import Contacts from './demos/Contacts'
import Form from './demos/Form'
import Tab from './demos/Tab'
import Scroll from './demos/Scroll'

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
  },
  '/contacts': {
    component: Contacts
  },
  '/form': {
    component: Form
  },
  '/tab': {
    component: Tab
  },
  '/scroll': {
    component: Scroll
  }
})

router.start(App, '#app')
