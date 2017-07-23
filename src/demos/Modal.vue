<template>
  <div class="page">
    <simple-header title="Modal" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <p><m-button @click.native="$refs.alert.open()">Show Alert</m-button></p>
        <p><m-button @click.native="$refs.confirm.open()">Show Custom Confirm</m-button></p>
        <p><m-button @click.native="$refs.prompt.open()">Show Prompt</m-button></p>
        <p><m-button @click.native="$refs.modal.open()">Show Custom Modal</m-button></p>
      </div>
    </page-content>

    <alert :title="'Hello'" :content="'Hello there!'" :on-ok="log" ref="alert"></alert>
    <confirm :title="'Hello'" :content="'Hello there!'" :on-ok="log" ref="confirm"></confirm>
    <prompt :title="'Name'" :content="'Enter your name please!'" input="Hello!" :on-ok="log" ref="prompt"></prompt>
    <modal @open="log('open')" @close="log('close')" ref="modal">
      <div slot="title">Payment</div>
      <div slot="content">Choose your payment!</div>
      <div slot="buttons" class="modal-buttons">
        <span class="modal-button modal-button-cancel" @click="$refs.modal.close()">Cancel</span>
        <span class="modal-button" @click="log(1)">Paypay</span>
        <span class="modal-button modal-button-bold" @click="log(2)">Bankcard</span>
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
    return {}
  },
  methods: {
    log (m) {
      console.log(m || 'log')
    }
  }
}
</script>
