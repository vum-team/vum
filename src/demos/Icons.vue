<template>
  <div class="page">
    <simple-header title="Icons" :back-link="true"></simple-header>
    <page-content>
      <div class='demos-content-padded'>
        <div class="icons">
          <icon icon="success"></icon>
          <icon icon="error"></icon>
          <icon icon="back"></icon>
          <icon icon="search"></icon>
          <icon icon="clear"></icon>
          <icon icon="error-fill"></icon>
          <icon icon="success-fill"></icon>
          <icon icon="forbidden-fill"></icon>
          <icon icon="link"></icon>
          <icon icon="star"></icon>
          <icon icon="star-fill"></icon>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import Icon from '../components/icons'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Icon
  }
}
</script>

<style scoped>
.icons {
  font-size: 24px;
  color: #3cc51f;
}
</style>
