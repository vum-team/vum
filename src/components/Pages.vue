<style lang="less">
@import 'variables.less';
@import 'mixins.less';

//page

.page {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

//page transition
.fade-transition {
  opacity: 1;
  transition: opacity .3s;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

.slide-transition {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: all .3s;
}
.slide-enter {
  opacity: .2;
  transform: translate3d(100%, 0, 0);
}
.slide-leave {
  opacity: 0;
  transform: translate3d(-50%, 0, 0);
}

// page content
.page-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.bar-nav ~ .page-content {
  top: @bar-base-height;
}
.bar-header-secondary ~ .page-content {
  top: (@bar-base-height*2);
}

// Footer bar margin
.bar-footer ~ .page-content {
  bottom: @bar-base-height;
}
.bar-footer-secondary ~ .page-content {
  bottom: (@bar-base-height*2);
}

// Tab bar margin
.bar-tab ~ .page-content,
.bar-tab ~ .page .page-content {
  bottom: @bar-tab-height;

  .tabbar-hidden & {
    bottom: 0;
  }
}

.bar-footer-secondary-tab ~ .page-content {
  bottom: (@bar-tab-height+@bar-base-height);
}

// Utility classes
.content-padded {
  margin: @bar-side-spacing;
}

//
// Bars
// --------------------------------------------------

.bar {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 10;
  height: @bar-base-height;
  padding-right: @bar-side-spacing;
  padding-left: @bar-side-spacing;
  background-color: #f7f7f8;
  .hairline(bottom, @border-default-color);
  backface-visibility: hidden;
}

// Modifier class to dock any bar below .bar-nav
.bar-header-secondary {
  top: @bar-base-height;
}

// Modifier class for footer bars
.bar-footer {
  bottom: 0;
}


// Modifier class to dock any bar above a standard bar
.bar-footer-secondary {
  bottom: @bar-base-height;
}

// Modifier class to dock any bar above a .bar-tab
.bar-footer-secondary-tab {
  bottom: @bar-tab-height;
}

// Give the footers the correct border
.bar-footer,
.bar-footer-secondary,
.bar-footer-secondary-tab {
  .hairline(top, @border-default-color);
  .hairline-remove(bottom);
}


// Nav bar
// --------------------------------------------------

// Bar docked to top of viewport for showing page title and actions
.bar-nav {
  top: 0;
}

// Centered text in the .bar-nav
//
// We position the absolutely to make sure the title is always centered
.title {
  position: absolute;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0 (-@bar-side-spacing);
  font-size: @font-size-default;
  font-weight: @font-weight;
  line-height: @bar-base-height;
  color: @color-text;
  text-align: center;
  white-space: nowrap;
}
// Retain specified title color
.title a {
  color: inherit;
}


// Tab bar
// --------------------------------------------------

// Bar docked to bottom and used for primary app navigation
.bar-tab {
  bottom: 0;
  width: 100%;
  height: @bar-tab-height;
  padding: 0;
  table-layout: fixed;
  .hairline(top, @border-default-color);
  .hairline-remove(bottom);
  z-index: 9000;  //less than popup
  transition-duration: 400ms;

  // Navigational tab (Nested to be more specific for the icons in tab-items)
  .tab-item {
    position: relative;
    display: table-cell;
    width: 1%;
    height: @bar-tab-height;
    color: #929292;
    text-align: center;
    vertical-align: middle;

    // Active states for the tab bar
    &.active,
    &:active {
      color: @color-primary;
    }

    // Activity badge on an icon
    .badge {
      position: absolute;
      top: .1rem;
      left: 50%;
      z-index: 100;
      height: .8rem;
      min-width: .8rem;
      padding: 0 .2rem;
      font-size: .6rem;
      line-height: .8rem;
      color: white;
      vertical-align: top;
      background: red;
      border-radius: .5rem;
      margin-left: .1rem;
    }

    // Tab icon
    .icon {
      top: 0.15rem;
      width: 1.2rem;
      height: 1.2rem;
      font-size: 1.2rem;
      line-height: 1.2rem;
      padding-top: 0;
      padding-bottom: 0;

      // Make the text smaller if it's used with an icon '
      ~ .tab-label {
        display: block;
        font-size: 0.55rem;
        position: relative;
        top: 0.15rem;
      }
    }
  }
}

.tabbar-hidden .bar-tab {
  transform: translate3d(0, 110%, 0);
}

// Bars with buttons
// --------------------------------------------------

.bar .button {
  position: relative;
  top: 0.35rem;
  z-index: 20; // Position the buttons on top of .title
  margin-top: 0;
  font-weight: @font-weight-light;
  background: transparent;
  color: @color-primary;

  // Give buttons that are floated left and right side margin
  &.pull-right {
    margin-left: @bar-side-spacing;
  }
  &.pull-left {
    margin-right: @bar-side-spacing;
  }
}

// Bars with link buttons (Line the text up with page-content)
.bar .button-link {
  top: 0;
  padding: 0;
  font-size: 0.8rem;
  line-height: @bar-base-height;
  height: @bar-base-height;
  color: @color-primary;
  border: 0;

  &:active,
  &.active {
    color: darken(@color-primary, 10%);
  }
}

// Bars with block buttons
//
// Add proper padding
.bar .button-block {
  top: 0.35rem;
  font-size: 0.8rem; // Scale down font size to fit in bar.
  width: 100%;
}

// Nav buttons (Only applicable within bars)
//
// Buttons inside bars that sit closer against the viewport.
.bar .button-nav {
  &.pull-left {
    margin-left: -0.25rem;

    .icon-left-nav {
      margin-right: -0.15rem;
    }
  }
  &.pull-right {
    margin-right: -0.25rem;

    .icon-right-nav {
      margin-left: -0.15rem;
    }
  }
}


// Bars with Ratchicons
// --------------------------------------------------

.bar {
  .icon {
    position: relative;
    z-index: 20; // Position the buttons on top of .title
    padding: .5rem .1rem;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  // Vertical center the larger icons in buttons.
  .button .icon {
    padding: 0;
  }

  // Handle carets in the titles
  .title .icon {
    padding: 0;

    // Specific postioning of the caret icon within a title. Used with popover.js.
    &.icon-caret {
      top: 0.2rem;
      margin-left: -0.25rem;
    }
  }
}

.bar-footer .icon {
  font-size: 1.2rem;
  line-height: 1.2rem;
}

// Bars for search forms
// --------------------------------------------------

// Position/size search bar within the bar
.bar input[type="search"] {
  height: 1.45rem;
  margin: 0.3rem 0;
}
</style>
