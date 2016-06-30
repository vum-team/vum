<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Pull To Refresh</h1>
    </header>
    <div class="page-content">
      <pull-to-refresh :on-refresh="onRefresh">
        <header class='demos-header'>
          <h1 class="demos-title">Pull To Refresh</h1>
        </header>
        <div class='content-padded'>
          <h2>Pull down please!</h2>
        </div>
      </pull-to-refresh>
    </div>
  </div>
</template>

<script>
import PullToRefresh from '../components/pull-to-refresh'

export default {
  components: {
    PullToRefresh
  },
  methods: {
    onRefresh (done) {
      setTimeout(function () {
        done()
      }, 2000)
    }
  }
}
</script>
