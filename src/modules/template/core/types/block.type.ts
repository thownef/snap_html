import { EditorEvents } from "@tiptap/react"
import { RadioChangeEvent } from "antd"
import { AggregationColor } from "antd/es/color-picker/color"

export type PaddingColumn = {
  bottom: number
  left: number
  right: number
  top: number
}

export type PaddingBlock = PaddingColumn & {
  columnsInnerPadding: number
}

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

export type Block = {
  id: number
  type: string
  setting: {
    padding: PaddingBlock
    backgroundColor: string
  }
  contents: ColumnBlock[]
}

export type SelectedColumn = ColumnBlock & {
  blockId: number
  blockCount: number
  blockSetting: {
    padding: PaddingBlock
    backgroundColor: string
  }
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