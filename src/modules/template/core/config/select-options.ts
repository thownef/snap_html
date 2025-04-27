import {
  FormButton,
  formButtonEnum,
  MobileLayout,
  mobileLayoutEnum,
  SizeButton,
  sizeButtonEnum
} from '@/modules/template/core/enums/block.enum'
import { Mode, ModeEnum } from '@/modules/template/core/enums/template.enum'
import { OptionSelect } from '@/shared/core/types/common.type'

export const linkOptions: OptionSelect[] = [
  {
    value: 'URL',
    label: 'URL'
  },
  {
    value: 'email',
    label: 'メールアドレス'
  },
  {
    value: 'phone',
    label: '電話番号'
  }
]

export const modeOptions: OptionSelect[] = [
  {
    value: Mode.PC,
    label: ModeEnum[Mode.PC]
  },
  {
    value: Mode.MOBILE,
    label: ModeEnum[Mode.MOBILE]
  },
  {
    value: Mode.ALT,
    label: ModeEnum[Mode.ALT]
  }
]

export const sizeButtonOptions: OptionSelect[] = [
  {
    value: SizeButton.SMALL,
    label: sizeButtonEnum[SizeButton.SMALL]
  },
  {
    value: SizeButton.MIDDLE,
    label: sizeButtonEnum[SizeButton.MIDDLE]
  },
  {
    value: SizeButton.LARGE,
    label: sizeButtonEnum[SizeButton.LARGE]
  }
]

export const formButtonOptions: OptionSelect[] = [
  {
    value: FormButton.CIRCLE,
    label: formButtonEnum[FormButton.CIRCLE]
  },
  {
    value: FormButton.ROUND,
    label: formButtonEnum[FormButton.ROUND]
  },
  {
    value: FormButton.SQUARE,
    label: formButtonEnum[FormButton.SQUARE]
  }
]

export const mobileLayoutOptions: OptionSelect[] = [
  {
    value: MobileLayout.VERTICAL,
    label: mobileLayoutEnum[MobileLayout.VERTICAL]
  },
  {
    value: MobileLayout.HORIZONTAL,
    label: mobileLayoutEnum[MobileLayout.HORIZONTAL]
  }
]
