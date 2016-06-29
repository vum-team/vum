<template>
  <div class="tab-container">
    <div class="buttons-tab">
      <a class="tab-link button" 
         v-for="item in items" 
         v-bind:class="{ 'active' : ($index === active) }"
         v-on:click="onClick($index)"
         >{{item.title}}</a>
    </div>
    <div class="tabs">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    onClick (active) {
      this.active = active
      this.$children[active].show = true
      this.$broadcast('change', active)
    }
  }
}
</script>

<style lang="less">
@import 'tabs.less';
</style>
