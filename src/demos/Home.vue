<template>
  <header class='demos-header'>
    <h1 class="demos-title">VUI</h1>
    <p class='demos-sub-title'>An UI Framework build with Vue.js</p>
  </header>

  <div class="weui_grids">
    <a v-link="{ path: 'buttons' }" class="weui_grid js_grid" data-id="button">
      <div class="weui_grid_icon">
        <img src="../assets/images/icon_nav_button.png" alt="">
      </div>
      <p class="weui_grid_label">
        Button
      </p>
    </a>
    <a href="cell.html" class="weui_grid js_grid" data-id="cell">
      <div class="weui_grid_icon">
        <img src="../assets/images/icon_nav_cell.png" alt="">
      </div>
      <p class="weui_grid_label">
        Cell
      </p>
    </a>
    <a href="form.html" class="weui_grid js_grid" data-id="cell">
      <div class="weui_grid_icon">
        <img src="../assets/images/icon_nav_cell.png" alt="">
      </div>
      <p class="weui_grid_label">
        Form
      </p>
    </a>
    <a v-link="{ path: 'toast' }" class="weui_grid js_grid" data-id="toast">
      <div class="weui_grid_icon">
        <img src="../assets/images/icon_nav_toast.png" alt="">
      </div>
      <p class="weui_grid_label">
        Toast
      </p>
    </a>
    <a href="dialog.html" class="weui_grid js_grid" data-id="dialog">
      <div class="weui_grid_icon">
        <img src="../assets/images/icon_nav_dialog.png" alt="">
      </div>
      <p class="weui_grid_label">
        Dialog
      </p>
    </a>
    <a href="progress.html" class="weui_grid js_grid" data-id="progress">
      <div class="weui_grid_icon">
        <img src="../assets/images/icon_nav_progress.png" alt="">
      </div>
      <p class="weui_grid_label">
        Progress
      </p>
    </a>
  </div>
</template>
