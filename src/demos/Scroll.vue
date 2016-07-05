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
      <scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
        <header class='demos-header'>
          <h1 class="demos-title">Pull To Refresh</h1>
        </header>
        <div class='content-padded' id="list">
          <h2>current time: {{time}}</h2>
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
    </div>
  </div>
</template>

<script>
import Scroll from '../components/scroll'

export default {
  components: {
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
