import { EditorEvents } from "@tiptap/react"
import { CheckboxChangeEvent, RadioChangeEvent } from "antd"
import { AggregationColor } from "antd/es/color-picker/color"

export type Sns = {
  id: number
  type: string
  originalHref: string
  convertedHref: string
}

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

export type PartBlock = {
  id: number
  type: string
  content?: string
  icon?: Sns[]
  setting: SettingColumn
}

export type ColumnBlock = {
  id: number
  parts: PartBlock[]
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

export type SelectedColumn = PartBlock & {
  blockId: number
  columnId: number
  columnCount: number
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
    type: string
    component: React.ComponentType
  }[]
}

export type ChangeBlockType = EditorEvents["update"] | React.ChangeEvent<HTMLInputElement> | CheckboxChangeEvent | RadioChangeEvent | AggregationColor | { target: { value: string } } | number | null

export type ChangeSettingBlockType = RadioChangeEvent | AggregationColor | number | null

