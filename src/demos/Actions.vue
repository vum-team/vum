<template>
  <div class="page">
    <simple-header title="Actions" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <p><m-button @click.native="$refs.actions.open()">Show Actions</m-button></p>
      </div>
    </page-content>
    <actions ref="actions">
      <action-group>
        <action-button @click.native="close()">Publish</action-button>
        <action-button @click.native="close()">Save</action-button>
        <action-button class="color-danger" @click.native="close()">Delete</action-button>
      </action-group>
    </actions>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import { Actions, ActionButton, ActionGroup } from '../components/actions'

export default {
  components: {
    'page-content': Content,
    SimpleHeader,
    'm-button': Button,
    Actions,
    ActionButton,
    ActionGroup
  },
  methods: {
    close () {
      this.$refs.actions.close()
    }
  }
}
</script>
