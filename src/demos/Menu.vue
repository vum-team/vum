<template>
  <div class="page">
    <page-header>
      <header-link :left="true" :edge="true" v-back-link>
        <icon icon="back"></icon>Back
      </header-link>
      <page-title id='title'>Menu(click me)</page-title>
      <header-link id="edit">Edit</header-link>
      <menu trigger="#edit">
        <menu-item>Add</menu-item>
        <menu-item>Remove</menu-item>
        <menu-item>Edit</menu-item>
      </menu>
      <menu trigger="#title">
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
      </menu>
    </page-header>
    <page-footer>
      <footer-item id='footer-0'>
        <span class="icon demo-icon-home"></span>
        <label>Home</label>
      </footer-item>
      <footer-item id='footer-1'>
        <span class="icon demo-icon-search"></span>
        <label>Search</label>
      </footer-item>
      <footer-item id='footer-2'>
        <span class="icon demo-icon-noti"></span>
        <span class="badge">2</span>
        <label>Noti</label>
      </footer-item>
      <footer-item id='footer-3'>
        <span class="icon demo-icon-me"></span>
        <label>About</label>
      </footer-item>
      <menu trigger="#footer-0" position="top">
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
      </menu>
      <menu trigger="#footer-1" position="top">
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
      </menu>
      <menu trigger="#footer-2" position="top">
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
      </menu>
      <menu trigger="#footer-3" position="top">
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
        <menu-item>Menu Item</menu-item>
      </menu>
    </page-footer>
    <content>
      <div class="content-padded">
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.<a id="link0">Menu</a></p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.<a id="link1">Menu</a></p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <menu trigger="#link0">
          <menu-item>Menu Item</menu-item>
          <menu-item>Menu Item</menu-item>
          <menu-item>Menu Item</menu-item>
          <menu-item>Menu Item</menu-item>
        </menu>
        <menu trigger="#link1">
          <menu-item>Menu Item</menu-item>
          <menu-item>Menu Item</menu-item>
          <menu-item>Menu Item</menu-item>
          <menu-item>Menu Item</menu-item>
        </menu>
      </div>
    </content>
  </div>
</template>

<script>
import { Header, Title, Link } from '../components/header'
import { Footer, Item } from '../components/footer'
import Icon from '../components/icons'
import Content from '../components/content'
import { Menu, MenuItem } from '../components/menu'

export default {
  components: {
    'page-header': Header,
    'header-link': Link,
    'page-title': Title,
    'page-footer': Footer,
    'footer-item': Item,
    Icon,
    Content,
    Menu,
    MenuItem
  }
}
</script>
