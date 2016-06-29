<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Column</h1>
    </header>
    <div class="page-content">
      <tab :active="1">
        <tab-item title="All">
          <h1 class="demos-title">All</h1>
        </tab-item>
        <tab-item title="Boys">
          <h1 class="demos-title">Boys</h1>
        </tab-item>
        <tab-item title="Girls">
          <h1 class="demos-title">Girls</h1>
        </tab-item>
      </Tab>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from '../components/tab'

export default {
  components: {
    Tab,
    TabItem
  }
}
</script>
