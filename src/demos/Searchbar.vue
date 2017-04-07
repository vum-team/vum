<template>
  <div class="page">
    <simple-header title="SearchBar" :back-link="true"></simple-header>
    <page-content>
      <searchbar @input="input"></searchbar>
    </page-content>
  </div>
</template>
<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import Searchbar from '../components/searchbar'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Searchbar
  },
  data () {
    return {
      searchInput: ''
    }
  },
  methods: {
    input (v) {
      console.log(v)
    }
  }
}
</script>
