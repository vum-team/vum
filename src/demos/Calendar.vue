<template>
  <div class="page">
    <simple-header title="Actions" :back-link="true"></simple-header>
    <content>
      <calendar></calendar>
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
  }
}
</script>
