<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Modal</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showAlert()">Show Alert</a></p>
        <p><a href="javascript:;" class="button" v-on:click="showConfirm()">Show Custom Confirm</a></p>
        <p><a href="javascript:;" class="button" v-on:click="showPrompt()">Show Prompt</a></p>
        <p><a href="javascript:;" class="button" v-on:click="showModal()">Show Custom Modal</a></p>
      </div>

      <alert :show.sync="alert" :title="'Hello'" :content="'Hello there!'" :on-ok="onOk"></alert>
      <confirm :show.sync="confirm" :title="'Hello'" :content="'Hello there!'" :on-ok="onOk"></confirm>
      <prompt :show.sync="prompt" :title="'Name'" :content="'Enter your name please!'" :input.sync="input" :on-ok="onPrompt"></prompt>
      <modal :show.sync="modal">
        <div slot="title">Payment</div>
        <div slot="content">Choose your payment!</div>
        <div slot="buttons" class="modal-buttons">
          <span class="modal-button modal-button-cancel" v-on:click="onClick(1)">Cancel</span>
          <span class="modal-button" v-on:click="onClick(1)">Paypay</span>
          <span class="modal-button modal-button-bold" v-on:click="onClick(2)">Bankcard</span>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import { Alert, Confirm, Prompt, Modal } from '../components/modal'

export default {
  components: {
    Alert,
    Confirm,
    Modal,
    Prompt
  },
  data () {
    return {
      alert: false,
      confirm: false,
      modal: false,
      prompt: false,

      input: ''
    }
  },
  methods: {
    showAlert () {
      this.alert = true
    },
    showConfirm () {
      this.confirm = true
    },
    showPrompt () {
      this.prompt = true
    },
    showModal () {
      this.modal = true
    },
    onOk () {
      console.log('ok')
    },
    onPrompt () {
      console.log('your name:' + this.input)
    },
    onClick (index) {
      console.log('click' + index)
      this.modal = false
    }
  }
}
</script>
