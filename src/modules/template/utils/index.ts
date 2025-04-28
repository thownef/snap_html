import { templateBlockList } from '@/modules/template/core/config/blocks/template-block-list'
import { Block, ColumnBlock, SelectedColumn, SettingBlock, SettingColumn } from '@/modules/template/core/types/block.type'
import _ from 'lodash'

export const getColumnPadding = (count: number, index: number, gap: number = 20) => {
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

export const convertPadding = (padding: SettingBlock, unit: string = 'px') => {
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

  const maxWidth =
    baseContent.type === 'image'
      ? Math.floor(
          (600 -
            template.setting.left -
            template.setting.right -
            (contentCount - 1) * template.setting.columnsInnerPadding) /
            contentCount
        )
      : undefined

  return {
    id: Date.now(),
    ...template,
    setting: {
      ...template.setting,
      ...(maxWidth ? { columnMaxWidth: maxWidth } : {})
    },
    contents: Array.from({ length: contentCount }, (_, index) => ({
      ...baseContent,
      ...(baseContent.type === 'image'
        ? {
            setting: {
              ...baseContent.setting,
              width: maxWidth
            }
          }
        : {}),
      id: index + 1
    }))
  }
}

export const getColumnAlign = (type: string) => {
  switch (type) {
    case 'button':
    case 'image':
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

export const updateColumnSetting = (
  col: ColumnBlock | SelectedColumn,
  keyChange: string,
  valueUpdate: number | string | boolean,
  columnMaxWidth: number
) => {
  const newCol = _.cloneDeep(col)
  switch (keyChange) {
    case 'setting.widthRate': {
      const newWidth = Math.round((Number(valueUpdate) * (columnMaxWidth - 32)) / 100) + 32
      _.set(newCol, keyChange, valueUpdate)
      _.set(newCol, 'setting.width', newWidth)
      break
    }
    case 'setting.width': {
      const newWidthRate = Math.round(((Number(valueUpdate) - 32) / (columnMaxWidth - 32)) * 100)
      _.set(newCol, keyChange, valueUpdate)
      _.set(newCol, 'setting.widthRate', newWidthRate)
      break
    }
    default:
      _.set(newCol, keyChange, valueUpdate)
  }
  return newCol
}

export const updateColumnMaxWidth = (keyChange: string, valueUpdate: number, blockSetting: SettingBlock, count: number) => {
  const { left, right, columnsInnerPadding, columnMaxWidth } = blockSetting
  switch (keyChange) {
    case 'left': {
      const newColumnMaxWidth = (600 - valueUpdate - right - (count - 1) * columnsInnerPadding) / count
      return {
        left: valueUpdate,
        columnMaxWidth: newColumnMaxWidth
      }
    }    
    case 'right': {
      const newColumnMaxWidth = (600 - left - valueUpdate - (count - 1) * columnsInnerPadding) / count
      return {
        right: valueUpdate,
        columnMaxWidth: newColumnMaxWidth
      }
    }
    case 'columnsInnerPadding': {
      const newColumnMaxWidth = (600 - left - right - (count - 1) * valueUpdate) / count
      return {
        columnMaxWidth: newColumnMaxWidth,
        columnsInnerPadding: valueUpdate
      }
    }
    default:
      return {
        [keyChange]: valueUpdate,
        columnMaxWidth: columnMaxWidth
      }
  }
}

export const updateImageWidth = (setting: SettingColumn, maxWidth: number) => {
  const widthRate = setting?.widthRate ?? 100
  return {
    ...setting,
    width: Math.round(widthRate * (maxWidth - 32) / 100 + 32)
  }
}

export const updateImageRate = (setting: SettingColumn, maxWidth: number) => {
  const width = setting?.width ?? 0
  const widthRate = Math.round(((width - 32) / (maxWidth - 32)) * 100)
  return {
    ...setting,
    widthRate
  }
}
