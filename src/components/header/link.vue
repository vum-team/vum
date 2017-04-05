<template>
  <a :class="'button button-link ' + (left ? 'left' : 'right') + ' ' + (edge ? 'edge' : '')">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    left: { // pull left
      type: Boolean,
      default: false
    },
    edge: { // edge
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import './link.less';
</style>
