import { useCallback, useState } from 'react'
import { blockList } from '@/modules/template/data/blockList'

const useHandleBlock = () => {
  const [blocks, setBlocks] = useState(blockList)

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
    return () => {
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
        return newBlocks
      })
    }
  }, [])

  const handleDeleteColumn = useCallback((blockId: number, columnId: number) => {
    return () => {
      setBlocks((prev) => {
        const newBlocks = prev.map((block) => {
          if (block.id !== blockId) return block

          if (block.contents.length <= 1) return block

          const filteredContents = block.contents.filter((col) => col.id !== columnId)

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

  return {
    blocks,
    onDuplicate: handleDuplicate,
    onDelete: handleDelete,
    onDuplicateColumn: handleDuplicateColumn,
    onDeleteColumn: handleDeleteColumn,
    onMoveUp: handleMoveUp,
    onMoveDown: handleMoveDown
  }
}

export default useHandleBlock
