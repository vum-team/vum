<template>
  <div class="page">
    <simple-header title="Tab" :back-link="true"></simple-header>
    <page-content>
      <tab :active="0">
        <tab-item title="All">
          <div class="content-padded">
            <tab :active="1" style="button">
              <tab-item title="ALL" :on-show="onShow">
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
    </page-content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import { Tab, TabItem } from '../components/tab'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Tab,
    TabItem
  },
  methods: {
    onShow () {
    }
  }
}
</script>
