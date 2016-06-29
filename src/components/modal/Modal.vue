<template>
  <div class="modal-overlay" v-if="show" transition="modal-overlay"></div>
  <div class="modal" v-if="show" transition="modal">
    <div class="modal-inner">
      <div class="modal-title">
        <slot name="title">Confirm</slot>
      </div>
      <div class="modal-text">
        <slot name="content"></slot>
      </div>
    </div>
    <slot name="buttons">
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    }
  }
}
</script>

<style lang="less">
@import 'modal.less';
</style>
