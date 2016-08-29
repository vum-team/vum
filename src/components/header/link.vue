<template>
  <a class="button button-link {{ left ? 'pull-left' : 'pull-right' }}">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
@import './link.less';
</style>
