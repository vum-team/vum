<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'index' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Column</h1>
    </header>
    <div class="page-content">
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
    </div>
  </div>
</template>

<style lang="less" scoped>
.row {
  margin-top: 10px;
  text-align: center;
}

[class*="col-"] {
  border: 1px solid #ddd;
}
</style>
