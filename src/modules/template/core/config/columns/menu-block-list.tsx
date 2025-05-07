import TextButton1Icon from '@/modules/template/components/Icon/TextButton1Icon'
import ImageButton2Icon from '@/modules/template/components/Icon/ImageButton2Icon'
import ButtonIcon from '@/modules/template/components/Icon/ButtonIcon'
import DividerIcon from '@/modules/template/components/Icon/DividerIcon'
import Image1Icon from '@/modules/template/components/Icon/Image1Icon'
import Image2Icon from '@/modules/template/components/Icon/Image2Icon'
import Image3Icon from '@/modules/template/components/Icon/Image3Icon'
import ImageText1Icon from '@/modules/template/components/Icon/ImageText1Icon'
import ImageText2Icon from '@/modules/template/components/Icon/ImageText2Icon'
import ImageText3Icon from '@/modules/template/components/Icon/ImageText3Icon'
import ImageText4Icon from '@/modules/template/components/Icon/ImageText4Icon'
import ImageTextButton1Icon from '@/modules/template/components/Icon/ImageTextButton1Icon'
import ImageTextButton2Icon from '@/modules/template/components/Icon/ImageTextButton2Icon'
import ImageTextButton3Icon from '@/modules/template/components/Icon/ImageTextButton3Icon'
import ImageTextButton4Icon from '@/modules/template/components/Icon/ImageTextButton4Icon'
import SnsIcon from '@/modules/template/components/Icon/SnsIcon'
import Text1Icon from '@/modules/template/components/Icon/Text1Icon'
import Text2Icon from '@/modules/template/components/Icon/Text2Icon'
import Text3Icon from '@/modules/template/components/Icon/Text3Icon'
import { BlockIcon, BlockList } from '@/modules/template/core/types/block.type'
import ImageButton1Icon from '@/modules/template/components/Icon/ImageButton1Icon'
import TextButton2Icon from '@/modules/template/components/Icon/TextButton2Icon'
import TextOverlayIcon from '@/modules/template/components/Icon/TextOverlayIcon'

export const menuBlockList: BlockList[] = [
  {
    key: 'text',
    href: '#text',
    title: 'テキスト'
  },
  {
    key: 'image',
    href: '#image',
    title: '画像'
  },
  {
    key: 'button',
    href: '#button',
    title: 'ボタン'
  },
  {
    key: 'divider',
    href: '#divider',
    title: '区切り線'
  },
  {
    key: 'sns',
    href: '#sns',
    title: 'SNS'
  },
  {
    key: 'imageText',
    href: '#imageText',
    title: '画像+テキスト'
  },
  {
    key: 'imageTextButton',
    href: '#imageTextButton',
    title: '画像+テキスト+ボタン'
  },
  {
    key: 'imageButton',
    href: '#imageButton',
    title: '画像+ボタン'
  },
  {
    key: 'textButton',
    href: '#textButton',
    title: 'テキスト+ボタン'
  }
]

export const blockIconList: BlockIcon[] = [
  {
    id: 'text',
    name: 'テキスト',
    anchorKey: 'text',
    icons: [
      { id: '1', count: 1, type: 'text', component: Text1Icon },
      { id: '2', count: 2, type: 'text', component: Text2Icon },
      { id: '3', count: 3, type: 'text', component: Text3Icon }
    ]
  },
  {
    id: 'image',
    name: '画像',
    anchorKey: 'image',
    icons: [
      { id: '1', count: 1, type: 'image', component: Image1Icon },
      { id: '2', count: 2, type: 'image', component: Image2Icon },
      { id: '3', count: 3, type: 'image', component: Image3Icon }
    ]
  },
  {
    id: 'button',
    name: 'ボタン',
    anchorKey: 'button',
    icons: [{ id: '1', count: 1, type: 'button', component: ButtonIcon }]
  },
  {
    id: 'divider',
    name: '区切り線',
    anchorKey: 'divider',
    icons: [{ id: '1', count: 1, type: 'divider', component: DividerIcon }]
  },
  {
    id: 'sns',
    name: 'SNS',
    anchorKey: 'sns',
    icons: [{ id: '1', count: 1, type: 'sns', component: SnsIcon }]
  },
  {
    id: 'imageText',
    name: '画像+テキスト',
    anchorKey: 'imageText',
    icons: [
      { id: '1', count: 2, type: 'imageText', component: ImageText1Icon },
      { id: '2', count: 3, type: 'imageText', component: ImageText2Icon },
      { id: '3', count: 2, type: 'imageText1', component: ImageText3Icon },
      { id: '4', count: 2, type: 'imageText2', component: ImageText4Icon }
    ]
  },
  {
    id: 'imageTextButton',
    name: '画像+テキスト+ボタン',
    anchorKey: 'imageTextButton',
    icons: [
      { id: '1', count: 2, type: 'imageTextButton', component: ImageTextButton1Icon },
      { id: '2', count: 3, type: 'imageTextButton', component: ImageTextButton2Icon },
      { id: '3', count: 2, type: 'imageTextButton1', component: ImageTextButton3Icon },
      { id: '4', count: 2, type: 'imageTextButton2', component: ImageTextButton4Icon }
    ]
  },
  {
    id: 'imageButton',
    name: '画像+ボタン',
    anchorKey: 'imageButton',
    icons: [
      { id: '1', count: 2, type: 'imageButton', component: ImageButton1Icon },
      { id: '2', count: 3, type: 'imageButton', component: ImageButton2Icon }
    ]
  },
  {
    id: 'textButton',
    name: 'テキスト+ボタン',
    anchorKey: 'textButton',
    icons: [
      { id: '1', count: 2, type: 'textButton', component: TextButton1Icon },
      { id: '2', count: 3, type: 'textButton', component: TextButton2Icon }
    ]
  },
  {
    id: 'textOverlay',
    name: 'テキスト+オーバーレイ',
    anchorKey: 'textOverlay',
    icons: [{ id: '1', count: 1, type: 'textOverlay', component: TextOverlayIcon }]
  }
]
