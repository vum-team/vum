<template>
  <div class="list">
    <div class="list-title" v-el:title v-if="showTitle">
      <slot name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
    <div class="list-append" v-el:append v-if="showAppend">
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
  ready () {
    if (this.empty(this.$els.title.innerHTML)) this.showTitle = false
    if (this.empty(this.$els.append.innerHTML)) this.showAppend = false
  },
  methods: {
    empty (t) {
      if (!t) return true
      return !t.trim()
    }
  }
}
</script>
