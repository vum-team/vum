<template>
  <modal :show.sync='show'>
    <div slot="title">{{title}}</div>
    <div slot="content">{{content}}</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button" v-on:click="onClick()">{{okText}}</span>
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
    onOk: {
      type: Function,
      required: false
    }
  },
  components: {
    Modal
  },
  methods: {
    onClick () {
      this.show = false
      if (this.onOk) {
        this.onOk()
      }
    }
  }
}
</script>
