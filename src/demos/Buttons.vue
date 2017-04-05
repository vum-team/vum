<template>
  <div class="page">
    <simple-header title="Buttons" :back-link="true"></simple-header>
    <page-content>
      <div class='content-padded'>
        <h1 class="demos-title">Default Buttons</h1>
        <div class="content-block">
          <p><m-button>default button</m-button></p>
          <p><m-button type="light">light button</m-button></p>
          <p><m-button type="danger">danger button</m-button></p>
          <p><m-button type="warning">warning button</m-button></p>
          <p><m-button type="danger" :disabled="true">disabled button</m-button></p>
        </div>
        <div class="content-block">
          <p><m-button size="large">large button</m-button></p>
          <p><m-button size="large" :round="true">large Round button</m-button></p>
        </div>
        <div class="content-block">
          <p>
            <m-button size="small">small button</m-button>
            <m-button size="small" :round="true">small round button</m-button>
          </p>
        </div>
        <h1 class="demos-title">Bordered Buttons</h1>
        <div class="content-block">
          <p><m-button :bordered="true">default button</m-button></p>
          <p><m-button type="danger" :bordered="true">danger button</m-button></p>
          <p><m-button type="warning" :bordered="true">warning button</m-button></p>
        </div>
        <div class="content-block">
          <p><m-button :bordered="true" size="large">large button</m-button></p>
          <p><m-button :bordered="true" size="large" :round="true">round button</m-button></p>
        </div>
        <div class="content-block">
          <p>
            <m-button size="small" :bordered="true">small button</m-button>
            <m-button size="small" :round="true" :bordered="true">small round button</m-button>
          </p>
        </div>
        <h1 class="demos-title">Buttons Group</h1>
        <div class="content-block">
          <button-group :bordered="true" size="small">
            <m-button>Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group :bordered="true" size="small">
            <m-button :active="true">Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group :bordered="true">
            <m-button>Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group :bordered="true">
            <m-button :active="true">Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group :bordered="true" :round="true">
            <m-button>Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group :bordered="true" :round="true">
            <m-button :active="true">Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group size="small">
            <m-button>Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group size="small">
            <m-button :active="true">Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group>
            <m-button>Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group>
            <m-button :active="true">Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
          <button-group :round="true">
            <m-button :active="true">Button 1</m-button>
            <m-button>Button 2</m-button>
            <m-button>Button 3</m-button>
          </button-group>
        </div>
        <h1 class="demos-title">Layout Buttons With Grid</h1>
        <div class="content-block">
          <div class="row">
            <div class="col-50"><m-button size="large" type="danger">Cancel</m-button></div>
            <div class="col-50"><m-button size="large">Submit</m-button></div>
          </div>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
import { Button, ButtonGroup } from '../components/buttons'
import { SimpleHeader } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    ButtonGroup,
    'm-button': Button
  }
}
</script>

<style lang="less" scoped>
p {
  text-align: center;
}
</style>
