<template>
  <div class="page">
    <simple-header title="Columns" :back-link="true"></simple-header>
    <content>
      <circle-progress :percent="c1"></circle-progress>
      <circle-progress :percent="c2" foreground-color="#f60"></circle-progress>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import CircleProgress from '../components/circle-progress'

export default {
  components: {
    SimpleHeader,
    Content,
    CircleProgress
  },
  data () {
    return {
      c1: 30,
      c2: 70
    }
  },
  ready () {
    setInterval(() => {
      this.c1 = this.rand()
      this.c2 = this.rand()
    }, 3000)
  },
  methods: {
    rand () {
      return parseInt(Math.random() * 100)
    }
  }
}
</script>
