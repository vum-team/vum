<template>
  <div :class="{ 'search-bar' : true, focus: focus }" @click="onClick($event)">
    <form class="search-outer">
      <div class="search-inner">
        <i class="icon icon-search"></i>
        <input type="search" class="search-input" id="search-input" placeholder="{{searchText}}" v-model="input" @blur="blur()">
        <a href="javascript:" class="icon icon-clear" id="search-clear" @click="clear()"></a>
      </div>
      <label for="search-input" class="search-text" id="search-text">
        <i class="icon icon-search"></i>
        <span>{{searchText}}</span>
      </label>
    </form>
    <a href="javascript:" class="search-cancel" id="search-cancel">{{cancelText}}</a>
  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: String,
      required: true,
      twoWay: true
    },
    searchText: {
      type: String,
      default: 'Search'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },
  data () {
    return {
      focus: false
    }
  },
  methods: {
    onClick (e) {
      const input = this.$el.querySelectorAll('.search-input')[0]
      if (e.target.className === 'search-cancel') {
        this.focus = false
        this.input = ''
        input.blur()
        return
      }
      this.focus = true
      input.focus()
    },
    blur () {
    },
    clear () {
      this.input = ''
    }
  }
}
</script>

<style lang="less" scoped>
@import 'searchbar.less';
</style>
