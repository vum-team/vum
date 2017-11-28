<template>
  <div class="page">
    <simple-header title="Calendar" :back-link="true"></simple-header>
    <page-content>
      <calendar :date="date" min="1990-12-12" max="2020-12-01" @change="(d) => date = d"></calendar>
      <p>Inline Calendar：{{date}}</p>
      <form-list>
        <form-item>
          <div class="item-media">
            <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
          </div>
          <div class="item-content">
            <div class="item-title label">Popup</div>
            <div class="item-input">
              <input type="text" v-model="date2" @click="$refs.c2.open()" readonly>
            </div>
          </div>
        </form-item>
      </form-list>
    </page-content>
    <popup :show-title-bar="false" ref="c2">
      <calendar :date="date2" @change="(d) => {(date2 = d) && $refs.c2.close()}"></calendar>
    </popup>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import Popup from '../components/popup'
import Calendar from '../components/calendar'
import { Form, FormItem } from '../components/form'

export default {
  components: {
    'page-content': Content,
    SimpleHeader,
    Calendar,
    'form-list': Form,
    FormItem,
    Popup
  },
  methods: {
    disable (str, date) {
      return date.day() === 4 // disable thursday
    }
  },
  data () {
    return {
      date: '2012-12-12',
      date2: '2012-12-12',
      showCalendar2: false
    }
  }
}
</script>
