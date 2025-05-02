import { FormButton, MobileLayout, SizeButton } from '@/modules/template/core/enums/block.enum'
import { Block } from '@/modules/template/core/types/block.type'

export const templateBlockList: Record<string, Omit<Block, 'id'>> = {
  text: {
    type: 'default',
    setting: {
      bottom: 6,
      left: 20,
      right: 20,
      top: 6,
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
            type: 'text',
            content:
              '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
            setting: {}
          }
        ]
      }
    ]
  },
  image: {
    type: 'default',
    setting: {
      bottom: 10,
      left: 20,
      right: 20,
      top: 10,
      columnsInnerPadding: 20,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      columnMaxWidth: 560,
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
              align: 'center',
              widthRate: 100
            },
            content: 'https://img.bme.jp/img/htmlmail_v3/template-img/dummy_image_v3.png'
          }
        ]
      }
    ]
  },
  button: {
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
            setting: {
              form: FormButton.ROUND,
              size: SizeButton.MIDDLE,
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(47, 84, 235)',
              href: ''
            },
            content: 'ボタンテキスト'
          }
        ]
      }
    ]
  },
  divider: {
    type: 'multi',
    setting: {
      bottom: 6,
      left: 20,
      right: 20,
      top: 6,
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
            type: 'divider',
            setting: {
              borderColor: '#bfbfbf',
              borderWidth: '1px',
              borderStyle: 'solid'
            },
            content: ''
          }
        ]
      }
    ]
  },
  sns: {
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
}
