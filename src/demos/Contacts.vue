<template>
  <div class="page">
    <simple-header title="Contacts" :back-link="true"></simple-header>
    <content>
      <div class="list-block contacts-block">
        <div class="list-group">
          <ul>
            <li class="list-group-title">A</li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/1.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Albert Bernard</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/2.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Amy Richard</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/3.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Andrew Schmidt</div>
                </div>
              </div>
            </li>
            <li class="list-group-title">B</li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/4.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Bob Jackson</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/5.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Bom</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/6.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Beach</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/7.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Bit</div>
                </div>
              </div>
            </li>
            <li class="list-group-title">L</li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/torvalds.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Linus Torvalds</div>
                  <div class="item-after">Linux</div>
                </div>
              </div>
            </li>
            <li class="list-group-title">T</li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/5.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Tom Clinton</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/6.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Tito Longfellow</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/7.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">TT Audi</div>
                </div>
              </div>
            </li>
            <li class="list-group-title">P</li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/5.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Tom Clinton</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/6.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Tito Longfellow</div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/7.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">TT Audi</div>
                </div>
              </div>
            </li>
            <li class="list-group-title">Z</li>
            <li>
              <div class="item-content">
                <div class="item-media"><img src="../assets/images/avatar/gf.png" width="30"></div>
                <div class="item-inner">
                  <div class="item-title">Zhang xiaoqi</div>
                  <div class="item-after">GF</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </content>
  </div>
</template>

<script>
import { SimpleHeader } from '../components/header'
import Content from '../components/content'

export default {
  components: {
    SimpleHeader,
    Content
  }
}
</script>


