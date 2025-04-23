import { EnumTypeName } from "@/shared/core/types/common.type";

export enum Mode {
  PC = 'pc',
  MOBILE = 'mobile',
  ALT = 'alt',
}

export const ModeEnum: EnumTypeName = {
  [Mode.PC]: 'PC表示',
  [Mode.MOBILE]: 'スマホ表示',
  [Mode.ALT]: '代替テキスト',
}

