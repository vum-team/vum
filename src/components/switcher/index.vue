<template>
  <label class="label-switch">
    <input type="checkbox" v-model="mutableChecked">
    <div class="checkbox"></div>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      mutableChecked: this.checked
    }
  },
  methods: {
    toggle () {
      this.mutableChecked ? this.uncheck() : this.check()
    },
    check () {
      this.mutableChecked = true
      this.$emit('check', this)
      this.$emit('change', this)
    },
    uncheck () {
      this.mutableChecked = false
      this.$emit('uncheck', this)
      this.$emit('change', this)
    }
  }
}
</script>

<style lang="less" scoped>
@import './switcher.less';
</style>
