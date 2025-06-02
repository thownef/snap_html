import { EnumTypeName } from '@/shared/core/types/common.type'

export enum Mode {
  PC = 'pc',
  MOBILE = 'mobile'
}

export const ModeEnum: EnumTypeName = {
  [Mode.PC]: 'PC表示',
  [Mode.MOBILE]: 'スマホ表示'
}
