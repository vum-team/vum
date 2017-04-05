<template>
  <div class="page">
    <simple-header title="Columns" :back-link="true"></simple-header>
    <page-content>
      <div class="content-padded">
        <div class="row">
          <div class="col-50">50%</div>
          <div class="col-50">50%</div>
        </div>
        <div class="row">
          <div class="col-33">33%</div>
          <div class="col-33">33%</div>
          <div class="col-33">33%</div>
        </div>
        <div class="row">
          <div class="col-20">20%</div>
          <div class="col-80">80%</div>
        </div>
        <h2>No Gutter</h2>
        <div class="row no-gutter">
          <div class="col-20">20%</div>
          <div class="col-80">80%</div>
        </div>
        <div class="row no-gutter">
          <div class="col-50">50%</div>
          <div class="col-50">50%</div>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
import Column from '../components/column'
import { SimpleHeader } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    Column
  }
}
</script>

<style lang="less" scoped>
.row {
  margin-top: 10px;
  text-align: center;
}

[class*="col-"] {
  border: 1px solid #ddd;
}
</style>
