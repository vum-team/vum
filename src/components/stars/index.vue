<template>
  <div class="stars">
    <div class="star" @click="click(1)"><icon :icon="mutableAmount < 0.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(2)"><icon :icon="mutableAmount < 1.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(3)"><icon :icon="mutableAmount < 2.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(4)"><icon :icon="mutableAmount < 3.5 ? 'star' : 'star-fill'"></icon></div>
    <div class="star" @click="click(5)"><icon :icon="mutableAmount < 4.5 ? 'star' : 'star-fill'"></icon></div>
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
  data () {
    return {
      mutableAmount: this.amount
    }
  },
  methods: {
    click (i) {
      if (this.readonly) return false
      this.mutableAmount = (this.mutableAmount === i ? i - 1 : i)
      this.$emit('change', this)
    },
    change (s) {
      this.mutableAmount = s
      this.$emit('change', this)
    }
  }
}
</script>

<style lang="less" scoped>
@import './stars.less';
</style>
