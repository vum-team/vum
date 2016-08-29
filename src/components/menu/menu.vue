<template>
  <overlay :show.sync="show" :transparent="true" :click="toggle" v-if="overlay"></overlay>
  <div class="menu {{computedPosition}}" v-bind:style="{ top: top+'px', left: left+'px'}" v-show="show" v-el:menu @click="show = false" transition="menu">
    <div class="angle" v-bind:style="{ transform : 'translate3d(' + angleOffset+'px, 0, 0) rotate(45deg)' }"></div>
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from '../overlay'
import util from '../../util'

// menu's offsetparent should be the same to trigger's

const AUTO = 'auto'
const TOP = 'top'
const BOTTOM = 'bottom'

export default {
  props: {
    trigger: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: AUTO
    },
    show: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 92
    },
    angleOffset: {
      type: Number,
      default: 0
    }
  },

  components: {
    Overlay
  },

  data () {
    return {
      top: 0,
      left: 0,
      computedPosition: TOP,
      triggerElement: undefined,
      parentElement: undefined
    }
  },

  ready () {
    this.$nextTick(() => {
      this.triggerElement = document.querySelector(this.trigger)
      this.triggerElement.addEventListener('click', this.toggle)
      this.parentElement = this.triggerElement.offsetParent
      this.parentElement.addEventListener('scroll', this.locate)

      document.addEventListener('click', (e) => {
        if (!util.isParent(e.target, this.$els.menu) && !util.isParent(e.target, this.triggerElement)) {
          this.show = false
        }
      })
    })
  },

  watch: {
    show (v, ov) {
      this.show = v
      if (v === true) {
        this.$nextTick(() => this.locate())
      }
    }
  },

  methods: {
    toggle () {
      this.show = !this.show
    },

    locate () {
      // compute position
      if (!this.show || !this.triggerElement) return false
      const el = this.$els.menu
      const t = this.triggerElement
      const p = this.parentElement
      const top = t.offsetTop - p.scrollTop
      const tsize = t.getBoundingClientRect()
      const elsize = el.getBoundingClientRect()
      const psize = p.getBoundingClientRect()
      if (this.position !== AUTO) {
        this.computedPosition = this.position
      } else if (top > psize.height / 2) {
        this.computedPosition = TOP
      } else {
        this.computedPosition = BOTTOM
      }

      this.left = t.offsetLeft - elsize.width / 2 + tsize.width / 2

      if (this.left < 0) {
        const left = 4
        this.angleOffset = this.left - left
        this.left = left
      } else if (this.left > psize.width - elsize.width) {
        const left = psize.width - elsize.width - 4
        this.angleOffset = this.left - left
        this.left = left
      }

      if (this.computedPosition === TOP) {
        this.top = t.offsetTop - elsize.height - 10
      } else {
        this.top = t.offsetTop + tsize.height + 10
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import './menu.less';
</style>
