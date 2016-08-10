<template>
  <div class="page">
    <simple-header title="Actions" :back-link="true"></simple-header>
    <content>
      <calendar :date.sync="date" min="1990-12-12" max="2020-12-01"></calendar>
      <p>Inline Calendar：{{date}}</p>
      <div class="list-block">
        <ul>
          <!-- Text inputs -->
          <li>
            <div class="item-content">
              <div class="item-media">
                <img src="../assets/images/form/i-form-name.png" alt="" width="30" />
              </div>
              <div class="item-inner">
                <div class="item-title label">Popup Calendar</div>
                <div class="item-input">
                  <input type="text" v-model="date2" @click="showCalendar2 = true" readonly>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </content>
    <popup :show.sync="showCalendar2" :show-title-bar="false">
      <calendar :date.sync="date2"></calendar>
    </popup>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import Popup from '../components/popup'
import { Calendar } from '../components/calendar'

export default {
  components: {
    Content,
    SimpleHeader,
    Calendar,
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
  },
  watch: {
    date2 (v, ov) {
      this.showCalendar2 = false
    }
  }
}
</script>
