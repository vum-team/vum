<template>
  <div class="page">
    <simple-header title="Toast" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <p><m-button @click.native="$refs.t1.open()">Show Toast Success</m-button></p>
        <p><m-button @click.native="$refs.t2.open()">Show Toast Error</m-button></p>
      </div>

    </page-content>
    <toast text="Done!" ref="t1"></toast>
    <toast text="Failed!" type="error" ref="t2"></toast>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import { Button } from '../components/buttons'
import Toast from '../components/toast'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Toast,
    'm-button': Button
  },
  data () {
    return {
    }
  }
}
</script>
