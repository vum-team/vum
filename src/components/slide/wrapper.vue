<template>
  <div class="slide-wrap">
    <div class="slide-inner" @touchmove="touchmove($event)">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    touchmove (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
@import './wrapper.less';
</style>
