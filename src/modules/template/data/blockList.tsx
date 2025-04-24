import { Block } from '@/modules/template/core/types/block.type'

export const blockList: Block[] = [
  {
    id: 1,
    type: 'multi',
    setting: {
      padding: {
        bottom: 20,
        left: 20,
        right: 20,
        top: 20,
        columnsInnerPadding: 20
      },
      backgroundColor: 'rgb(255, 255, 255, 0)',
    },
    contents: [
      {
        id: 1,
        type: 'image',
        setting: {
          padding: {
            bottom: 0,
            left: 0,
            right: 2,
            top: 0
          }
        },
        content: 'https://img.bme.jp/img/htmlmail_v3/limited_design/gourmet/01_logo.png'
      },
      {
        id: 2,
        setting: {
          padding: {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
          }
        },
        content:
          '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
        type: 'text'
      }
    ]
  },
  {
    id: 2,
    type: 'text',
    setting: {
      padding: {
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        columnsInnerPadding: 20
      },
      backgroundColor: 'rgb(255, 255, 255, 0)'
    },
    contents: [
      {
        id: 1,
        setting: {
          padding: {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
          }
        },
        content:
          '<p style="margin: 0px;">123テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
        type: 'text'
      }
    ]
  }
]
