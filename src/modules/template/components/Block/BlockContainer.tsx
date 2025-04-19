import { memo } from 'react'
import BaseBlock from '@/modules/template/components/Block/BaseBlock'

type BlockContainerProps = {
  blocks: any
  onDuplicate: any
  onDelete: any
  onDuplicateColumn: any
  onDeleteColumn: any
}

const BlockContainer = memo(({ blocks, onDuplicate, onDelete, onDuplicateColumn, onDeleteColumn }: BlockContainerProps) => {

  return (
    <>
      {blocks.map((block: any) => (
        <BaseBlock
          key={block.id}
          block={block}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
          onDuplicateColumn={onDuplicateColumn}
          onDeleteColumn={onDeleteColumn}
        />
      ))}
    </>
  )
}, (prevProps, nextProps) => {
  return prevProps.blocks === nextProps.blocks
})

BlockContainer.displayName = 'BlockContainer'

export default BlockContainer
