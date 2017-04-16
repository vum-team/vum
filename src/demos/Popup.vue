<template>
  <div class="page">
    <simple-header title="Popup" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <p><m-button @click.native="$refs.p1.open()">Show Popup</m-button></p>
        <p><m-button @click.native="$refs.p2.open()">Show Full Screen Popup</m-button></p>
        <p><m-button @click.native="$refs.p3.open()">Show Custom Popup</m-button></p>
      </div>
    </page-content>
    <popup ref="p1">
      <h2 class="demos-sub-title">Popup Content</h2>
      <div class="content-padded">
        <p>You can put any content here</p>
      </div>
    </popup>
    <popup :full="true" ref="p2">
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
    <popup title="Custom With Grids" ref="p3">
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
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import Content from '../components/content'
import Popup from '../components/popup'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Popup,
    'm-button': Button
  }
}
</script>
