export const MIN_WIDTH = 744
export const MAX_WIDTH = 856
export const mediaQuery = window.matchMedia('(max-width: 1424px)')

export const SRCDOC = `<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>`

export const HEAD_CONTENT = `<style>
html,
body {
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.frame-root {
  overflow-x: hidden;
  height: 100%;
}

.root-mail-block td:hover .mail-block-add-button {
  opacity: 1;
}

.mail-parts-edit-panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  outline: solid 2px #d92a33;
  outline-offset: -2px;
  background: rgba(255, 4, 17, 0.05);
  opacity: 0;
}

.mail-parts-edit-panel:hover {
  opacity: 1;
}

button.mail-parts-edit-button {
  background: #262626;
  color: #fff;
  padding: 1px 8px;
  height: auto;
}

.mail-parts-edit-panel:hover button.mail-parts-edit-button {
  background: #d92a33;
}

.mail-parts-edit-panel.edit-target-element {
  opacity: 1;
  background: transparent;
}

.mail-parts-padding-bottom-8 .mail-parts-edit-panel {
  height: calc(100% - 40px);
}

.mail-block-panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(255, 4, 17, 0.05);
  outline: dashed 1px #d92a33;
  outline-offset: -1px;
  opacity: 0;
}

.root-mail-block td:hover .mail-block-panel {
  opacity: 1;
}

.mail-block-panel.edit-target-element {
  opacity: 1;
  background: transparent;
  outline: solid 2px #d92a33;
  outline-offset: -2px;
}

.root-mail-block .block-edit-menu-popover {
  display: block;
  width: 60px;
  height: 160px;
  right: -60px;
  opacity: 0;
}

.root-mail-block .block-edit-menu-popover.hide {
  display: none;
}

.root-mail-block .block-edit-menu-popover > div {
  width: 60px;
  height: 160px;
}

.root-mail-block td:hover .block-edit-menu-popover {
  opacity: 1;
}

.root-mail-block .block-edit-menu-popover:hover {
  opacity: 1;
}

.block-edit-menu-popover {
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
}

.ant-popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1030;
  box-sizing: border-box;
  display: block;
  padding: 0;
  padding-left: 12px;
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, Helvetica, Arial, 'Noto Sans JP', 'BIZ UDGothic', 'ヒラギノ角ゴシック',
    'Hiragino Sans', 'Meiryo UI', 'メイリオ', Meiryo, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 14px;
  font-weight: normal;
  line-height: 1.5714285714285714;
  color: rgb(38 38 38 / 88%);
  text-align: start;
  white-space: normal;
  list-style: none;
  cursor: auto;
  user-select: text;

  --antd-arrow-background-color: #fff;
}

.ant-popover-content {
  position: relative;
}

.ant-popover-arrow {
  position: absolute;
  top: 6px;
  left: 0;
  z-index: 1;
  display: block;
  width: 32px;
  height: 32px;
  overflow: hidden;
  pointer-events: none;
  border-radius: 0 0 2px;
  transform: translateX(-100%) rotate(-90deg);
}

.ant-popover-arrow::before {
  position: absolute;
  bottom: 0;
  width: 32px;
  height: 8px;
  clip-path: path(
    'M 6.343145750507619 8 A 4 4 0 0 0 9.17157287525381 6.82842712474619 L 14.585786437626904 1.414213562373095 A 2 2 0 0 1 17.414213562373096 1.414213562373095 L 22.82842712474619 6.82842712474619 A 4 4 0 0 0 25.65685424949238 8 Z'
  );
  pointer-events: none;
  content: '';
  background: var(--antd-arrow-background-color);
  inset-inline-start: 0;
}

.ant-popover-arrow::after {
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  z-index: 0;
  width: 11.31370849898476px;
  height: 11.31370849898476px;
  margin: auto;
  content: '';
  background: transparent;
  border-radius: 0 0 2px;
  box-shadow: 3px 3px 7px rgb(0 0 0 / 10%);
  transform: translateY(50%) rotate(-135deg);
}

.ant-popover-inner {
  padding: 8px;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 8px;
  box-shadow:
    0 6px 16px 0 rgb(0 0 0 / 8%),
    0 3px 6px -4px rgb(0 0 0 / 12%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
}

.ant-popover-inner-content {
  color: rgb(38 38 38 / 88%);
}

.ant-popover-hidden {
  display: none;
}

.ant-btn {
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  height: 32px;
  padding: 0 2px;
  font-family:
    -apple-system, BlinkMacSystemFont, Helvetica, Arial, 'Noto Sans JP', 'BIZ UDGothic', 'ヒラギノ角ゴシック',
    'Hiragino Sans', 'Meiryo UI', 'メイリオ', Meiryo, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5714285714285714;
  color: rgb(38 38 38 / 88%);
  text-align: center;
  white-space: nowrap;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
}

.ant-btn span {
  display: inline-block;
}

.ant-btn.ant-btn-block {
  width: 100%;
}

.ant-btn-text:not(:disabled):hover {
  color: rgb(38 38 38 / 88%);
  background-color: rgb(38 38 38 / 6%);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.ant-btn:not(:disabled):hover .button-icon--filled {
  background-color: #e65053 !important;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.ant-btn-text:not(:disabled):active {
  color: rgba(38, 38, 38, 0.88);
  background-color: rgba(38, 38, 38, 0.15);
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.ant-btn-text:disabled {
  color: rgb(38 38 38 / 25%);
  cursor: not-allowed;
}

.ant-space {
  display: inline-flex;
  aline-items: center;
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
}

.anticon {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  font-style: normal;
  line-height: 0;
  color: inherit;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}

.mail-block-add-button {
  position: absolute;
  right: 0;
  bottom: -17px;
  left: 0;
  opacity: 0;
  z-index: 99;
  width: 32px;
  margin: auto;
}

.mail-block-add-button:hover,
.mail-block-add-button:focus {
  opacity: 1 !important;
}

.mail-block-insert-line {
  position: absolute;
  right: 0;
  bottom: 0px;
  left: 0;
  opacity: 1;
  z-index: 98;
  width: 100%;
}

.mail-block-add-button:hover + .mail-block-insert-line:before {
  content: '';
  display: block;
  position: absolute;
  left: 2px;
  right: 2px;
  outline: 2px solid #e65053;
  opacity: 1;
}
.mail-block-add-button:hover + .mail-block-insert-line + .mail-block-panel {
  opacity: 0 !important;
}
.mail-block-add-button:hover + .mail-block-insert-line + .mail-block-panel + .block-edit-menu-popover {
  opacity: 0 !important;
}
.mail-block-add-button:hover
  + .mail-block-insert-line
  + .mail-block-panel
  + .block-edit-menu-popover
  + table
  .mail-column-edit-panel::before {
  opacity: 0 !important;
}
.mail-block-add-button:hover
  + .mail-block-insert-line
  + .mail-block-panel
  + .block-edit-menu-popover
  + table
  .mail-column-copy-button {
  opacity: 0 !important;
}
.mail-block-add-button:hover
  + .mail-block-insert-line
  + .mail-block-panel
  + .block-edit-menu-popover
  + table
  .mail-column-delete-button {
  opacity: 0 !important;
}

.mail-column-edit-panel {
  position: relative;
}
.mail-column-edit-panel::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 100%;
  outline: dashed 1px #d92a33;
  outline-offset: -1px;
  opacity: 0;
}
.root-mail-block td:hover .mail-column-edit-panel::before {
  opacity: 1;
}
.root-mail-block td:hover .mail-column-edit-menu:hover + .mail-column-edit-panel::before {
  box-shadow: none;
  outline: solid 3px #d92a33;
  outline-offset: -3px;
  background: rgba(255, 4, 17, 0.2);
}

.mail-parts-image > tbody > tr > td {
  position: relative;
}

.mail-column-copy-button {
  opacity: 0;
  z-index: 99;
  width: 24px;
  height: 24px;
  margin: auto;
}
.root-mail-block td:hover .mail-column-copy-button {
  opacity: 1;
}

.mail-column-delete-button {
  opacity: 0;
  z-index: 99;
  width: 24px;
  height: 24px;
  margin: auto;
}
.root-mail-block td:hover .mail-column-delete-button {
  opacity: 1;
}
.mail-column-delete-button .button-icon {
  background-color: #fff;
}

.mail-column-edit-menu {
  display: flex;
  gap: 4px;
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 99;
}
@media only screen and (max-width: 743.5px) {
  .layout-vertical .mail-column-edit-menu {
    right: 6px !important;
  }
}

</style>`

export const HEAD_FRAME_CONTENT = `
<head>
  <meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      font-size: 0;
    }

    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    p {
      display: block;
      margin: 0;
      min-height: 1em;
      mso-line-height-rule: exactly;
      mso-line-height-alt: 124%;
    }

    .blh {
      mso-line-height-rule: exactly;
      mso-line-height-alt: 124%;
    }
  </style>
  <style type="text/css">
    @media only screen and (max-width:743.5px) {
      .root-mail-block {
        width: 100%;
        max-width: 100%;
      }

      .mail-block-wrapper {
        width: 100%;
        max-width: 100%;
      }

      .layout-vertical {
        display: block;
        width: 100% !important;
        max-width: 100% !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      }

      .mail-divider {
        width: 100% !important;
      }

      .mail-button-text {
        max-width: 100% !important;
      }

      .mail-parts-image {
        max-width: 100% !important;
      }

      .mail-text {
        max-width: 100% !important;
      }

      .layout-vertical0-0-4 {
        padding-bottom: 4px !important;
      }

      .layout-vertical9-0-20 {
        padding-bottom: 20px !important;
      }

      .mail-parts-image-1-0-0 {
        width: 100% !important;
      }

      .mail-parts-image-9-0-0 {
        width: 100% !important;
      }

      .mail-parts-image-9-1-0 {
        width: 100% !important;
      }
    }
  </style>
</head>
`
