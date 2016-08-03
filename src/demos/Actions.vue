<template>
  <div class="page">
    <simple-header title="Actions" :back-link="true"></simple-header>
    <content>
      <div class='demos-content-padded'>
        <p><a href="javascript:;" class="button" v-on:click="showActions()">Show Actions</a></p>
      </div>
    </content>
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
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import { Actions, ActionButton, ActionGroup } from '../components/actions'

export default {
  components: {
    Content,
    SimpleHeader,
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
