<template>
  <header class='demos-header'>
    <h1 class="demos-title">Modal</h1>
  </header>

  <div class='demos-content-padded'>
    <p><a href="javascript:;" class="button" v-on:click="showAlert()">Show Alert</a></p>
  </div>

  <Alert :show.sync="show" :title="'Hello'" :content="'Hello there!'" :on-ok="onOk"></Alert>
</template>

<script>
import { Alert } from '../components'

export default {
  components: {
    Alert
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showAlert () {
      this.show = true
    },
    onOk () {
      window.console.log('ok')
    }
  }
}
</script>
