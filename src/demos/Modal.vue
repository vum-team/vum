<template>
  <div class="page">
    <simple-header title="Modal" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <p><m-button @click.native="showAlert()">Show Alert</m-button></p>
        <p><m-button @click.native="showConfirm()">Show Custom Confirm</m-button></p>
        <p><m-button @click.native="showPrompt()">Show Prompt</m-button></p>
        <p><m-button @click.native="showModal()">Show Custom Modal</m-button></p>
      </div>
    </page-content>

    <alert :show="alert" :title="'Hello'" :content="'Hello there!'" :on-ok="onOk"></alert>
    <confirm :show="confirm" :title="'Hello'" :content="'Hello there!'" :on-ok="onOk"></confirm>
    <prompt :show="prompt" :title="'Name'" :content="'Enter your name please!'" :input="input" :on-ok="onPrompt"></prompt>
    <modal :show="modal" @show="log('show')" @hide="log('hide')">
      <div slot="title">Payment</div>
      <div slot="content">Choose your payment!</div>
      <div slot="buttons" class="modal-buttons">
        <span class="modal-button modal-button-cancel" v-on:click="onClick(1)">Cancel</span>
        <span class="modal-button" v-on:click="onClick(1)">Paypay</span>
        <span class="modal-button modal-button-bold" v-on:click="onClick(2)">Bankcard</span>
      </div>
    </modal>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import Content from '../components/content'
import { Alert, Confirm, Prompt, Modal } from '../components/modal'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Alert,
    Confirm,
    Modal,
    Prompt,
    'm-button': Button
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
      console.log(1)
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
    },
    log (m) {
      console.log(m)
    }
  }
}
</script>
