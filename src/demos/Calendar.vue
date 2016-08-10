<template>
  <div class="page">
    <simple-header title="Actions" :back-link="true"></simple-header>
    <content>
      <calendar :date.sync='date'></calendar>
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
  data () {
    return {
      date: '2016-12-12'
    }
  }
}
</script>
