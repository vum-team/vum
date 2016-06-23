<template>
  <header class="demos-header">
    <h1 class="demos-title">Toast</h1>
  </header>
  <a href="javascript:;" class="weui_btn weui_btn_primary">显示</a>
  <toast :show="false">正在加载</toast>
</template>

<script>
import { Toast } from '../components/'
export default {
  components: {
    Toast
  }
}
</script>
