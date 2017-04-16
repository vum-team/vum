<template>
  <modal :show='show' ref="modal">
    <div slot="title">{{title}}</div>
    <div slot="content">{{content}}</div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button" @click="_onClick()">{{okText}}</span>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Alert'
    },
    content: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: 'OK'
    },
    onOk: {
      type: Function
    }
  },
  components: {
    Modal
  },
  methods: {
    open () {
      this.$refs.modal.open()
      this.$emit('open', this)
    },
    close () {
      this.$refs.modal.close()
      this.$emit('close', this)
    },
    _onClick () {
      if (this.onOk) {
        this.onOk()
      }
      this.close()
    }
  }
}
</script>
