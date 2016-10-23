<template>
  <page-header>
    <header-link>About</header-link>
    <header-title>VUM</header-title>
  </page-header>
  <content>
    <header class='demos-header'>
      <h1 class="demos-title">CSS</h1>
    </header>
    <div class="grids grids-small">
      <a v-link="{ path: 'page' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/page.png" alt="">
        </div>
        <p class="grid_label">
          Page
        </p>
      </a>
      <a v-link="{ path: 'buttons' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/button.png" alt="">
        </div>
        <p class="grid_label">
          Button
        </p>
      </a>
      <a v-link="{ path: 'column' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/column.png" alt="">
        </div>
        <p class="grid_label">
          Column
        </p>
      </a>
      <a v-link="{ path: 'grid' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/grid.png" alt="">
        </div>
        <p class="grid_label">
          Grid
        </p>
      </a>
      <a v-link="{ path: '/list' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/list.png" alt="">
        </div>
        <p class="grid_label">
          List
        </p>
      </a>
      <a v-link="{ path: '/contacts' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/contacts.png" alt="">
        </div>
        <p class="grid_label">
          Contacts
        </p>
      </a>
      <a v-link="{ path: '/form' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/form.png" alt="">
        </div>
        <p class="grid_label">
          Form
        </p>
      </a>
      <a v-link="{ name: 'icons' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/toast.png" alt="">
        </div>
        <p class="grid_label">
          Icons
        </p>
      </a>
      <a v-link="{ name: 'result' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/result.png" alt="">
        </div>
        <p class="grid_label">
          Result
        </p>
      </a>
      <a v-link="{ name: 'stars' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/star.png" alt="">
        </div>
        <p class="grid_label">
          Stars
        </p>
      </a>
    </div>

    <h2 class="demos-title">Components</h2>
    <div class="grids grids-small">
      <a v-link="{ path: 'modal' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/modal.png" alt="">
        </div>
        <p class="grid_label">
          Modal
        </p>
      </a>
      <a v-link="{ path: 'preloader' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/preloader.png" alt="">
        </div>
        <p class="grid_label">
          Preloader
        </p>
      </a>
      <a v-link="{ name: 'toast' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/toast.png" alt="">
        </div>
        <p class="grid_label">
          Toast
        </p>
      </a>
      <a v-link="{ path: 'tab' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/tab.png" alt="">
        </div>
        <p class="grid_label">
          Tab
        </p>
      </a>
      <a v-link="{ path: 'scroll' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/scroll.png" alt="">
        </div>
        <p class="grid_label">
          Scroll
        </p>
      </a>
      <a v-link="{ path: 'popup' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/window.png" alt="">
        </div>
        <p class="grid_label">
          Popup
        </p>
      </a>
      <a v-link="{ path: 'popwindow' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/window.png" alt="">
        </div>
        <p class="grid_label">
          PopWindow
        </p>
      </a>
      <a v-link="{ path: 'actions' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/menu.png" alt="">
        </div>
        <p class="grid_label">
          Actions
        </p>
      </a>
      <a v-link="{ path: 'searchbar' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/search.png" alt="">
        </div>
        <p class="grid_label">
          Searchbar
        </p>
      </a>
      <a v-link="{ path: 'calendar' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/calendar.png" alt="">
        </div>
        <p class="grid_label">
          Calendar
        </p>
      </a>
      <a v-link="{ path: 'slide' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/slide.png" alt="">
        </div>
        <p class="grid_label">
          Slide
        </p>
      </a>
      <a v-link="{ path: 'side-panel' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/side.png" alt="">
        </div>
        <p class="grid_label">
          SidePanel
        </p>
      </a>
      <a v-link="{ path: 'menu' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/menu.png" alt="">
        </div>
        <p class="grid_label">
          Menu
        </p>
      </a>
      <a v-link="{ path: 'circle' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/home/circle.png" alt="">
        </div>
        <p class="grid_label">
          Circle
        </p>
      </a>
    </div>
  </content>
</template>
<script>
import Grid from '../components/grid'
import { Header, HeaderLink, HeaderTitle } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    'page-header': Header,
    HeaderLink,
    HeaderTitle,
    Content,
    Grid
  }
}
</script>
