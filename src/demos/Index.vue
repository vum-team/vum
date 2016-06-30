<template>
  <div class="page-content">
    <header class='demos-header'>
      <h1 class="demos-title">CSS</h1>
    </header>
    <div class="grids grids-small">
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
      <a v-link="{ path: '/list' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/icon_nav_cell.png" alt="">
        </div>
        <p class="grid_label">
          List
        </p>
      </a>
      <a v-link="{ path: '/contacts' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/icon_nav_cell.png" alt="">
        </div>
        <p class="grid_label">
          Contacts
        </p>
      </a>
      <a v-link="{ path: '/form' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/icon_nav_cell.png" alt="">
        </div>
        <p class="grid_label">
          Form
        </p>
      </a>
      <a v-link="{ path: 'modal' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/icon_nav_dialog.png" alt="">
        </div>
        <p class="grid_label">
          Modal
        </p>
      </a>
      <a v-link="{ path: 'tab' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/icon_nav_tab.png" alt="">
        </div>
        <p class="grid_label">
          Tab
        </p>
      </a>
      <a v-link="{ path: 'ptr' }" class="grid">
        <div class="grid_icon">
          <img src="../assets/images/icon_nav_tab.png" alt="">
        </div>
        <p class="grid_label">
          PTR
        </p>
      </a>
    </div>
  </div>
</template>
