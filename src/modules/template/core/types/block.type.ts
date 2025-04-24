export type PaddingColumn = {
  bottom: number
  left: number
  right: number
  top: number
}

export type PaddingBlock = PaddingColumn & {
  columnsInnerPadding: number
}

export type ColumnBlock = {
  id: number
  type: string
  setting: {
    padding: PaddingColumn
  }
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
