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
            <div class="item-media"><img :src="p.avatar" width="30"></div>
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

const importAll = (r) => {
  return r.keys().map(r)
}

const images = importAll(require.context('../assets/images/avatar', false, /\.(png|jpe?g|svg)$/))
console.log(images)

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
        { name: 'Albert Bernard', avatar: images[0] },
        { name: 'Amy Richard', avatar: images[1] },
        { name: 'Andrew Schmidt', avatar: images[2] },
        { title: true, name: 'B' },
        { name: 'Bob Jackson', avatar: images[3] },
        { name: 'Bom', avatar: images[4] },
        { name: 'BaBa', avatar: images[5] },
        { name: 'Bilibili', avatar: images[6] },
        { title: true, name: 'L' },
        { name: 'Linus Torvalds', avatar: images[7] },
        { title: true, name: 'T' },
        { name: 'Tom Clinton', avatar: images[8] },
        { name: 'Tim Cook', avatar: images[0] },
        { name: 'Ted', avatar: images[1] },
        { name: 'Tomato', avatar: images[2] },
        { title: true, name: 'X' },
        { name: 'Xie', avatar: images[3] },
        { name: 'Xing', avatar: images[4] },
        { name: 'Xia ran', avatar: images[5] },
        { name: 'Xue dinge', avatar: images[6] },
        { title: true, name: 'Z' },
        { name: 'Zhang xq', avatar: images[7] }
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
