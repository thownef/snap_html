import { useCallback, useState } from 'react'
import { AggregationColor } from 'antd/es/color-picker/color'
import { blockList } from '@/modules/template/data/blockList'
import { Block, ColumnBlock, SelectedColumn } from '@/modules/template/core/types/block.type'
import { createBlockFromTemplate } from '@/modules/template/utils'

const useHandleBlock = () => {
  const [blocks, setBlocks] = useState<Block[]>(blockList)
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
      setBlocks((prev) => {
        const newBlocks = prev.map((block) => {
          if (block.id !== blockId) return block

          const columnIndex = block.contents.findIndex((col) => col.id === columnId)
          if (columnIndex === -1) return block

          const newColumn = {
            ...block.contents[columnIndex],
            id: Date.now()
          }

          const updatedBlock = {
            ...block,
            contents: [...block.contents]
          }

          updatedBlock.contents.splice(columnIndex + 1, 0, newColumn)
          return updatedBlock
        })
        setSelectedColumn((prev) => {
          if (!prev) return null
          return {
            ...prev,
            blockCount: prev.blockCount + 1
          }
        })
        return newBlocks
      })
    }
  }, [])

  const handleDeleteColumn = useCallback((blockId: number, columnId: number) => {
    return (e?: React.MouseEvent) => {
      e?.stopPropagation()
      setBlocks((prev) => {
        const newBlocks = prev.map((block) => {
          if (block.id !== blockId) return block

          if (block.contents.length <= 1) return block

          const filteredContents = block.contents.filter((col) => col.id !== columnId)

          setSelectedColumn((prev) => {
            if (!prev) return null
            return {
              ...prev,
              blockCount: prev.blockCount - 1
            }
          })

          return {
            ...block,
            contents: filteredContents
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

  const handleSelectColumn = useCallback((column: ColumnBlock, blockId: number) => {
    return () => {
      setBlocks((prev) => {
        const parentBlock = prev.find((block) => block.id === blockId)
        if (!parentBlock) return prev

        setSelectedColumn({
          blockId,
          ...column,
          blockCount: parentBlock.contents.length,
          blockSetting: parentBlock.setting
        })
        setActiveKey('blockSettings')
        setActiveTab('partsEditMenu')
        return prev
      })
    }
  }, [])

  const handleChangeBlock = useCallback((content: string, blockId: number, columnId: number) => {
    setBlocks((prev) => {
      const updatedBlocks = prev.map((block) => {
        if (block.id !== blockId) return block

        const updatedContents = block.contents.map((col) => {
          if (col.id !== columnId) return col
          return { ...col, content }
        })

        return { ...block, contents: updatedContents }
      })

      return updatedBlocks
    })
  }, [])

  const handleChangeTab = useCallback((newKey: string) => {
    setActiveKey(newKey)
  }, [])

  const handleChangeActiveTab = useCallback((newKey: string) => {
    setActiveTab(newKey)
  }, [])

  const handleChangeBlockPadding = useCallback(
    (blockId: number, paddingType: 'top' | 'right' | 'bottom' | 'left' | 'columnsInnerPadding') => {
      return (value: number | null) => {
        setBlocks((prev) => {
          const updatedBlocks = prev.map((block) => {
            if (block.id !== blockId) return block
            const updatedBlock = {
              ...block,
              setting: {
                ...block.setting,
                padding: {
                  ...block.setting.padding,
                  [paddingType]: value
                }
              }
            }

            if (selectedColumn && selectedColumn.blockId === blockId) {
              setSelectedColumn({
                ...selectedColumn,
                blockSetting: updatedBlock.setting
              })
            }

            return updatedBlock
          })

          return updatedBlocks
        })
      }
    },
    [selectedColumn]
  )

  const handleChangeBackgroundBlock = useCallback(
    (blockId: number) => {
      return (color: AggregationColor) => {
        setBlocks((prev) => {
          const updatedBlocks = prev.map((block) => {
            if (block.id !== blockId) return block
            return { ...block, setting: { ...block.setting, backgroundColor: color.toRgbString() } }
          })

          if (selectedColumn && selectedColumn.blockId === blockId) {
            setSelectedColumn({
              ...selectedColumn,
              blockSetting: updatedBlocks[0].setting
            })
          }

          return updatedBlocks
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
    onChangeBlockPadding: handleChangeBlockPadding,
    onChangeBackgroundBlock: handleChangeBackgroundBlock,
    onOpenModal: handleOpenModal,
    onAddBlock: handleAddBlock
  }
}

export default useHandleBlock
