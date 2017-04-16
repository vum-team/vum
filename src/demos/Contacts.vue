<template>
  <div class="page">
    <simple-header title="Contacts" :back-link="true"></simple-header>
    <second-header>
      <searchbar @input="onInput"></searchbar>
    </second-header>
    <page-content>
      <list style="margin-top: 0;">
        <template v-for="p in filtedList">
          <li class="list-group-title" v-if="p.title">{{p.name}}</li>
          <list-item v-if="!p.title">
            <div class="item-media"><img src="../assets/images/avatar/1.png" width="30"></div>
            <div class="item-content">
              <div class="item-title">{{p.name}}</div>
            </div>
          </list-item>
        </template>
      </list>
    </page-content>
  </div>
</template>

<script>
import { SimpleHeader, SecondHeader } from '../components/header'
import Content from '../components/content'
import { List, ListItem } from '../components/list'
import Searchbar from '../components/searchbar'

export default {
  components: {
    SimpleHeader,
    SecondHeader,
    Searchbar,
    'page-content': Content,
    List,
    ListItem
  },
  data () {
    return {
      input: '',
      list: [
        { title: true, name: 'A' },
        { name: 'Albert Bernard', avatar: '1.png' },
        { name: 'Amy Richard', avatar: '2.png' },
        { name: 'Andrew Schmidt', avatar: '3.png' },
        { title: true, name: 'B' },
        { name: 'Bob Jackson', avatar: '4.png' },
        { name: 'Bom', avatar: '5.png' },
        { name: 'BaBa', avatar: '6.png' },
        { name: 'Bilibili', avatar: '7.png' },
        { title: true, name: 'L' },
        { name: 'Linus Torvalds', avatar: 'torvalds.png' },
        { title: true, name: 'T' },
        { name: 'Tom Clinton', avatar: '4.png' },
        { name: 'Tim Cook', avatar: '5.png' },
        { name: 'Ted', avatar: '6.png' },
        { name: 'Tomato', avatar: '7.png' },
        { title: true, name: 'X' },
        { name: 'Xie', avatar: '4.png' },
        { name: 'Xing', avatar: '5.png' },
        { name: 'Xia ran', avatar: '6.png' },
        { name: 'Xue dinge', avatar: '7.png' },
        { title: true, name: 'Z' },
        { name: 'Zhang xiaoqi', avatar: 'gf.png' }
      ]
    }
  },
  computed: {
    filtedList () {
      return this.list.filter((d) => {
        if (!this.input) return true
        if (d.title) return false
        return d.name.toUpperCase().indexOf(this.input.toUpperCase()) !== -1
      })
    }
  },
  methods: {
    onInput (v) {
      this.input = v
    }
  }
}
</script>
