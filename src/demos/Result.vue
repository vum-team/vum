<template>
  <div class="page">
    <simple-header title="Result" :back-link="true"></simple-header>
    <content>
      <result type="success">
        <div slot="title">Commit Success</div>
        <div slot="text">
          Your commit have been recieved!
        </div>
        <div slot="buttons">
          <a class="button" href="javascript:;">OK</a>
          <a class="button button-light" href="javascript:;">BACK</a>
        </div>
        <div slot="bottom">
          <a>About This Page</a>
        </div>
      </result>
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
