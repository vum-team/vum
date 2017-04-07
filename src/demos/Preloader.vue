<template>
  <div class="page">
    <simple-header title="Preloader" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <p><m-button @click.native="showPreloader()">Show Preloader</m-button></p>
      </div>

    </page-content>
    <preloader ref="preloader"></preloader>
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
      this.$refs.preloader.open()
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$refs.preloader.close()
      }, 3000)
    }
  }
}
</script>
