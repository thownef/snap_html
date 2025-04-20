import { memo } from 'react'
import BaseBlock from '@/modules/template/components/Block/BaseBlock'

type BlockContainerProps = {
  blocks: any
  onDuplicate: (blockId: number) => () => void
  onDelete: (blockId: number) => () => void
  onDuplicateColumn: (blockId: number, columnId: number) => () => void
  onDeleteColumn: (blockId: number, columnId: number) => () => void
  onMoveUp: (blockId: number) => () => void
  onMoveDown: (blockId: number) => () => void
}

const BlockContainer = memo(({ blocks, onDuplicate, onDelete, onDuplicateColumn, onDeleteColumn, onMoveUp, onMoveDown }: BlockContainerProps) => {

  return (
    <>
      {blocks.map((block: any, index: number) => (
        <BaseBlock
          key={block.id}
          block={block}
          index={index}
          count={blocks.length}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
          onDuplicateColumn={onDuplicateColumn}
          onDeleteColumn={onDeleteColumn}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
        />
      ))}
    </>
  )
}, (prevProps, nextProps) => {
  return prevProps.blocks === nextProps.blocks
})

BlockContainer.displayName = 'BlockContainer'

export default BlockContainer
