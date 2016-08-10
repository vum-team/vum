<template>
  <div class="page">
    <simple-header title="Actions" :back-link="true"></simple-header>
    <content>
      <calendar :date.sync='date' min="1990-12-12" max="2020-12-01"></calendar>
      <p>选择日期：{{date}}</p>
    </content>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import Calendar from '../components/calendar'

export default {
  components: {
    Content,
    SimpleHeader,
    Calendar
  },
  methods: {
    disable (str, date) {
      return date.day() === 4 // disable thursday
    }
  },
  data () {
    return {
      date: '2012-12-12'
    }
  }
}
</script>
