<template>
  <div class="page">
    <simple-header title="Toast" :back-link="true"></simple-header>
    <content>
      <div class='demos-content-padded'>
        <p><m-button v-on:click="showToast(1)">Show Toast Success</m-button></p>
        <p><m-button v-on:click="showToast(2)">Show Toast Error</m-button></p>
      </div>

    </content>
    <toast :show.sync="showSuccess" text="Done!"></toast>
    <toast :show.sync="showError" text="Failed!" type="error"></toast>
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
    Content,
    Toast,
    'm-button': Button
  },
  data () {
    return {
      showSuccess: false,
      showError: false
    }
  },
  methods: {
    showToast (type) {
      type === 1 ? this.showSuccess = true : this.showError = true
    }
  }
}
</script>
