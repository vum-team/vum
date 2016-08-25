<template>
  <div class="page">
    <simple-header title="Menu" :back-link="true"></simple-header>
    <content>
      <menu></menu>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import Menu from '../components/menu'

export default {
  components: {
    SimpleHeader,
    Content,
    Menu
  }
}
</script>
