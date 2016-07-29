<template>
  <div class="page">
    <header class="bar bar-nav bar-standard">
      <a class="button button-link button-nav pull-left back" v-link="{ 'name' : 'index' }">
        <span class="icon icon-back"></span>
        Back
      </a>
      <h1 class="title">Form</h1>
    </header>
    <div class="page-content">
      <div class="list-block">
      <ul>
        <!-- Text inputs -->
        <li>
          <div class="item-content">
            <div class="item-media">
              <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
            </div>
            <div class="item-inner">
              <div class="item-title label">Name</div>
              <div class="item-input">
                <input type="text" placeholder="Your name">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media">
              <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
            </div>
            <div class="item-inner">
              <div class="item-title label">E-mail</div>
              <div class="item-input">
                <input type="email" placeholder="E-mail">
              </div>
              <div class="item-after">
                <a class="button">验证</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media">
              <img src="../assets/images/form/i-form-password.png" alt="" width="30" />
            </div>
            <div class="item-inner">
              <div class="item-title label">Password</div>
              <div class="item-input">
                <input type="password" placeholder="Password" class="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media">
              <img src="../assets/images/form/i-form-gender.png" alt="" width="30" />
            </div>
            <div class="item-inner">
              <div class="item-title label">Gender</div>
              <div class="item-input">
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <!-- Date -->
        <li>
          <div class="item-content">
            <div class="item-media">
              <img src="../assets/images/form/i-form-calendar.png" alt="" width="30" />
            </div>
            <div class="item-inner">
              <div class="item-title label">Birth date</div>
              <div class="item-input">
                <input type="date" placeholder="Birth day" value="2014-04-30">
              </div>
            </div>
          </div>
        </li>
        <!-- Switch (Checkbox) -->
        <li>
          <div class="item-content">
            <div class="item-media">
              <img src="../assets/images/form/i-form-toggle.png" alt="" width="30" />
            </div>
            <div class="item-inner">
              <div class="item-title label">Switch</div>
              <div class="item-input">
                <label class="label-switch">
                  <input type="checkbox">
                  <div class="checkbox"></div>
                </label>
              </div>
            </div>
          </div>
        </li>
        <li class="align-top">
          <div class="item-content">
            <div class="item-media">
              <img src="../assets/images/form/i-form-comment.png" alt="" width="30" />
            </div>
            <div class="item-inner">
              <div class="item-title label">Textarea</div>
              <div class="item-input">
                <textarea></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="content-block content-padded">
      <div class="row">
        <div class="col-50"><a class="button button-big button-fill button-danger">Cancel</a></div>
        <div class="col-50"><a class="button button-big button-fill">Submit</a></div>
      </div>
    </div>
    </div>
  </div>
</template>
