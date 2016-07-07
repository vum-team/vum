<template>
  <popup :show.sync="show" :show-title-bar="false" class-name="actions-modal">
    <slot></slot>
    <action-group v-if="showCancelButton">
      <action-button class="color-gray" @click="cancel()">Cancel</action-button>
    </action-group>
  </popup>
</template>

<script>
import Popup from '../popup'
import ActionGroup from './ActionGroup.vue'
import ActionButton from './ActionButton.vue'

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Popup,
    ActionGroup,
    ActionButton
  },
  methods: {
    cancel () {
      this.show = false
    }
  }
}
</script>
