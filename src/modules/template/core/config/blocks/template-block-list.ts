import { Block } from '@/modules/template/core/types/block.type'

export const templateBlockList: Record<string, Omit<Block, 'id'>> = {
  text: {
    type: 'default',
    setting: {
      padding: {
        bottom: 6,
        left: 20,
        right: 20,
        top: 6,
        columnsInnerPadding: 20
      },
      backgroundColor: 'rgb(255, 255, 255, 0)'
    },
    contents: [
      {
        id: 1,
        type: 'text',
        content:
          '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>'
      }
    ]
  },
  image: {
    type: 'default',
    setting: {
      padding: {
        bottom: 10,
        left: 20,
        right: 20,
        top: 10,
        columnsInnerPadding: 20
      },
      backgroundColor: 'rgb(255, 255, 255, 0)'
    },
    contents: [
      {
        id: 1,
        type: 'image',
        content: 'https://img.bme.jp/img/htmlmail_v3/template-img/dummy_image_v3.png'
      }
    ]
  }
}
