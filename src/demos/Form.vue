<template>
  <div class="page">
    <simple-header title="Form" :back-link="true"></simple-header>
    <content>
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
                  <m-button>验证</m-button>
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
                  <switch></switch>
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
          <div class="col-50"><m-button type="danger" size="large">Cancel</m-button></div>
          <div class="col-50"><m-button size="large">Submit</m-button></div>
        </div>
      </div>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import Content from '../components/content'
import MForm from '../components/form'
import Switch from '../components/switch'

export default {
  components: {
    SimpleHeader,
    Content,
    'm-button': Button,
    Switch,
    MForm
  }
}
</script>
