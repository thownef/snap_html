import { useCallback, useState } from 'react'
import { AggregationColor } from 'antd/es/color-picker/color'
import {
  Block,
  ChangeBlockType,
  ChangeSettingBlockType,
  PartBlock,
  SelectedColumn
} from '@/modules/template/core/types/block.type'
import {
  createBlockFromTemplate,
  updateColumnMaxWidth,
  updateImageRate,
  updateImageWidth,
  updatePartSetting
} from '@/modules/template/utils'
import { initData } from '@/modules/template/core/config/blocks/block-data'

const useHandleBlock = () => {
  const [blocks, setBlocks] = useState<Block[]>(initData)
  const [selectedColumn, setSelectedColumn] = useState<SelectedColumn | null>(null)
  const [activeKey, setActiveKey] = useState<string>('sendSettings')
  const [activeTab, setActiveTab] = useState<string>('partsEditMenu')
  const [blockId, setBlockId] = useState<number>(0)
  const [modalName, setModalName] = useState<string>('')

  const handleDuplicate = useCallback((blockId: number) => {
    return () => {
      setBlocks((prev) => {
        const blockIndex = prev.findIndex((block) => block.id === blockId)
        if (blockIndex === -1) return prev

        const newBlock = {
          ...prev[blockIndex],
          id: Date.now()
        }

        const newBlocks = [...prev]
        newBlocks.splice(blockIndex + 1, 0, newBlock)
        return newBlocks
      })
    }
  }, [])

  const handleDelete = useCallback((blockId: number) => {
    return () => {
      setBlocks((prev) => {
        if (prev.length <= 1) return prev
        const newBlocks = prev.filter((block) => block.id !== blockId)
        return newBlocks
      })
    }
  }, [])

  const handleDuplicateColumn = useCallback((blockId: number, columnId: number) => {
    return (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setSelectedColumn((prev) => {
        if (!prev) return null
        const newBlockCount = prev.columnCount + 1
        const left = prev.blockSetting.left || 0
        const right = prev.blockSetting.right || 0
        const columnsInnerPadding = prev.blockSetting.columnsInnerPadding || 0
        const columnMaxWidth = Math.round(
          (600 - left - right - (newBlockCount - 1) * columnsInnerPadding) / newBlockCount
        )

        let updatedPart = { ...prev }
        if (prev.type === 'image') {
          updatedPart = {
            ...prev,
            setting: {
              ...prev.setting,
              width: Number(prev.setting.widthRate) === 100
                ? columnMaxWidth
                : updateImageRate(prev.setting, columnMaxWidth).width
            }
          }
        }

        return {
          ...updatedPart,
          columnCount: newBlockCount,
          blockSetting: {
            ...prev.blockSetting,
            columnMaxWidth
          }
        }
      })
      setBlocks((prev) => {
        const newBlocks = prev.map((block) => {
          if (block.id !== blockId) return block

          const columnIndex = block.columns.findIndex((col) => col.id === columnId)
          if (columnIndex === -1) return block

          const newColumn = {
            ...block.columns[columnIndex],
            id: Date.now(),
            parts: block.columns[columnIndex].parts.map((part) => ({ ...part }))
          }

          const newColumns = [...block.columns]
          newColumns.splice(columnIndex + 1, 0, newColumn)

          const count = newColumns.length
          const left = block.setting.left || 0
          const right = block.setting.right || 0
          const columnsInnerPadding = block.setting.columnsInnerPadding || 0
          const columnMaxWidth = Math.round((600 - left - right - (count - 1) * columnsInnerPadding) / count)

          const updatedColumns = newColumns.map((col) => {
            return {
              ...col,
              parts: col.parts.map((part) => {
                if (part.type === 'image') {
                  return Number(part.setting.widthRate) === 100
                    ? {
                        ...part,
                        setting: {
                          ...part.setting,
                          width: columnMaxWidth
                        }
                      }
                    : {
                        ...part,
                        setting: updateImageRate(part.setting, columnMaxWidth)
                      }
                }
                return part
              })
            }
          })

          return {
            ...block,
            columns: updatedColumns,
            setting: {
              ...block.setting,
              columnMaxWidth
            }
          }
        })
        return newBlocks
      })
    }
  }, [])

  const handleDeleteColumn = useCallback((blockId: number, columnId: number) => {
    return (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setSelectedColumn((prev) => {
        if (!prev) return null
        const newBlockCount = prev.columnCount - 1
        if (newBlockCount < 1) return prev

        const left = prev.blockSetting.left || 0
        const right = prev.blockSetting.right || 0
        const columnsInnerPadding = prev.blockSetting.columnsInnerPadding || 0
        const columnMaxWidth = Math.round(
          (600 - left - right - (newBlockCount - 1) * columnsInnerPadding) / newBlockCount
        )

        let updatedPart = { ...prev }
        if (prev.type === 'image') {
          updatedPart = {
            ...prev,
            setting:
              Number(prev.setting.widthRate) === 100
                ? { ...prev.setting, width: columnMaxWidth }
                : updateImageRate(prev.setting, columnMaxWidth)
          }
        }

        return {
          ...updatedPart,
          columnCount: newBlockCount,
          blockSetting: {
            ...prev.blockSetting,
            columnMaxWidth
          }
        }
      })
      setBlocks((prev) => {
        const newBlocks = prev.map((block) => {
          if (block.id !== blockId) return block

          if (block.columns.length <= 1) return block

          const filteredColumns = block.columns.filter((col) => col.id !== columnId)
          const count = filteredColumns.length
          const left = block.setting.left || 0
          const right = block.setting.right || 0
          const columnsInnerPadding = block.setting.columnsInnerPadding || 0
          const columnMaxWidth = Math.round((600 - left - right - (count - 1) * columnsInnerPadding) / count)

          const updatedColumns = filteredColumns.map((col) => ({
            ...col,
            parts: col.parts.map((part) => {
              if (part.type === 'image') {
                return Number(part.setting.widthRate) === 100
                  ? {
                      ...part,
                      setting: {
                        ...part.setting,
                        width: columnMaxWidth
                      }
                    }
                  : {
                      ...part,
                      setting: updateImageRate(part.setting, columnMaxWidth)
                    }
              }
              return part
            })
          }))

          return {
            ...block,
            columns: updatedColumns,
            setting: {
              ...block.setting,
              columnMaxWidth
            }
          }
        })
        return newBlocks
      })
    }
  }, [])

  const handleMoveUp = useCallback((blockId: number) => {
    return () => {
      setBlocks((prev) => {
        const blockIndex = prev.findIndex((block) => block.id === blockId)
        if (blockIndex <= 0 || blockIndex === -1) return prev

        const newBlocks = [...prev]
        const temp = newBlocks[blockIndex]
        newBlocks[blockIndex] = newBlocks[blockIndex - 1]
        newBlocks[blockIndex - 1] = temp

        return newBlocks
      })
    }
  }, [])

  const handleMoveDown = useCallback((blockId: number) => {
    return () => {
      setBlocks((prev) => {
        const blockIndex = prev.findIndex((block) => block.id === blockId)
        if (blockIndex === -1 || blockIndex >= prev.length - 1) return prev

        const newBlocks = [...prev]
        const temp = newBlocks[blockIndex]
        newBlocks[blockIndex] = newBlocks[blockIndex + 1]
        newBlocks[blockIndex + 1] = temp

        return newBlocks
      })
    }
  }, [])

  const handleSelectColumn = useCallback((part: PartBlock, blockId: number, columnId: number) => {
    return () => {
      const parentBlock = blocks.find((block) => block.id === blockId)
      if (!parentBlock) return

      setSelectedColumn({
        ...part,
        blockId,
        columnId,
        columnCount: parentBlock.columns.length,
        blockSetting: parentBlock.setting
      })
      setActiveKey('blockSettings')
      setActiveTab('partsEditMenu')
    }
  }, [blocks])

  const handleChangeBlock = useCallback(
    (keyChange: string, blockId: number, columnId: number, partId: number) => {
      return (value: ChangeBlockType) => {
        const valueUpdate =
          value === null
            ? 32
            : typeof value === 'object'
              ? 'editor' in value
                ? value.editor.getHTML()
                : value instanceof AggregationColor
                  ? value.toRgbString()
                  : 'target' in value && ['checkbox'].includes((value.target as HTMLInputElement).type)
                    ? (value.target as HTMLInputElement).checked
                    : 'target' in value
                      ? (value.target as HTMLInputElement).value
                      : value
              : value

        if (selectedColumn && selectedColumn.blockId === blockId && selectedColumn.columnId === columnId && selectedColumn.id === partId) {
          setSelectedColumn((prev) => {
            if (!prev) return null

            const updatedPart = updatePartSetting(prev, keyChange, valueUpdate, selectedColumn.blockSetting.columnMaxWidth)

            return {
              ...prev,
              ...updatedPart
            } as SelectedColumn
          })
        }

        setBlocks((prev) =>
          prev.map((block) => {
            if (block.id !== blockId) return block
            const updatedColumns = block.columns.map((col) => {
              if (col.id !== columnId) return col

              const updatedParts = col.parts.map((part) =>
                part.id !== partId
                  ? part
                  : updatePartSetting(part, keyChange, valueUpdate, block.setting.columnMaxWidth)
              )

              return {
                ...col,
                parts: updatedParts
              }
            })
            return { ...block, columns: updatedColumns }
          })
        )
      }
    },
    [selectedColumn]
  )

  const handleChangeTab = useCallback((newKey: string) => {
    setActiveKey(newKey)
  }, [])

  const handleChangeActiveTab = useCallback((newKey: string) => {
    setActiveTab(newKey)
  }, [])

  const handleChangeSettingBlock = useCallback(
    (blockId: number, keyChange: string) => {
      return (value: ChangeSettingBlockType) => {
        const valueUpdate =
          value === null
            ? 0
            : typeof value === 'object'
              ? 'target' in value
                ? value.target.value
                : value instanceof AggregationColor
                  ? value.toRgbString()
                  : value
              : value

        if (selectedColumn && selectedColumn.blockId === blockId) {
          setSelectedColumn((prev) => {
            if (!prev) return null
            const blockSetting = updateColumnMaxWidth(keyChange, valueUpdate, prev.blockSetting, prev.columnCount)

            const updatedPart = {
              ...prev,
              blockSetting: { ...prev.blockSetting, ...blockSetting }
            }

            if (prev.type === 'image') {
              const maxWidth = blockSetting.columnMaxWidth
              updatedPart.setting = updateImageWidth(prev.setting, maxWidth)
            }

            return updatedPart
          })
        }
        setBlocks((prev) => {
          return prev.map((block) => {
            if (block.id !== blockId) return block
            const blockSetting = updateColumnMaxWidth(keyChange, valueUpdate, block.setting, block.columns.length)
            const updatedColumns = block.columns.map((col) => ({
              ...col,
              parts: col.parts.map((part) => {
                if (part.type === 'image') {
                  const maxWidth = blockSetting.columnMaxWidth
                  return {
                    ...part,
                    setting: updateImageWidth(part.setting, maxWidth)
                  }
                }
                return part
              })
            }))

            return {
              ...block,
              setting: { ...block.setting, ...blockSetting },
              columns: updatedColumns
            }
          })
        })
      }
    },
    [selectedColumn]
  )

  const handleOpenModal = useCallback((modalName: string, blockId: number) => {
    return () => {
      setModalName(modalName)
      setBlockId(blockId)
    }
  }, [])

  const handleAddBlock = useCallback(
    (blockType: string, count: number = 1) => {
      return () => {
        setBlocks((prev) => {
          const newBlock = createBlockFromTemplate(blockType, count)
          const newBlocks = [...prev]

          if (blockId) {
            const insertIndex = newBlocks.findIndex((block) => block.id === blockId)
            if (insertIndex !== -1) {
              newBlocks.splice(insertIndex + 1, 0, newBlock)
              return newBlocks
            }
          }

          newBlocks.push(newBlock)
          return newBlocks
        })
        setModalName('')
        setBlockId(0)
      }
    },
    [blockId]
  )

  return {
    blocks,
    selectedColumn,
    activeKey,
    activeTab,
    modalName,
    onDuplicate: handleDuplicate,
    onDelete: handleDelete,
    onDuplicateColumn: handleDuplicateColumn,
    onDeleteColumn: handleDeleteColumn,
    onMoveUp: handleMoveUp,
    onMoveDown: handleMoveDown,
    onSelectColumn: handleSelectColumn,
    onChangeBlock: handleChangeBlock,
    onChangeTab: handleChangeTab,
    onChangeActiveTab: handleChangeActiveTab,
    onChangeSettingBlock: handleChangeSettingBlock,
    onOpenModal: handleOpenModal,
    onAddBlock: handleAddBlock
  }
}

export default useHandleBlock
