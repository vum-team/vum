<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Popup</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showPopup()">Show Popup</a></p>
      </div>
    </div>
    <popup :show.sync="show">
      <h2 class="demos-sub-title">Popup Content</h2>
      <p>You can put any content here</p>
    </popup>
  </div>
</template>

<script>
import Popup from '../components/popup'

export default {
  components: {
    Popup
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>
