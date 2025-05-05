import { Block } from '@/modules/template/core/types/block.type'

export const initData: Block[] = [
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
      mobileLayout: 'vertical'
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
      mobileLayout: 'vertical'
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
              form: 'round',
              size: 'middle',
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
      mobileLayout: 'vertical'
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
  },
  {
    id: 1746353641296,
    type: 'default',
    setting: {
      bottom: 10,
      left: 20,
      right: 20,
      top: 10,
      columnsInnerPadding: 20,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      columnMaxWidth: 173,
      mobileLayout: 'vertical'
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
              widthRate: 100,
              width: 173
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          }
        ]
      },
      {
        id: 2,
        parts: [
          {
            id: 1,
            type: 'image',
            setting: {
              isMobileFullWidth: true,
              align: 'center',
              widthRate: 100,
              width: 173
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          }
        ]
      },
      {
        id: 3,
        parts: [
          {
            id: 1,
            type: 'image',
            setting: {
              isMobileFullWidth: true,
              align: 'center',
              widthRate: 100,
              width: 173
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          }
        ]
      }
    ]
  },
  {
    id: 1746353643999,
    type: 'multi',
    setting: {
      bottom: 6,
      left: 20,
      right: 20,
      top: 6,
      columnsInnerPadding: 20,
      columnMaxWidth: 560,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: 'vertical'
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
  {
    id: 1746353646488,
    type: 'default',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: 'vertical'
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
              widthRate: 100,
              width: 270
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          },
          {
            id: 2,
            type: 'text',
            content:
              '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
            setting: {}
          }
        ]
      },
      {
        id: 2,
        parts: [
          {
            id: 1,
            type: 'image',
            setting: {
              isMobileFullWidth: true,
              align: 'center',
              widthRate: 100,
              width: 270
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          },
          {
            id: 2,
            type: 'text',
            content:
              '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
            setting: {}
          }
        ]
      }
    ]
  },
  {
    id: 1746353651247,
    type: 'multi',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: 'vertical'
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
              widthRate: 100,
              width: 270
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          }
        ]
      },
      {
        id: 2,
        parts: [
          {
            id: 1,
            type: 'text',
            content:
              '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
            setting: {}
          },
          {
            id: 2,
            type: 'button',
            setting: {
              form: 'round',
              size: 'middle',
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
  {
    id: 1746353657759,
    type: 'default',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: 'vertical'
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
              widthRate: 100,
              width: 270
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          },
          {
            id: 2,
            type: 'button',
            setting: {
              form: 'round',
              size: 'middle',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(47, 84, 235)',
              href: ''
            },
            content: 'ボタンテキスト'
          }
        ]
      },
      {
        id: 2,
        parts: [
          {
            id: 1,
            type: 'image',
            setting: {
              isMobileFullWidth: true,
              align: 'center',
              widthRate: 100,
              width: 270
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          },
          {
            id: 2,
            type: 'button',
            setting: {
              form: 'round',
              size: 'middle',
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
  {
    id: 1746353655759,
    type: 'default',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
      backgroundColor: 'rgb(255, 255, 255, 0)',
      mobileLayout: 'vertical'
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
          },
          {
            id: 2,
            type: 'button',
            setting: {
              form: 'round',
              size: 'middle',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(47, 84, 235)',
              href: ''
            },
            content: 'ボタンテキスト'
          }
        ]
      },
      {
        id: 2,
        parts: [
          {
            id: 1,
            type: 'text',
            content:
              '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
            setting: {}
          },
          {
            id: 2,
            type: 'button',
            setting: {
              form: 'round',
              size: 'middle',
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(47, 84, 235)',
              href: ''
            },
            content: 'ボタンテキスト'
          }
        ]
      }
    ]
  }
]
