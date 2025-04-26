import { templateBlockList } from '@/modules/template/core/config/blocks/template-block-list'
import { Block, PaddingBlock } from '@/modules/template/core/types/block.type'

export const getColumnPadding = (count: number, index: number, gap: number = 30) => {
  const paddingList = {
    1: ['0px'],
    2: [`0px ${gap / 2}px 0px 0px`, `0px 0px 0px ${gap / 2}px`],
    3: [`0px ${(2 * gap) / 3}px 0px 0px`, `0px ${gap / 3}px`, `0px 0px 0px ${(2 * gap) / 3}px`],
    4: [
      `0px ${(3 * gap) / 4}px 0px 0px`,
      `0px ${gap / 2}px 0px ${gap / 4}px`,
      `0px ${gap / 4}px 0px ${gap / 2}px`,
      `0px 0px 0px ${(3 * gap) / 4}px`
    ]
  }
  return paddingList[count as keyof typeof paddingList][index]
}

export const getColumnPaddingRight = (column: number, index: number, gap: number = 20) => {
  const paddingMap = {
    1: [6],
    2: [gap / 2 + 6, 6],
    3: [(2 * gap) / 3 + 6, gap / 3 + 6, 6],
    4: [(3 * gap) / 4 + 6, gap / 2 + 6, gap / 4 + 6, 6]
  }

  return paddingMap[column as keyof typeof paddingMap][index]
}

export const convertPadding = (padding: PaddingBlock, unit: string = 'px') => {
  const { top, right, bottom, left } = padding
  switch (true) {
    case top === right && right === bottom && bottom === left:
      return `${top}${unit}`
    case top === bottom && left === right:
      return `${top}${unit} ${right}${unit}`
    case left === right:
      return `${top}${unit} ${right}${unit} ${bottom}${unit}`
    default:
      return `${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}`
  }
}

export const createBlockFromTemplate = (type: string, contentCount: number = 1): Block => {
  const template = templateBlockList[type]

  const baseContent = template.contents[0]

  return {
    id: Date.now(),
    ...template,
    contents: Array.from({ length: contentCount }, (_, index) => ({
      ...baseContent,
      id: index + 1
    }))
  }
}

export const getColumnAlign = (type: string, ) => {
  switch (type) {
    case 'button':
      return 'center'
    default:
      return undefined
  }
}
export const getColumnWidth = (type: string, size?: string) => {
  switch (type) {
    case 'button':
      return size === 'large' ? '100%' : 'auto'
    case 'image':
      return 'auto'
    default:
      return '100%'
  }
}




