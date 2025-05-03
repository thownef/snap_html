import { memo } from 'react'
import _ from 'lodash'
import BaseBlock from '@/modules/template/components/Block/BaseBlock'
import { Block, PartBlock, SelectedColumn } from '@/modules/template/core/types/block.type'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'

type BlockContainerProps = {
  blocks: Block[]
  selectedColumn: SelectedColumn | null
  settings: SettingKeys
  onDuplicate: (blockId: number) => () => void
  onDelete: (blockId: number) => () => void
  onDuplicateColumn: (blockId: number, columnId: number) => (e?: React.MouseEvent) => void
  onDeleteColumn: (blockId: number, columnId: number) => (e?: React.MouseEvent) => void
  onMoveUp: (blockId: number) => () => void
  onMoveDown: (blockId: number) => () => void
  onSelectColumn: (part: PartBlock, blockId: number, columnId: number) => () => void
  onOpenModal: (modalName: string, blockId: number) => () => void
  activeTab: string
}

const BlockContainer = memo(
  ({
    blocks,
    selectedColumn,
    settings,
    onDuplicate,
    onDelete,
    onDuplicateColumn,
    onDeleteColumn,
    onMoveUp,
    onMoveDown,
    onSelectColumn,
    onOpenModal,
    activeTab
  }: BlockContainerProps) => {
    return (
      <>
        {blocks.map((block, index) => (
          <BaseBlock
            key={block.id}
            block={block}
            settings={settings}
            index={index}
            count={blocks.length}
            selectedColumn={selectedColumn}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
            onDuplicateColumn={onDuplicateColumn}
            onDeleteColumn={onDeleteColumn}
            onMoveUp={onMoveUp}
            onMoveDown={onMoveDown}
            onSelectColumn={onSelectColumn}
            onOpenModal={onOpenModal}
            activeTab={activeTab}
          />
        ))}
      </>
    )
  },
  (prevProps, nextProps) => {
    if (
      _.isEqual(prevProps.blocks, nextProps.blocks) &&
      _.isEqual(prevProps.selectedColumn, nextProps.selectedColumn) &&
      _.isEqual(prevProps.settings, nextProps.settings) &&
      prevProps.activeTab === nextProps.activeTab
    ) {
      return true
    }
    return false
  }
)

BlockContainer.displayName = 'BlockContainer'

export default BlockContainer
