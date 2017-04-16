<template>
  <li>
    <label :class="'item-inner ' + (link ? 'item-link' : '') + ' ' + (!!checkbox ? 'label-checkbox' : '') + ' ' + (!!radio ? 'label-radio' : '')" v-if="!!checkbox || !!radio">
      <slot></slot>
      <i class="icon icon-form-checkbox" v-if="checkbox"></i>
      <i class="icon icon-form-radio" v-if="radio"></i>
      <div class="link-arrow icon icon-link" v-if="link"></div>
    </label>
    <div :class="'item-inner ' + (link ? 'item-link' : '')" v-if="!checkbox && !radio">
      <slot></slot>
      <div class="link-arrow icon icon-link" v-if="link"></div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    radio: {
      type: Boolean,
      default: false
    }
  }
}
</script>
