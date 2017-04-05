<template>
  <span :class="'icon icon-' + icon"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less">
@import 'icons.less';
</style>
