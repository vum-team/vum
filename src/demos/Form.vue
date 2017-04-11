<template>
  <div class="page">
    <simple-header title="Form" :back-link="true"></simple-header>
    <page-content>
      <form-list>
        <div slot="title">Form List</div>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Name</div>
            <div class="item-input">
              <input type="text" placeholder="Your name">
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">E-mail</div>
            <div class="item-input">
              <input type="email" placeholder="E-mail">
            </div>
            <div class="item-after">
              <m-button>验证</m-button>
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-password.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Password</div>
            <div class="item-input">
              <input type="password" placeholder="Password" class="">
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-gender.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Gender</div>
            <div class="item-input">
              <select>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <!-- Date -->
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-calendar.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Birth date</div>
            <div class="item-input">
              <input type="date" placeholder="Birth day" value="2014-04-30">
            </div>
          </div>
          <!-- Switch (Checkbox) -->
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-toggle.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Switcher</div>
            <div class="item-input">
              <switcher></switcher>
            </div>
          </div>
        </form-item>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-comment.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Textarea</div>
            <div class="item-input">
              <textarea></textarea>
            </div>
          </div>
        </form-item>
        <div slot="append">The usage of Form is just the same as List.</div>
      </form-list>
      <div class="content-block content-padded">
        <div class="row">
          <div class="col-50"><m-button type="danger" size="large">Cancel</m-button></div>
          <div class="col-50"><m-button size="large">Submit</m-button></div>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import Content from '../components/content'
import { Form, FormItem } from '../components/form'
import Switcher from '../components/switcher'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    'm-button': Button,
    Switcher,
    'form-list': Form,
    FormItem
  }
}
</script>
