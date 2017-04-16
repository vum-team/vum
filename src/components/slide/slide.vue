<template>
  <div class="slide">
    <slot v-if="show"></slot>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
@import './slide.less';
</style>

<style lang="less">
.slide {
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide img {
  display: block;
  max-width: 100%;
}
</style>
