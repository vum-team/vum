<template>
  <div class="page">
    <simple-header title="Preloader" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <p><m-button v-on:click="showPreloader()">Show Preloader</m-button></p>
      </div>

    </page-content>
    <preloader :show.sync="show"></preloader>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import { Button } from '../components/buttons'
import Preloader from '../components/preloader'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Preloader,
    'm-button': Button
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
