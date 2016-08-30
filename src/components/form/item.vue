<template>
  <list-item>
    <slot></slot>
  </list-item>
</template>

<script>
import { ListItem } from '../list'
export default {
  components: {
    ListItem
  }
}
</script>
