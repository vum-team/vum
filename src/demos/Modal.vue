<template>
  <header class='demos-header'>
    <h1 class="demos-title">Modal</h1>
  </header>

  <div class='demos-content-padded'>
    <p><a href="javascript:;" class="button" v-on:click="showAlert()">Show Alert</a></p>
    <p><a href="javascript:;" class="button" v-on:click="showConfirm()">Show Confirm</a></p>
  </div>

  <modal :show.sync="alert" :ok="ok" :ok-text="'You are welcome!'">
    <span slot="title">Hello</span>
    <span>Thank you very much!<span>
  </modal>

  <modal :type="'confirm'" :show.sync="confirm" :ok="ok" :cancel="cancel" :ok-text="'YES'" :cancel-text="'NO'">
    <span slot="title">Hello</span>
    <span>Give me your hand!<span>
  </modal>
</template>

<script>
import { Modal } from '../components'

export default {
  components: {
    'modal': Modal
  },
  data () {
    return {
      alert: false,
      confirm: false
    }
  },
  methods: {
    showAlert () {
      this.alert = true
    },
    showConfirm () {
      this.confirm = true
    },
    ok () {
      window.console.log('OK')
    },
    cancel () {
      window.console.log('Cancel')
    }
  }
}
</script>
