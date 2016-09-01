<template>
  <div class="page">
    <simple-header title="Stars" :back-link="true"></simple-header>
    <content>
      <div class='demos-content-padded'>
      </div>
      <list>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">iPhone SE</div>
              <div class="item-after">
                <stars :amount="4"></stars>
              </div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">iPhone 6S</div>
              <div class="item-after">
                <stars :amount="3" :readonly="false"></stars>
              </div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">iPhone 6S</div>
              <div class="item-after">
                <stars :amount="3" :readonly="false" style="color: #f6383a;"></stars>
              </div>
            </div>
          </div>
        </list-item>
      </list>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import { List, ListItem } from '../components/list'
import Content from '../components/content'
import Stars from '../components/stars'

export default {
  components: {
    SimpleHeader,
    Content,
    List,
    ListItem,
    Stars
  }
}
</script>
