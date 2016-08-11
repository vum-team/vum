<template>
  <div class="page">
    <simple-header title="Preloader" :back-link="true"></simple-header>
    <content>
      <div class='demos-content-padded'>
        <p><m-button v-on:click="showPreloader()">Show Preloader</m-button></p>
      </div>

    </content>
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
    Content,
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
