<template>
  <div class="my-page">
    <page-header>
      <header-link>About</header-link>
      <header-title>VUM</header-title>
    </page-header>
    <page-content>
      <header class='demos-header'>
        <h1 class="demos-title">CSS</h1>
      </header>
      <div class="grids grids-small">
        <router-link :to="{ path: 'page' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/page.png" alt="">
          </div>
          <p class="grid_label">
            Page
          </p>
        </router-link>
        <router-link :to="{ path: 'buttons' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </router-link>
        <router-link :to="{ path: 'column' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/column.png" alt="">
          </div>
          <p class="grid_label">
            Column
          </p>
        </router-link>
        <router-link :to="{ path: 'grid' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/grid.png" alt="">
          </div>
          <p class="grid_label">
            Grid
          </p>
        </router-link>
        <router-link :to="{ path: '/list' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/list.png" alt="">
          </div>
          <p class="grid_label">
            List
          </p>
        </router-link>
        <router-link :to="{ path: '/contacts' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/contacts.png" alt="">
          </div>
          <p class="grid_label">
            Contacts
          </p>
        </router-link>
        <router-link :to="{ path: '/form' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/form.png" alt="">
          </div>
          <p class="grid_label">
            Form
          </p>
        </router-link>
        <router-link :to="{ name: 'icons' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/toast.png" alt="">
          </div>
          <p class="grid_label">
            Icons
          </p>
        </router-link>
        <router-link :to="{ name: 'result' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/result.png" alt="">
          </div>
          <p class="grid_label">
            Result
          </p>
        </router-link>
        <router-link :to="{ name: 'stars' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/star.png" alt="">
          </div>
          <p class="grid_label">
            Stars
          </p>
        </router-link>
      </div>

      <h2 class="demos-title">Components</h2>
      <div class="grids grids-small">
        <router-link :to="{ path: 'modal' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/modal.png" alt="">
          </div>
          <p class="grid_label">
            Modal
          </p>
        </router-link>
        <router-link :to="{ path: 'preloader' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/preloader.png" alt="">
          </div>
          <p class="grid_label">
            Preloader
          </p>
        </router-link>
        <router-link :to="{ name: 'toast' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/toast.png" alt="">
          </div>
          <p class="grid_label">
            Toast
          </p>
        </router-link>
        <router-link :to="{ path: 'tab' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/tab.png" alt="">
          </div>
          <p class="grid_label">
            Tab
          </p>
        </router-link>
        <router-link :to="{ path: 'scroll' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/scroll.png" alt="">
          </div>
          <p class="grid_label">
            Scroll
          </p>
        </router-link>
        <router-link :to="{ path: 'popup' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/window.png" alt="">
          </div>
          <p class="grid_label">
            Popup
          </p>
        </router-link>
        <router-link :to="{ path: 'popwindow' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/window.png" alt="">
          </div>
          <p class="grid_label">
            PopWindow
          </p>
        </router-link>
        <router-link :to="{ path: 'actions' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/menu.png" alt="">
          </div>
          <p class="grid_label">
            Actions
          </p>
        </router-link>
        <router-link :to="{ path: 'searchbar' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/search.png" alt="">
          </div>
          <p class="grid_label">
            Searchbar
          </p>
        </router-link>
        <router-link :to="{ path: 'calendar' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/calendar.png" alt="">
          </div>
          <p class="grid_label">
            Calendar
          </p>
        </router-link>
        <router-link :to="{ path: 'slide' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/slide.png" alt="">
          </div>
          <p class="grid_label">
            Slide
          </p>
        </router-link>
        <router-link :to="{ path: 'side-panel' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/side.png" alt="">
          </div>
          <p class="grid_label">
            SidePanel
          </p>
        </router-link>
        <router-link :to="{ path: 'popover' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/menu.png" alt="">
          </div>
          <p class="grid_label">
            Popover
          </p>
        </router-link>
        <router-link :to="{ path: 'circle' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/circle.png" alt="">
          </div>
          <p class="grid_label">
            Circle
          </p>
        </router-link>
      </div>
    </page-content>
  </div>
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
    'page-content': Content,
    Grid
  }
}
</script>
