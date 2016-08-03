<template>
  <a class="button button-link button-nav {{ left ? 'pull-left' : 'pull-right' }}">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    }
  }
}
</script>
