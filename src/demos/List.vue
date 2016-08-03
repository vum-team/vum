<template>
  <div class="page">
    <simple-header title="List" :back-link="true"></simple-header>
    <content>
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                </div>
                <div class="item-after">Subtitle</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                </div>
                <div class="item-after"><span class="badge">24</span></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                </div>
                <div class="item-after">Subtitle</div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                </div>
                <div class="item-after"><span class="badge">24</span></div>
              </div>
            </div>
          </li>
          <li>
            <div class="item-content">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="30"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                </div>
                <div class="item-after">
                  <label class="label-switch">
                    <input type="checkbox">
                    <div class="checkbox"></div>
                  </label>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
      </div>
      <div class="list-block media-list">
        <ul>
          <li>
            <a class="item-content item-link">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-content item-link">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="list-block media-list">
        <ul>
          <li>
            <a class="item-content item-link">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="88"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
                <div class="item-text">some description some description some description some description </div>
              </div>
            </a>
          </li>
          <li>
            <a class="item-content item-link">
              <div class="item-media"><img src="../assets/images/icon-list.png" width="88"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
                <div class="item-text">some description some description some description some description </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="list-block media-list">
        <ul>
          <li>
            <label class="item-content label-radio">
              <input type="radio" name="my-radio" checked>
              <i class="icon icon-form-radio"></i>
              <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-content label-radio">
              <input type="radio" name="my-radio">
              <i class="icon icon-form-radio"></i>
              <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div class="list-block media-list">
        <ul>
          <li>
            <label class="item-content label-checkbox">
              <input type="checkbox" name="my-checkbox" checked>
              <i class="icon icon-form-checkbox"></i>
              <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
              </div>
            </label>
          </li>
          <li>
            <label class="item-content label-checkbox">
              <input type="checkbox" name="my-checkbox">
              <i class="icon icon-form-checkbox"></i>
              <div class="item-media"><img src="../assets/images/icon-list.png" width="44"></div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title">Title</div>
                  <div class="item-after">After</div>
                </div>
                <div class="item-subtitle">Subtitle</div>
              </div>
            </label>
          </li>
        </ul>
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
