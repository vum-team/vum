<template>
  <popup :show="show" :show-title-bar="false" class-name="actions-modal" ref="popup">
    <slot></slot>
    <action-group v-if="showCancelButton">
      <action-button class="color-gray" @click.native="close()">Cancel</action-button>
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
      default: false
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
    open () {
      this.$refs.popup.open()
      this.$emit('open', this)
    },
    close () {
      this.$refs.popup.close()
      this.$emit('close', this)
    }
  }
}
</script>
