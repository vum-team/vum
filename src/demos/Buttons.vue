<template>
  <div class="page">
    <simple-header title="Buttons" :back-link="true"></simple-header>
    <content>
      <div class='content-padded'>
        <h1 class="demos-title">Default Buttons</h1>
        <div class="content-block">
          <p><a href="javascript:;" class="button">default button</a></p>
          <p><a href="javascript:;" class="button button-light">light button</a></p>
          <p><a href="javascript:;" class="button button-danger">danger button</a></p>
          <p><a href="javascript:;" class="button button-warning">warning button</a></p>
          <p><a href="javascript:;" class="button button-warning disabled">disabled button</a></p>
        </div>
        <div class="content-block">
          <p><a href="javascript:;" class="button button-large">Large Button </a></p>
          <p><a href="javascript:;" class="button button-large button-round">Large Round Button </a></p>
        </div>
        <div class="content-block">
          <p>
            <a href="javascript:;" class="button button-small">Small Button </a>
            <a href="javascript:;" class="button button-small button-round">Small Round Button </a>
          </p>
        </div>
        <h1 class="demos-title">Bordered Buttons</h1>
        <div class="content-block">
          <p><a href="javascript:;" class="button button-bordered">default button</a></p>
          <p><a href="javascript:;" class="button button-bordered button-danger">danger button</a></p>
          <p><a href="javascript:;" class="button button-bordered button-warning">warning button</a></p>
          <p><a href="javascript:;" class="button button-bordered button-warning disabled">disabled button</a></p>
        </div>
        <div class="content-block">
          <p><a href="javascript:;" class="button button-bordered button-large">Large Button </a></p>
          <p><a href="javascript:;" class="button button-bordered button-large button-round">Large Round Button </a></p>
        </div>
        <div class="content-block">
          <p>
            <a href="javascript:;" class="button button-bordered button-small">Small Button </a>
            <a href="javascript:;" class="button button-bordered button-small button-round">Small Round Button </a>
          </p>
        </div>
        <h1 class="demos-title">Buttons Group</h1>
        <div class="content-block">
          <p class="buttons-row button-bordered button-small"><a href="javascript:;" class="button active">Button 1</a><a href="javascript:;" class="button">Button 2</a><a href="javascript:;" class="button">Button 3</a></p>
          <p class="buttons-row button-bordered"><a href="javascript:;" class="button">Button 1</a><a href="javascript:;" class="button">Button 2</a><a href="javascript:;" class="button">Button 3</a></p>
          <p class="buttons-row button-bordered"><a href="javascript:;" class="button active">Button 1</a><a href="javascript:;" class="button">Button 2</a><a href="javascript:;" class="button">Button 3</a></p>
          <p class="buttons-row button-small button-bordered button-round"><a href="javascript:;" class="button">Button 1</a><a href="javascript:;" class="button active">Button 2</a></p>
          <p class="buttons-row button-bordered button-round"><a href="javascript:;" class="button">Button 1</a><a href="javascript:;" class="button active">Button 2</a></p>
        </div>
        <div class="content-block">
          <p class="buttons-row button-small"><a href="javascript:;" class="button">Button 1</a><a href="javascript:;" class="button">Button 2</a><a href="javascript:;" class="button">Button 3</a></p>
          <p class="buttons-row"><a href="javascript:;" class="button active">Button 1</a><a href="javascript:;" class="button">Button 2</a><a href="javascript:;" class="button">Button 3</a></p>
          <p class="buttons-row"><a href="javascript:;" class="button button-round">Button 1</a><a href="javascript:;" class="button button-round">Button 2</a></p>
          <p class="buttons-row"><a href="javascript:;" class="button button-round">Button 1</a><a href="javascript:;" class="button button-round active">Button 2</a></p>
        </div>
        <h1 class="demos-title">Layout Buttons With Grid</h1>
        <div class="content-block">
          <div class="row">
            <div class="col-50"><a href="javascript:;" class="button button-large button-danger">Cancel</a></div>
            <div class="col-50"><a href="javascript:;" class="button button-large">Submit</a></div>
          </div>
        </div>
      </div>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    SimpleHeader,
    Content
  }
}
</script>

<style lang="less" scoped>
p {
  text-align: center;
}
</style>
