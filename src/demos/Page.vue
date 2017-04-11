<template>
  <div class="page">
    <page-header>
      <header-link :left="true" :edge="true" v-back-link><icon icon="back"></icon>Back</header-link>
      <header-link>About</header-link>
      <header-title>VUM</header-title>
    </page-header>
    <second-header>
      <searchbar></searchbar>
    </second-header>
    <second-footer>
      <btn>dadsa</btn>
    </second-footer>
    <page-footer>
      <footer-item>
        <span class="icon demo-icon-home"></span>
        <label>Home</label>
      </footer-item>
      <footer-item>
        <span class="icon demo-icon-search"></span>
        <label>Search</label>
      </footer-item>
      <footer-item>
        <span class="icon demo-icon-noti"></span>
        <span class="badge">2</span>
        <label>Noti</label>
      </footer-item>
      <footer-item>
        <span class="icon demo-icon-me"></span>
        <label>About</label>
      </footer-item>
    </page-footer>
    <page-content>
      <div class="content-padded">
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
        <p>Expressions & computed properties with transparent dependency tracking.</p>
      </div>
    </page-content>
  </div>
</template>

<script>
import { Header, HeaderLink, HeaderTitle, SecondHeader } from '../components/header'
import Content from '../components/content'
import { Footer, SecondFooter, FooterItem } from '../components/footer'
import Icon from '../components/icons'
import { Button } from '../components/buttons'
import Searchbar from '../components/searchbar'

export default {
  components: {
    'page-header': Header,
    SecondHeader,
    HeaderLink,
    HeaderTitle,
    'page-content': Content,
    'page-footer': Footer,
    SecondFooter,
    FooterItem,
    'btn': Button,
    Icon,
    Searchbar
  }
}
</script>

<style lang="less">
.demo-icon-home {
  background-image: url("../assets/images/home/home.png");
  background-size: 100%;
}
.demo-icon-search {
  background-image: url("../assets/images/home/search.png");
  background-size: 100%;
}
.demo-icon-noti {
  background-image: url("../assets/images/home/button.png");
  background-size: 100%;
}
.demo-icon-me {
  background-image: url("../assets/images/home/person.png");
  background-size: 100%;
}
</style>
