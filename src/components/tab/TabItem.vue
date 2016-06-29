<template>
  <div class="tab" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      index: 0,
      show: false
    }
  },
  created () {
    this.index = this.$parent.items.length
    this.show = this.$parent.active === this.index
    this.$parent.items.push({
      title: this.title
    })
  },
  events: {
    'change': function (active) {
      this.show = this.$parent.active === this.index
    }
  },
  beforeDestroy () {
    this.$parent.items.splice(this.index, 1)
  }
}
</script>
