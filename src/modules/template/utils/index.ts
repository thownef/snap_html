import { templateBlockList } from '@/modules/template/core/config/blocks/template-block-list'
import { EMAIL_REGEX } from '@/modules/template/core/constants'
import { PHONE_REGEX } from '@/modules/template/core/constants'
import { Block, PartBlock, SettingBlock, SettingColumn } from '@/modules/template/core/types/block.type'
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

  const baseColumn = template.columns[0]
  const baseContent = baseColumn.parts[0]

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
    columns: Array.from({ length: contentCount }, (_, index) => ({
      ...baseColumn,
      parts: [
        {
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
        }
      ],
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
    case 'sns':
      return 'auto'
    default:
      return '100%'
  }
}

export const updatePartSetting = (
  part: PartBlock,
  keyChange: string,
  valueUpdate: number | string | boolean,
  columnMaxWidth: number
) => {
  const newPart = _.cloneDeep(part)
  switch (keyChange) {
    case 'setting.widthRate': {
      const newWidth = Math.round((Number(valueUpdate) * (columnMaxWidth - 32)) / 100) + 32
      _.set(newPart, keyChange, valueUpdate)
      _.set(newPart, 'setting.width', newWidth)
      break
    }
    case 'setting.width': {
      const newWidthRate = Math.round(((Number(valueUpdate) - 32) / (columnMaxWidth - 32)) * 100)
      _.set(newPart, keyChange, valueUpdate)
      _.set(newPart, 'setting.widthRate', newWidthRate)
      break
    }
    default:
      _.set(newPart, keyChange, valueUpdate)
  }
  return newPart
}

export const updateColumnMaxWidth = (
  keyChange: string,
  valueUpdate: number,
  blockSetting: SettingBlock,
  count: number
) => {
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
    width: Math.round((widthRate * (maxWidth - 32)) / 100 + 32)
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

export const getStyleTableWrapper = (type: string) => {
  switch (type) {
    case 'divider':
      return { padding: '14px 0px' }
    default:
      return undefined
  }
}

export const validateLink = (value: string, type: string) => {
  switch (type) {
    case 'email':
      return !EMAIL_REGEX.test(value) ? { message: '正しいメールアドレス形式に修正してください。' } : null
    case 'phone':
      return !PHONE_REGEX.test(value) ? { message: '正しい電話番号形式に修正してください。' } : null
    case 'URL':
      try {
        new URL(value)
        return null
      } catch {
        return { message: '正しいURL形式に修正してください。' }
      }
  }
}

export const convertLink = (value: string, type: string) => {
  switch (type) {
    case 'email':
      return `mailto:${value}`
    case 'phone':
      return `tel:${value}`
    default:
      return value
  }
}
export const revertLink = (value: string) => {
  if (value.startsWith('mailto:')) {
    return value.replace('mailto:', '')
  }
  if (value.startsWith('tel:')) {
    return value.replace('tel:', '')
  }
  return value
}

