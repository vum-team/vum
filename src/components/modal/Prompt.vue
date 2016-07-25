<template>
  <modal :show.sync='show'>
    <div slot="title">{{title}}</div>
    <div slot="content">
      {{content}}
      <p>
        <input class="modal-input" type="text" v-model="input" />
      </p>
    </div>
    <div slot="buttons" class="modal-buttons">
      <span class="modal-button modal-button-cancel" v-on:click="_onCancel()">{{cancelText}}</span>
      <span class="modal-button" :class="{ 'modal-button-disabled' : !input }" v-on:click="_onOk()">{{okText}}</span>
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
    input: {
      type: String,
      required: false,
      default: ''
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
      if (!this.input) return false
      if (this.onOk) {
        this.onOk(this.input)
      }
      this.show = false
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

<style lang="less" scoped>
@import "../variables.less";
p {
  margin: .5rem 0;
}
.modal-input {
  height: 1.6rem;
  line-height: 1.6rem;
  width: 9rem;
  font-size: @font-size-default;
  border: 0;
  padding: 0 .5rem;
}
</style>
