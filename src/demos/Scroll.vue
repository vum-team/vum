<template>
  <div class="page">
    <simple-header title="Scroll" :back-link="true"></simple-header>
    <page-content>
      <scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
        <div class='content-padded' id="list">
          <h2>current time: {{time}}</h2>
          <h3>Pull to refresh and infinite scroll</h3>
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
          <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
          <p>Write some HTML, grab some JSON, create a Vue instance, that's it.</p>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import Scroll from '../components/scroll'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Scroll
  },
  data () {
    return {
      time: new Date()
    }
  },
  methods: {
    onRefresh (done) {
      let self = this
      setTimeout(function () {
        self.time = new Date()
        done()  // call done
      }, 2000)
    },
    onInfinite (done) {
      console.log('infinite')
      setTimeout(function () {
        var f = document.createDocumentFragment()
        for (let i = 0; i < 10; i++) {
          let p = document.createElement('p')
          p.textContent = 'Write some HTML, grab some JSON, create a Vue instance, that\'s it.'
          f.appendChild(p)
        }
        document.getElementById('list').appendChild(f)
        done()  // call done()
      }, 2000)
    }
  }
}
</script>
