<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'index' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Icons</h1>
    </header>
    <div class="page-content">
      <div class='demos-content-padded'>
      <div class="icons">
        <i class="icon icon-success"></i>
        <i class="icon icon-error"></i>
        <i class="icon icon-back"></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icons {
  font-size: 24px;
  color: #3cc51f;
}
</style>
