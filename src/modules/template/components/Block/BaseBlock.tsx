import { memo } from 'react'
import _ from 'lodash'
import AddBlockButton from '@/modules/template/components/Button/AddBlockButton'
import GroupBlockButton from '@/modules/template/components/Button/GroupBlockButton'
import GroupColumnButton from '@/modules/template/components/Button/GroupColumnButton'
import { getColumnPadding } from '@/modules/template/utils'
import { Block, ColumnBlock, SelectedBlock } from '@/modules/template/core/types/block.type'
import ColumnDesign from '@/shared/design-system/Column/ColumnDesign'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'

type BaseBlockProps = {
  key: number
  block: Block
  settings: SettingKeys
  index: number
  count: number
  selectedBlock: SelectedBlock | null
  onDuplicate: (blockId: number) => () => void
  onDelete: (blockId: number) => () => void
  onDuplicateColumn: (blockId: number, columnId: number) => (e?: React.MouseEvent) => void
  onDeleteColumn: (blockId: number, columnId: number) => (e?: React.MouseEvent) => void
  onMoveUp: (blockId: number) => () => void
  onMoveDown: (blockId: number) => () => void
  onSelectBlock: (column: ColumnBlock, blockId: number) => () => void
}

const BaseBlock = memo(
  ({
    block,
    settings,
    index,
    count,
    selectedBlock,
    onDuplicate,
    onDelete,
    onDuplicateColumn,
    onDeleteColumn,
    onMoveUp,
    onMoveDown,
    onSelectBlock
  }: BaseBlockProps) => {
    return (
      <table
        align='center'
        width={600}
        className='root-mail-block scroll-block'
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role='presentation'
        style={{ padding: block.padding || '20px', background: block.background, position: 'relative' }}
      >
        <tbody>
          <tr>
            <td>
              <AddBlockButton blockId={block.id} />
              <div className='mail-block-insert-line' />
              <div className='mail-block-panel' />
              <GroupBlockButton
                blockId={block.id}
                canMoveUp={index > 0}
                canMoveDown={index < count - 1}
                onDuplicate={onDuplicate}
                onDelete={onDelete}
                onMoveUp={onMoveUp}
                onMoveDown={onMoveDown}
              />
              <table align='center' width='100%' border={0} cellPadding={0} cellSpacing={0} role='presentation'>
                <tbody style={{ width: '100%' }}>
                  <tr style={{ width: '100%' }}>
                    {block.contents.map((column, index) => (
                      <td
                        onClick={onSelectBlock(column, block.id)}
                        key={column.id}
                        className='layout-vertical'
                        width={`${100 / block.contents.length}%`}
                        style={{
                          verticalAlign: 'top',
                          width: `${100 / block.contents.length}%`,
                          maxWidth: `${100 / block.contents.length}%`,
                          padding: getColumnPadding(block.contents.length, index),
                          position: 'relative'
                        }}
                      >
                        {!(block.type === 'multi') && (
                          <GroupColumnButton
                            count={block.contents.length}
                            index={index}
                            blockId={block.id}
                            columnId={column.id}
                            onDuplicateColumn={onDuplicateColumn}
                            onDeleteColumn={onDeleteColumn}
                          />
                        )}
                        <div className='mail-column-edit-panel'>
                          <table
                            align='center'
                            width='100%'
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            role='presentation'
                            style={{ position: 'relative' }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <table width='100%' border={0} cellPadding={0} cellSpacing={0}>
                                    <tbody>
                                      <tr>
                                        <td style={{ padding: 0 }}>
                                          <ColumnDesign column={column} settings={settings} />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div
                                    className={`mail-parts-edit-panel ${selectedBlock && selectedBlock.blockId === block.id && selectedBlock.id === column.id ? 'edit-target-element' : ''}`}
                                    title='パーツ編集'
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    )
  },
  (prevProps, nextProps) => {
    if (
      _.isEqual(prevProps.block, nextProps.block) &&
      _.isEqual(prevProps.selectedBlock, nextProps.selectedBlock) &&
      _.isEqual(prevProps.settings, nextProps.settings) &&
      prevProps.index === nextProps.index
    ) {
      return true
    }
    return false
  }
)

BaseBlock.displayName = 'BaseBlock'

export default BaseBlock
