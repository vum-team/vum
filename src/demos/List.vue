<template>
  <div class="page">
    <simple-header title="List" :back-link="true"></simple-header>
    <page-content>
      <list>
        <div slot="title">Simple List</div>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
          </div>
        </list-item>
        <div slot="append">
          Append some message here.
          Append some message here.
          Append some message here.
          Append some message here.
        </div>
      </list>
      <list>
        <div slot="title">List with different After Item</div>
        <list-item>
          <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after"><div class="badge">32</div></div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">
                <switcher></switcher>
              </div>
            </div>
          </div>
        </list-item>
      </list>
      <list>
        <list-item :link="true">
          <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
          </div>
        </list-item>
        <list-item :link="true">
          <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
          </div>
        </list-item>
      </list>
      <list>
        <list-item>
          <div class="item-media"><img src="../assets/images/icon-list.png" width="88"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
            <div class="item-text">
              Text Text Text Text Text Text Text Text Text 
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-media"><img src="../assets/images/icon-list.png" width="88"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
            <div class="item-text">
              Text Text Text Text Text Text Text Text Text 
            </div>
          </div>
        </list-item>
      </list>
      <list>
        <div slot="title">Checkbox List</div>
        <list-item :checkbox="true">
          <input type="checkbox" name="name" value="A">
          <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
          </div>
        </list-item>
        <list-item :checkbox="true">
          <input type="checkbox" name="name" value="B">
          <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
          </div>
        </list-item>
      </list>
      <list>
        <div slot="title">Radio List</div>
        <list-item :radio="true">
          <input type="radio" name="gender" value="1">
          <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
          </div>
        </list-item>
        <list-item :radio="true">
          <input type="radio" name="gender" value="2" checked>
          <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">Title</div>
              <div class="item-after">After</div>
            </div>
            <div class="item-subtitle">
              Subtitle
            </div>
          </div>
        </list-item>
      </list>
    </page-content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'
import { List, ListItem } from '../components/list'
import Switcher from '../components/switcher'

export default {
  components: {
    SimpleHeader,
    'page-content': Content,
    List,
    ListItem,
    Switcher
  }
}
</script>
