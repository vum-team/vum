<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'home' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Buttons</h1>
    </header>
    <div class="page-content">
      <div class='content-padded'>
        <h1 class="demos-title">Default Buttons</h1>
        <div class="content-block">
          <p><a href="javascript:;" class="button">default button</a></p>
          <p><a href="javascript:;" class="button button-danger">danger button</a></p>
          <p><a href="javascript:;" class="button button-warning">warning button</a></p>
          <p><a href="javascript:;" class="button button-warning disabled">disabled button</a></p>
        </div>
        <div class="content-block">
          <p><a href="javascript:;" class="button button-round">Round Button 1</a></p>
        </div>
        <div class="content-block">
          <p><a href="javascript:;" class="button button-big">Big Button </a></p>
          <p><a href="javascript:;" class="button button-big button-round">Big Round Button </a></p>
        </div>
        <h1 class="demos-title">Buttons Group</h1>
        <div class="content-block">
          <p class="buttons-row"><a href="javascript:;" class="button">Button 1</a><a href="javascript:;" class="button">Button 2</a><a href="javascript:;" class="button">Button 3</a></p>
          <p class="buttons-row"><a href="javascript:;" class="button active">Button 1</a><a href="javascript:;" class="button">Button 2</a><a href="javascript:;" class="button">Button 3</a></p>
          <p class="buttons-row"><a href="javascript:;" class="button button-round">Button 1</a><a href="javascript:;" class="button button-round">Button 2</a></p>
          <p class="buttons-row"><a href="javascript:;" class="button button-round">Button 1</a><a href="javascript:;" class="button button-round active">Button 2</a></p>
        </div>
        <h1 class="demos-title">List Buttons</h1>
        <div class="list-block">
          <ul>
            <li><a href="javascript:;" class="item-link list-button">List Button 1</a></li>
            <li><a href="javascript:;" class="item-link list-button">List Button 2</a></li>
            <li><a href="javascript:;" class="item-link list-button">List Button 3</a></li>
          </ul>
        </div>
        <h1 class="demos-title">Inset List Buttons</h1>
        <div class="list-block inset">
          <ul>
            <li><a href="javascript:;" class="item-link list-button">List Button 1</a></li>
            <li><a href="javascript:;" class="item-link list-button">List Button 2</a></li>
            <li><a href="javascript:;" class="item-link list-button">List Button 3</a></li>
          </ul>
        </div>
        <h1 class="demos-title">Layout Buttons With Grid</h1>
        <div class="content-block">
          <div class="row">
            <div class="col-50"><a href="javascript:;" class="button button-big button-fill button-danger">Cancel</a></div>
            <div class="col-50"><a href="javascript:;" class="button button-big button-fill">Submit</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
