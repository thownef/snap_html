import { memo } from 'react'
import BaseBlock from '@/modules/template/components/Block/BaseBlock'
import { Block, ColumnBlock, SelectedBlock } from '@/modules/template/core/types/block.type'

type BlockContainerProps = {
  blocks: Block[]
  selectedBlock: SelectedBlock | null
  onDuplicate: (blockId: number) => () => void
  onDelete: (blockId: number) => () => void
  onDuplicateColumn: (blockId: number, columnId: number) => () => void
  onDeleteColumn: (blockId: number, columnId: number) => () => void
  onMoveUp: (blockId: number) => () => void
  onMoveDown: (blockId: number) => () => void
  onSelectBlock: (column: ColumnBlock, blockId: number) => () => void
}

const BlockContainer = memo(({ blocks, selectedBlock, onDuplicate, onDelete, onDuplicateColumn, onDeleteColumn, onMoveUp, onMoveDown, onSelectBlock }: BlockContainerProps) => {

  return (
    <>
      {blocks.map((block, index) => (
        <BaseBlock
          key={block.id}
          block={block}
          index={index}
          count={blocks.length}
          selectedBlock={selectedBlock}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
          onDuplicateColumn={onDuplicateColumn}
          onDeleteColumn={onDeleteColumn}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onSelectBlock={onSelectBlock}
        />
      ))}
    </>
  )
}, (prevProps, nextProps) => {
  return prevProps.blocks === nextProps.blocks && prevProps.selectedBlock === nextProps.selectedBlock
})

BlockContainer.displayName = 'BlockContainer'

export default BlockContainer
