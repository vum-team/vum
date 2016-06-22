<template>
  <div class='weui_mask_transparent'></div>
  <div class="weui_toast" :class="{ 'weui_toast_visible' : show, 'weui_toast_forbidden' : type === 'forbidden', 'weui_toast_cancel' : type === 'cancel' }">
    <i class="weui_icon_toast"></i>
    <p class="weui_toast_content"><slot></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    type: {
      type: String
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  watch: {
    'show': function (val, oldVal) {
      const self = this
      if (self.timeout) window.clearTimeout(self.timeout)
      if (!!val === true) {
        setTimeout(function () {
          self.show = false
        }, this.duration)
      }
    }
  }
}
</script>
