<template>
  <div class="page">
    <page-header>
      <header-link :left="true" :edge="true" v-back-link>
        <icon icon="back"></icon>Back
      </header-link>
      <page-title id='title'>Popover(click me)</page-title>
      <header-link id="edit">Edit</header-link>
      <popover trigger="#edit">
        <popover-item>Add</popover-item>
        <popover-item>Remove</popover-item>
        <popover-item>Edit</popover-item>
      </popover>
      <popover trigger="#title">
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
      </popover>
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
      <popover trigger="#footer-0" position="top">
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
      </popover>
      <popover trigger="#footer-1" position="top">
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
      </popover>
      <popover trigger="#footer-2" position="top">
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
      </popover>
      <popover trigger="#footer-3" position="top">
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
        <popover-item>popover Item</popover-item>
      </popover>
    </page-footer>
    <page-content>
      <div class="content-padded">
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.<a id="link0">popover</a></p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.<a id="link1">popover</a></p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <popover trigger="#link0">
          <popover-item>popover Item</popover-item>
          <popover-item>popover Item</popover-item>
          <popover-item>popover Item</popover-item>
          <popover-item>popover Item</popover-item>
        </popover>
        <popover trigger="#link1">
          <popover-item>popover Item</popover-item>
          <popover-item>popover Item</popover-item>
          <popover-item>popover Item</popover-item>
          <popover-item>popover Item</popover-item>
        </popover>
      </div>
    </page-content>
  </div>
</template>

<script>
import { Header, Title, Link } from '../components/header'
import { Footer, Item } from '../components/footer'
import Icon from '../components/icons'
import Content from '../components/content'
import {Popover, PopoverItem} from '../components/popover'

export default {
  components: {
    'page-header': Header,
    'header-link': Link,
    'page-title': Title,
    'page-footer': Footer,
    'footer-item': Item,
    Icon,
    'page-content': Content,
    Popover,
    PopoverItem
  }
}
</script>
