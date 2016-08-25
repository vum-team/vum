<template>
  <div class="view">
    <div class="page">
      <simple-header title="Side Panel" :back-link="true"></simple-header>
      <content>
        <div class="content-padded">
          <m-button @click="show = true">open side panel</m-button>
        </div>
      </content>
    </div>

    <side-panel :show.sync="show">
      <div class="list-block">
        <ul>
          <li>
            <a class="item-content item-link">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                </div>
                <div class="item-after">Subtitle</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-content item-link">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                </div>
                <div class="item-after"><span class="badge">24</span></div>
              </div>
            </a>
          </li>
        </ul>
        <div class="content-padded">
          <m-button @click="show = false">Close</m-button>
        </div>
      </div>
    </side-panel>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import SidePanel from '../components/side-panel'

export default {
  components: {
    Content,
    SimpleHeader,
    'm-button': Button,
    SidePanel
  },
  data () {
    return {
      show: false
    }
  }
}
</script>
