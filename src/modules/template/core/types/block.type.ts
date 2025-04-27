import { EditorEvents } from "@tiptap/react"
import { RadioChangeEvent } from "antd"
import { AggregationColor } from "antd/es/color-picker/color"

export type SettingColumn = {
  size?: string
  form?: string
  color?: string
  backgroundColor?: string
  href?: string
}

export type ColumnBlock = {
  id: number
  type: string
  setting?: SettingColumn
  content: string
}

export type SettingBlock = {
  bottom: number
  left: number
  right: number
  top: number
  columnsInnerPadding: number
  backgroundColor: string
  mobileLayout: string
}

export type Block = {
  id: number
  type: string
  setting: SettingBlock
  contents: ColumnBlock[]
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

export type ChangeBlockType = EditorEvents["update"] | React.ChangeEvent<HTMLInputElement> | RadioChangeEvent | AggregationColor | { target: { value: string } }

export type ChangeSettingBlockType = React.ChangeEvent<HTMLInputElement> | RadioChangeEvent | AggregationColor

