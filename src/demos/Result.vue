<template>
  <div class="page">
    <simple-header title="Result" :back-link="true"></simple-header>
    <content>
      <result></result>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import Result from '../components/result'

export default {
  components: {
    SimpleHeader,
    Content,
    Result
  }
}
</script>
