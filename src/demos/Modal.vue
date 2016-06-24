<template>
  <header class='demos-header'>
    <h1 class="demos-title">Modal</h1>
  </header>

  <div class='demos-content-padded'>
    <p><a href="javascript:;" class="button" v-on:click="showAlert()">Show Alert</a></p>
    <p><a href="javascript:;" class="button" v-on:click="showConfirm()">Show Confirm</a></p>
    <p><a href="javascript:;" class="button" v-on:click="showModal()">Show Custom Modal</a></p>
  </div>

  <modal :show.sync="show">
    <div slot="title">Payment</div>
    <div slot="content">Choose your payment!</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button" v-on:click="onClick(1)">Cancel</span>
      <span class="modal-button" v-on:click="onClick(1)">Paypay</span>
      <span class="modal-button modal-button-bold" v-on:click="onClick(2)">Bankcard</span>
    </div>
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
      show: false
    }
  },
  methods: {
    showModal () {
      this.show = true
    },
    onClick (t) {
      window.console.log(t)
      this.modal = false
    }
  }
}
</script>
