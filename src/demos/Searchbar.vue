<template>
  <div class="page">
    <simple-header title="SearchBar" :back-link="true"></simple-header>
    <content>
      <searchbar :input.sync="searchInput"></searchbar>
    </content>
  </div>
</template>
<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import Searchbar from '../components/searchbar'

export default {
  components: {
    SimpleHeader,
    Content,
    Searchbar
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
