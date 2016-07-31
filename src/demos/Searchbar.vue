<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left" v-back-link>
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Icons</h1>
    </header>
    <div class="page-content">
      <searchbar :input.sync="searchInput"></searchbar>
    </div>
  </div>
</template>
<script>
import Searchbar from '../components/searchbar'

export default {
  components: {
    'searchbar': Searchbar
  },
  data () {
    return {
      searchInput: ''
    }
  },
  watch: {
    searchInput (v, ov) {
      console.log(v)
    }
  }
}
</script>
