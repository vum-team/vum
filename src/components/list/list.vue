<template>
  <div class="list">
    <div class="list-title" ref="title" v-if="showTitle">
      <slot name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
    <div class="list-append" ref="append" v-if="showAppend">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showTitle: true,
      showAppend: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.empty(this.$refs.title.innerHTML)) this.showTitle = false
      if (this.empty(this.$refs.append.innerHTML)) this.showAppend = false
    })
  },
  methods: {
    empty (t) {
      if (!t) return true
      return !t.trim()
    }
  }
}
</script>
