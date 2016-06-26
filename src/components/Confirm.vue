<template>
  <modal :show.sync='show'>
    <div slot="title">{{title}}</div>
    <div slot="content">{{content}}</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel" v-on:click="_onCancel()">{{cancelText}}</span>
      <span class="modal-button" v-on:click="_onOk()">{{okText}}</span>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: false,
      default: 'Alert'
    },
    content: {
      type: String,
      required: false,
      default: ''
    },
    okText: {
      type: String,
      required: false,
      default: 'OK'
    },
    cancelText: {
      type: String,
      required: false,
      default: 'Cancel'
    },
    onOk: {
      type: Function,
      required: false
    },
    onCancel: {
      type: Function,
      required: false
    }
  },
  components: {
    Modal
  },
  methods: {
    _onOk () {
      this.show = false
      if (this.onOk) {
        this.onOk()
      }
    },
    _onCancel () {
      this.show = false
      if (this.onCancel) {
        this.onCancel()
      }
    }
  }
}
</script>
