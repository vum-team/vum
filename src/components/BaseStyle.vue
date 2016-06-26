<style lang="less">
@import 'variables.less';

// font size

@baseWidth: 375px;
@baseFont: 20px;

html {
  font-size: @baseFont;
}

@bps: 400px, 414px, 480px; 

.loop(@i: 1) when (@i <= length(@bps)) {
  @bp: extract(@bps, @i);
  @font: @bp/@baseWidth*@baseFont;  
  @media only screen and (min-width: @bp){
    html {
      font-size: @font !important;
    }
  }
  .loop((@i + 1));
};
.loop;

// style
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
</style>
