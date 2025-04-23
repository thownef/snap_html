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
    label: ModeEnum[Mode.PC],
  },
  {
    value: Mode.MOBILE,
    label: ModeEnum[Mode.MOBILE],
  },
  {
    value: Mode.ALT,
    label: ModeEnum[Mode.ALT],
  }
]

