<template>
  <list class="form-list">
    <slot></slot>
  </list>
</template>

<script>
import { List } from '../list'
export default {
  components: {
    List
  }
}
</script>
