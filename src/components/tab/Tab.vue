<template>
  <div class="tab-container">
    <div :class="{
      'buttons-tab' : style === 'default',
      'buttons-row' : style === 'button' || style === 'button-bordered',
      'button-bordered' : style === 'button-bordered',
      'button-small': size === 'small',
      'button-large': size === 'large'
      }">
      <a class="button" 
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
    },
    style: {
      type: String,
      default: 'default' // default, button, button-bordered
    },
    size: {
      type: String,
      default: 'default'
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
