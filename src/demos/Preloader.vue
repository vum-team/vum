<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left" v-back-link>
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Preloader</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showPreloader()">Show Preloader</a></p>
      </div>

    </div>
    <preloader :show.sync="show"></preloader>
  </div>
</template>

<script>
import Preloader from '../components/preloader'

export default {
  components: {
    Preloader
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPreloader () {
      this.show = true
      let self = this
      clearTimeout(this.timeout)
      this.timeout = setTimeout(function () {
        self.show = false
      }, 3000)
    }
  }
}
</script>
