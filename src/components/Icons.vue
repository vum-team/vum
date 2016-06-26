<style lang="less">
@import 'variables.less';
@import 'mixins.less';

.icon {
  display: inline-block;
  vertical-align: middle;
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  font-style: normal;
  position: relative;
  &.icon-back {
    width: 12px;
    height: 20px;
    vertical-align: -3px;
    .encoded-svg-background("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'><path d='M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z' fill='@{color-primary}'/></svg>");
  }
}
</style>
