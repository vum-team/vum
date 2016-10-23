<template>
  <simple-header title="Noti"></simple-header>
  <content>
    <div class="content-padded">
      <p>V0.1.1 has been released @2016/10/23 [changelog](https://github.com/vum-team/vum/blob/master/changelog.md)</p>
      <p>V0.1.0 should be released before 08/31</p>
    </div>
  </content>

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
