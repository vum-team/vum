import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

// Router config
import RouterConfig from './router-config.js'

// Base
import Base from './components/'

// demos
import Index from './demos/Index'
import Buttons from './demos/Buttons'
import Column from './demos/Column'
import Grid from './demos/Grid'
import Modal from './demos/Modal'
import List from './demos/List'
import Contacts from './demos/Contacts'
import Form from './demos/Form'
import Icons from './demos/Icons'
import Tab from './demos/Tab'
import Scroll from './demos/Scroll'
import Popup from './demos/Popup'
import Preloader from './demos/Preloader'
import Actions from './demos/Actions'
import Toast from './demos/Toast'

Vue.use(Router)

let App = Vue.extend({
  components: {
    Base
  }
})

let router = new Router({
})

router.map({
  '/': {
    name: 'index',
    component: Index
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
  '/icons': {
    name: 'icons',
    component: Icons
  },
  '/tab': {
    component: Tab
  },
  '/scroll': {
    component: Scroll
  },
  '/popup': {
    component: Popup
  },
  '/preloader': {
    component: Preloader
  },
  '/toast': {
    name: 'toast',
    component: Toast
  },
  '/actions': {
    component: Actions
  }
})

router.start(App, '#app')

var rc = new RouterConfig(router)
rc.config()

FastClick.attach(document.body)
