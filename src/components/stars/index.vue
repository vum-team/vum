<template>
  <div class="stars">
    <div class="star" @click="click(1)"><icon :icon="amount < 0.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(2)"><icon :icon="amount < 1.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(3)"><icon :icon="amount < 2.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(4)"><icon :icon="amount < 3.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(5)"><icon :icon="amount < 4.5 ? 'star' : 'star-fill'"></icon></div>
  </div>
</template>

<script>
import Icon from '../icons'

export default {
  props: {
    amount: {
      type: Number,
      required: true
    },
    readonly: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Icon
  },
  methods: {
    click (i) {
      if (this.readonly) return false
      this.amount = (this.amount === i ? i - 1 : i)
    }
  }
}
</script>

<style lang="less" scoped>
@import './stars.less';
</style>
