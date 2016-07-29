<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Toast</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showToast()">Show Toast</a></p>
      </div>

    </div>
    <toast :show.sync="show"></toast>
  </div>
</template>

<script>
import Toast from '../components/toast'

export default {
  components: {
    Toast
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showToast () {
      this.show = true
    }
  }
}
</script>
