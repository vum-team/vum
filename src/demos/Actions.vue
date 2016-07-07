<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Actions</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showActions()">Show Actions</a></p>
      </div>
    </div>
    <actions :show.sync="show">
      <action-group>
        <action-button @click="publish()">Publish</action-button>
        <action-button @click="save()">Save</action-button>
        <action-button class="color-danger" @click="save()">Delete</action-button>
      </action-group>
    </actions>
  </div>
</template>

<script>
import { Actions, ActionButton, ActionGroup } from '../components/actions'

export default {
  components: {
    Actions,
    ActionButton,
    ActionGroup
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showActions () {
      this.show = true
    },
    publish () {
      this.show = false
    },
    save () {
      this.show = false
    },
    delete () {
      this.show = false
    }
  }
}
</script>
