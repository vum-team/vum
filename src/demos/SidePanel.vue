<template>
  <div class="view">
    <div class="page">
      <simple-header title="Side Panel" :back-link="true"></simple-header>
      <page-content>
        <div class="content-padded">
          <m-button @click.native="$refs.s.open()">open side panel</m-button>
        </div>
      </page-content>
    </div>

    <side-panel :show="show" ref="s">
      <list>
        <list-item :link="true">
          <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">Subtitle</div>
            </div>
          </div>
        </list-item>
        <list-item :link="true" v-for="i in [{id:1}, {id:2}, {id:3}, {id:4}]" :key="i.id">
          <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after"><span class="badge">24</span></div>
            </div>
          </div>
        </list-item>
      </list>
      <div class="content-padded">
        <m-button @click.native="$refs.s.close()">Close</m-button>
      </div>
    </side-panel>
  </div>
</template>

<script>
import Content from '../components/content'
import { SimpleHeader } from '../components/header'
import { Button } from '../components/buttons'
import SidePanel from '../components/side-panel'
import { List, ListItem } from '../components/list'

export default {
  components: {
    'page-content': Content,
    SimpleHeader,
    'm-button': Button,
    SidePanel,
    List,
    ListItem
  }
}
</script>
