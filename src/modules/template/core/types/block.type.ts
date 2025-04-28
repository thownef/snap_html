import { EditorEvents } from "@tiptap/react"
import { CheckboxChangeEvent, RadioChangeEvent } from "antd"
import { AggregationColor } from "antd/es/color-picker/color"

export type SettingColumn = {
  size?: string
  form?: string
  color?: string
  backgroundColor?: string
  href?: string
  width?: number
  isMobileFullWidth?: boolean
  align?: "left" | "center" | "right"
  widthRate?: number
  borderColor?: string
  borderWidth?: string
  borderStyle?: string
}

export type Sns = {
  type: string
  originalHref: string
  convertedHref: string
}

export type ColumnBlock = {
  id: number
  type: string
  setting: SettingColumn
  content: string | Sns[]
}

export type SettingBlock = {
  bottom: number
  left: number
  right: number
  top: number
  columnsInnerPadding: number
  columnMaxWidth: number
  backgroundColor: string
  mobileLayout: string
}

export type Block = {
  id: number
  type: string
  setting: SettingBlock
  columns: ColumnBlock[]
}

export type SelectedColumn = ColumnBlock & {
  blockId: number
  blockCount: number
  blockSetting: SettingBlock
}

export type BlockList = {
  key: string
  href: string
  title: string
}

export type BlockIcon = {
  id: string
  name: string
  anchorKey: string
  icons: {
    id: string
    count: number
    component: React.ComponentType
  }[]
}

export type ChangeBlockType = EditorEvents["update"] | React.ChangeEvent<HTMLInputElement> | CheckboxChangeEvent | RadioChangeEvent | AggregationColor | { target: { value: string } } | number | null

export type ChangeSettingBlockType = RadioChangeEvent | AggregationColor | number | null

