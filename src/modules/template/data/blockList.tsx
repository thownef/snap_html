import { Block } from '@/modules/template/core/types/block.type'

export const blockList: Block[] = [
  {
    id: 1,
    type: 'multi',
    background: 'rgb(255, 255, 255, 0)',
    contents: [
      {
        id: 1,
        type: 'image',
        content: 'https://img.bme.jp/img/htmlmail_v3/limited_design/gourmet/01_logo.png'
      },
      {
        id: 2,
        content:
          '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
        type: 'text'
      }
    ]
  }
]
