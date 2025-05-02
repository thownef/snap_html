import { FormButton, MobileLayout, SizeButton } from '@/modules/template/core/enums/block.enum'
import { Block } from '@/modules/template/core/types/block.type'

export const blockList: Block[] = [
  {
    id: 1,
    type: 'multi',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 4,
      columnMaxWidth: 278,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: MobileLayout.VERTICAL
    },
    columns: [
      {
        id: 1,
        parts: [
          {
            id: 1,
            type: 'image',
            setting: {
              isMobileFullWidth: true,
              width: 278,
              widthRate: 100
            },
            content: 'https://img.bme.jp/img/htmlmail_v3/limited_design/gourmet/01_logo.png'
          }
        ]
      },
      {
        id: 2,
        parts: [
          {
            id: 1,
            type: 'text',
            setting: {},
            content:
              '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    type: 'default',
    setting: {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      columnsInnerPadding: 20,
      columnMaxWidth: 600,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: MobileLayout.VERTICAL
    },
    columns: [
      {
        id: 1,
        parts: [
          {
            id: 1,
            type: 'text',
            content:
              '<p style="margin: 0px;">123テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
            setting: {}
          }
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'multi',
    setting: {
      bottom: 10,
      left: 20,
      right: 20,
      top: 10,
      columnsInnerPadding: 0,
      columnMaxWidth: 560,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: MobileLayout.VERTICAL
    },
    columns: [
      {
        id: 1,
        parts: [
          {
            id: 1,
            type: 'button',
            content: 'ボタンテキスト',
            setting: {
              form: FormButton.ROUND,
              size: SizeButton.MIDDLE,
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(47, 84, 235)',
              href: ''
            }
          }
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'multi',
    setting: {
      bottom: 10,
      left: 20,
      right: 20,
      top: 10,
      columnsInnerPadding: 20,
      columnMaxWidth: 560,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: MobileLayout.VERTICAL
    },
    columns: [
      {
        id: 1,
        parts: [
          {
            id: 1,
            type: 'sns',
            setting: {
              align: 'center',
              size: 'middle'
            },
            icon: [
              {
                id: 1,
                type: 'X',
                originalHref: '',
                convertedHref: ''
              },
              {
                id: 2,
                type: 'Facebook',
                originalHref: '',
                convertedHref: ''
              },
              {
                id: 3,
                type: 'YouTube',
                originalHref: '',
                convertedHref: ''
              },
              {
                id: 4,
                type: 'Instagram',
                originalHref: '',
                convertedHref: ''
              }
            ]
          }
        ]
      }
    ]
  }
]
