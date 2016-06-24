<template>
  <header class='demos-header'>
    <h1 class="demos-title">VUI</h1>
    <p class='demos-sub-title'>An UI Framework build with Vue.js</p>
  </header>

  <div class="grids">
    <a v-link="{ path: 'buttons' }" class="grid" data-id="button">
      <div class="grid_icon">
        <img src="../assets/images/icon_nav_button.png" alt="">
      </div>
      <p class="grid_label">
        Button
      </p>
    </a>
    <a v-link="{ path: 'column' }" class="grid" data-id="cell">
      <div class="grid_icon">
        <img src="../assets/images/icon_nav_cell.png" alt="">
      </div>
      <p class="grid_label">
        Column
      </p>
    </a>
    <a v-link="{ path: 'grid' }" class="grid" data-id="cell">
      <div class="grid_icon">
        <img src="../assets/images/icon_nav_cell.png" alt="">
      </div>
      <p class="grid_label">
        Grid
      </p>
    </a>
    <a v-link="{ path: 'modal' }" class="grid" data-id="toast">
      <div class="grid_icon">
        <img src="../assets/images/icon_nav_toast.png" alt="">
      </div>
      <p class="grid_label">
        Modal
      </p>
    </a>
    <a v-link="{ path: 'alert' }" class="grid" data-id="alert">
      <div class="grid_icon">
        <img src="../assets/images/icon_nav_dialog.png" alt="">
      </div>
      <p class="grid_label">
        Alert
      </p>
    </a>
    <a href="progress.html" class="grid" data-id="progress">
      <div class="grid_icon">
        <img src="../assets/images/icon_nav_progress.png" alt="">
      </div>
      <p class="grid_label">
        Progress
      </p>
    </a>
  </div>
</template>
