export type ColumnBlock = {
  id: number
  type: string
  content: any
  preview: (content: string) => React.ReactNode
}

export type Block = {
  id: number
  type: string
  background?: string
  padding?: string
  contents: ColumnBlock[]
}

export type SelectedBlock = ColumnBlock & {
  blockId: number
}
