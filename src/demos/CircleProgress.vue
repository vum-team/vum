<template>
  <div class="page">
    <simple-header title="Circle" :back-link="true"></simple-header>
    <page-content>
      <circle-progress :percent="c1"></circle-progress>
      <circle-progress :percent="c2" foreground-color="#f60" text-format="{percent}%"></circle-progress>
      <div class="row">
        <div class="col-50">
          <circle-progress :percent="c3" :diameter="100" :text-size="20"></circle-progress>
        </div>
        <div class="col-50">
          <circle-progress :percent="c4" :diameter="100" :text-size="20" text-color="#f60" foreground-color="#f60" text-format="{percent}%"></circle-progress>
        </div>
      </div>

    </page-content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import CircleProgress from '../components/circle-progress'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    CircleProgress
  },
  data () {
    return {
      c1: 30,
      c2: 70,
      c3: 15,
      c4: 55
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.c1 = this.rand()
      this.c2 = this.rand()
      this.c3 = this.rand()
      this.c4 = this.rand()
    }, 3000)
  },
  methods: {
    rand () {
      return parseInt(Math.random() * 100)
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>
