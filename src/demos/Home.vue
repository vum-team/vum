<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-right">
        <span class="icon icon-left"></span>
        About
      </a>
      <h1 class="title">VUI</h1>
    </header>
    <div class="page-content">
      <header class='demos-header'>
        <h1 class="demos-title">CSS</h1>
      </header>
      <div class="grids">
        <a v-link="{ path: 'buttons' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/icon_nav_button.png" alt="">
          </div>
          <p class="grid_label">
            Button
          </p>
        </a>
        <a v-link="{ path: 'column' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/icon_nav_cell.png" alt="">
          </div>
          <p class="grid_label">
            Column
          </p>
        </a>
        <a v-link="{ path: 'grid' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/icon_nav_cell.png" alt="">
          </div>
          <p class="grid_label">
            Grid
          </p>
        </a>
        <a v-link="{ path: 'modal' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/icon_nav_toast.png" alt="">
          </div>
          <p class="grid_label">
            Modal
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
