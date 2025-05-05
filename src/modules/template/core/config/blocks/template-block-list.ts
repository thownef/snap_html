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
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
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
  },
  imageText: {
    type: 'default',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
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
            type: 'image',
            setting: {
              isMobileFullWidth: true,
              align: 'center',
              widthRate: 100
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
  imageText1: {
    type: 'multi',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
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
              align: 'center',
              widthRate: 100
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
          }
        ]
      }
    ]
  },
  imageText2: {
    type: 'multi',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
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
              widthRate: 100
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          }
        ]
      }
    ]
  },
  imageTextButton: {
    type: 'default',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
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
              align: 'center',
              widthRate: 100
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          },
          {
            id: 2,
            type: 'text',
            content:
              '<p style="margin: 0px;">テキストを入力してください。</p><p style="margin: 0px;">テキストを入力してください。</p>',
            setting: {}
          },
          {
            id: 3,
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
  imageTextButton1: {
    type: 'multi',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
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
              align: 'center',
              widthRate: 100
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
  imageTextButton2: {
    type: 'multi',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
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
          },
          {
            id: 2,
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
              widthRate: 100
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          }
        ]
      }
    ]
  },
  imageButton: {
    type: 'default',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
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
              align: 'center',
              widthRate: 100
            },
            content: 'https://res.cloudinary.com/thownef/image/upload/v1746424649/dummy_image_v3_cpohmd.webp'
          },
          {
            id: 2,
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
      },
    ]
  },
  textButton: {
    type: 'default',
    setting: {
      bottom: 20,
      left: 20,
      right: 20,
      top: 20,
      columnsInnerPadding: 20,
      columnMaxWidth: 270,
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
          },
          {
            id: 2,
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
}
