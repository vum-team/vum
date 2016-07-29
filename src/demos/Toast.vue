<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'index' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Toast</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showToast(1)">Show Toast Success</a></p>
        <p><a href="javascript:;" class="button" v-on:click="showToast(2)">Show Toast Error</a></p>
      </div>

    </div>
    <toast :show.sync="showSuccess" text="Done!"></toast>
    <toast :show.sync="showError" text="Failed!" type="error"></toast>
  </div>
</template>

<script>
import Toast from '../components/toast'

export default {
  components: {
    Toast
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
