<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left" v-back-link>
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Popup</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showPopup()">Show Popup</a></p>
        <p><a href="javascript:;" class="button" v-on:click="showFullPopup()">Show Full Screen Popup</a></p>
        <p><a href="javascript:;" class="button" v-on:click="showCustomPopup()">Show Custom Popup</a></p>
      </div>
    </div>
    <popup :show.sync="show">
      <h2 class="demos-sub-title">Popup Content</h2>
      <div class="content-padded">
        <p>You can put any content here</p>
      </div>
    </popup>
    <popup :show.sync="showFull" :full="true">
      <h2 class="demos-sub-title">Full Page Popup</h2>
      <div class="content-padded">
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
      </div>
    </popup>
    <popup :show.sync="showCustom" title="Custom With Grids">
      <div class="grids">
        <a href="javascript:;" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </a>
        <a href="javascript:;" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </a>
        <a href="javascript:;" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/home/button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </a>
      </div>
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
      show: false,
      showFull: false,
      showCustom: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    showFullPopup () {
      this.showFull = true
    },
    showCustomPopup () {
      this.showCustom = true
    }
  }
}
</script>
