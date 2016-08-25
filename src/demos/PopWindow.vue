<template>
  <div class="page">
    <simple-header title="PopWindow" :back-link="true"></simple-header>
    <content>
      <div class='demos-content-padded'>
        <p><m-button v-on:click="show = true">Show PopWindow</m-button></p>
      </div>
    </content>
    <pop-window :show.sync="show">
      <h2 class="demos-sub-title">PopWindow Content</h2>
      <div class="content-padded">
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        <p>
          <m-button @click="show = false">Close</m-button>
        </p>
      </div>
    </pop-window>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import Content from '../components/content'
import PopWindow from '../components/popwindow'

export default {
  components: {
    SimpleHeader,
    Content,
    PopWindow,
    'm-button': Button
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
