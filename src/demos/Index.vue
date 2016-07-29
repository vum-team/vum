<template>
  <div class="page">
    <footer class="bar bar-tab">
      <a class="tab-item" v-bind:class="{ 'active' : currentView === 'home' }" v-on:click="changeView('home')">
        <span class="icon demo-icon-home"></span>
        <span class="tab-label">Home</span>
      </a>
      <a class="tab-item" v-bind:class="{ 'active' : currentView === 'search' }" v-on:click="changeView('search')">
        <span class="icon demo-icon-search"></span>
        <span class="tab-label">Search</span>
      </a>
      <a class="tab-item" v-bind:class="{ 'active' : currentView === 'noti' }" v-on:click="changeView('noti')">
        <span class="icon demo-icon-noti"></span>
        <span class="badge">2</span>
        <span class="tab-label">Noti</span>
      </a>
      <a class="tab-item" v-bind:class="{ 'active' : currentView === 'about' }" v-on:click="changeView('about')">
        <span class="icon demo-icon-me"></span>
        <span class="tab-label">About</span>
      </a>
    </footer>
    <component :is="currentView" keep-alive></component>
  </div>
</template>

<script>
import Home from './Home'
import Search from './Search'
import Noti from './Noti'
import About from './About'

export default {
  components: {
    'home': Home,
    'search': Search,
    'noti': Noti,
    'about': About
  },
  data () {
    return {
      currentView: 'home'
    }
  },
  methods: {
    changeView (view) {
      this.currentView = view
    }
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
