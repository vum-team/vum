<style lang="less">
.grids {
  position: relative;
  overflow: hidden;
}
.grids:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
}
.grids:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  height: 100%;
  border-left: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
}
.grid {
  position: relative;
  float: left;
  padding: 20px 10px;
  width: 33.33333333%;
  box-sizing: border-box;
  text-decoration: none;
}
.grid:before {
  content: " ";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  height: 100%;
  border-right: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 100% 0;
          transform-origin: 100% 0;
  -webkit-transform: scaleX(0.5);
          transform: scaleX(0.5);
}
.grid:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #D9D9D9;
  color: #D9D9D9;
  -webkit-transform-origin: 0 100%;
          transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
}
.grid:active {
  background-color: #E4E4E4;
}
.grid_icon {
  width: 28px;
  height: 28px;
  margin: 0 auto;
}
.grid_icon img {
  display: block;
  width: 100%;
  height: 100%;
}
.grid_icon + .grid_label {
  margin: 5px 0 0;
}
.grid_label {
  display: block;
  text-align: center;
  color: #000;
  font-size: 14px;
}
</style>
