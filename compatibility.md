# Android

## switch 导致页面无法滚动

- 环境：米4 安卓5.1.1 MIUI7.0 微信6.3.25
- 重现步骤：在List 中使用 switch 的时候，如果超出一屏高度，则会导致页面无法滚动或者很难滚动
- 原因：显示按钮的伪元素的 `translate3d` 属性导致的
- 解决方法：`-webkit-backface-visibility: hidden;`
