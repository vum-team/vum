<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Tab</h1>
    </header>
    <div class="page-content">
      <tab :active="0">
        <tab-item title="All">
          <div class="content-padded">
            <tab :active="1" style="button">
              <tab-item title="ALL">
                <h1 class="demos-title">ALL</h1>
              </tab-item>
              <tab-item title="TODO">
                <h1 class="demos-title">TODO</h1>
              </tab-item>
              <tab-item title="DONE">
                <h1 class="demos-title">DONE</h1>
              </tab-item>
            </tab>
            <tab :active="1" style="button-bordered" size="small">
              <tab-item title="ALL">
                <h1 class="demos-title">ALL</h1>
              </tab-item>
              <tab-item title="TODO">
                <h1 class="demos-title">TODO</h1>
              </tab-item>
              <tab-item title="DONE">
                <h1 class="demos-title">DONE</h1>
              </tab-item>
            </tab>
          </div>
        </tab-item>
        <tab-item title="Boys">
          <h1 class="demos-title">Boys</h1>
        </tab-item>
        <tab-item title="Girls">
          <h1 class="demos-title">Girls</h1>
        </tab-item>
      </tab>
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
