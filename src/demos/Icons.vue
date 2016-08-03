<template>
  <div class="page">
    <simple-header title="buttons" :back-link="true"></simple-header>
    <content>
      <div class='demos-content-padded'>
      <div class="icons">
        <i class="icon icon-success"></i>
        <i class="icon icon-error"></i>
        <i class="icon icon-back"></i>
      </div>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    SimpleHeader,
    Content
  }
}
</script>

<style scoped>
.icons {
  font-size: 24px;
  color: #3cc51f;
}
</style>
