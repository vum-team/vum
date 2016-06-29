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
            <img src="../assets/images/icon_nav_toast.png" alt="">
          </div>
          <p class="grid_label">
            Modal
          </p>
        </a>
        <a v-link="{ path: 'tab' }" class="grid">
          <div class="grid_icon">
            <img src="../assets/images/icon_nav_toast.png" alt="">
          </div>
          <p class="grid_label">
            Tab
          </p>
        </a>
      </div>
    </div>
    <nav class="bar bar-tab">
      <a class="tab-item active">
        <span class="icon demo-icon-home"></span>
        <span class="tab-label">Home</span>
      </a>
      <a class="tab-item">
        <span class="icon demo-icon-search"></span>
        <span class="tab-label">Search</span>
      </a>
      <a class="tab-item">
        <span class="icon demo-icon-noti"></span>
        <span class="badge">2</span>
        <span class="tab-label">Noti</span>
      </a>
      <a class="tab-item">
        <span class="icon demo-icon-me"></span>
        <span class="tab-label">Me</span>
      </a>
    </nav>
  </div>
</template>

<style type="less">
.demo-icon-home {
  background-image: url("../assets/images/icon_nav_cell.png");
  background-size: 100%;
}
.demo-icon-search {
  background-image: url("../assets/images/icon_nav_search_bar.png");
  background-size: 100%;
}
.demo-icon-noti {
  background-image: url("../assets/images/icon_nav_button.png");
  background-size: 100%;
}
.demo-icon-me {
  background-image: url("../assets/images/icon_nav_panel.png");
  background-size: 100%;
}
</style>
