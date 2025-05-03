import { memo } from 'react'
import _ from 'lodash'
import AddBlockButton from '@/modules/template/components/Button/AddBlockButton'
import GroupBlockButton from '@/modules/template/components/Button/GroupBlockButton'
import GroupColumnButton from '@/modules/template/components/Button/GroupColumnButton'
import {
  convertPadding,
  getColumnAlign,
  getColumnPadding,
  getColumnWidth,
  getStyleTableWrapper
} from '@/modules/template/utils'
import { Block, PartBlock, SelectedColumn } from '@/modules/template/core/types/block.type'
import ColumnDesign from '@/shared/design-system/Column/ColumnDesign'
import { settingKeys, SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import { MobileLayout } from '@/modules/template/core/enums/block.enum'

type BaseBlockProps = {
  key: number
  block: Block
  settings: SettingKeys
  index: number
  count: number
  selectedColumn: SelectedColumn | null
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

const BaseBlock = memo(
  ({
    block,
    settings,
    index,
    count,
    selectedColumn,
    onDuplicate,
    onDelete,
    onDuplicateColumn,
    onDeleteColumn,
    onMoveUp,
    onMoveDown,
    onSelectColumn,
    onOpenModal,
    activeTab
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
        style={{
          padding: convertPadding(block.setting),
          background: block.setting.backgroundColor ? block.setting.backgroundColor : settings[settingKeys.BACKGROUND],
          position: 'relative'
        }}
      >
        <tbody>
          <tr>
            <td>
              <AddBlockButton blockId={block.id} onOpenModal={onOpenModal} />
              <div className='mail-block-insert-line' />
              <div
                className={`mail-block-panel ${selectedColumn?.blockId === block.id && activeTab === 'blockEditMenu' ? 'edit-target-element' : ''}`}
              />
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
                    {block.columns.map((column, index) => (
                      <td
                        key={column.id}
                        className={
                          block.setting.mobileLayout === MobileLayout.HORIZONTAL
                            ? 'layout-horizontal'
                            : 'layout-vertical'
                        }
                        width={`${100 / block.columns.length}%`}
                        style={{
                          verticalAlign: 'top',
                          width: `${100 / block.columns.length}%`,
                          maxWidth: `${100 / block.columns.length}%`,
                          padding: getColumnPadding(block.columns.length, index, block.setting.columnsInnerPadding),
                          position: 'relative'
                        }}
                      >
                        {!(block.type === 'multi') && (
                          <GroupColumnButton
                            count={block.columns.length}
                            index={index}
                            blockId={block.id}
                            columnId={column.id}
                            onDuplicateColumn={onDuplicateColumn}
                            onDeleteColumn={onDeleteColumn}
                            gap={block.setting.columnsInnerPadding}
                          />
                        )}
                        <div className='mail-column-edit-panel'>
                          {column.parts.map((part, index) => (
                            <table
                              onClick={onSelectColumn(part, block.id, column.id)}
                              key={part.id}
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
                                    <table
                                      style={getStyleTableWrapper(part.type)}
                                      align={part.setting?.align || getColumnAlign(part.type)}
                                      width={getColumnWidth(part.type, part.setting?.size)}
                                      border={0}
                                      cellPadding={0}
                                      cellSpacing={0}
                                    >
                                      <tbody>
                                        <tr>
                                          <td style={{ padding: index !== column.parts.length - 1 ? '0px 0px 8px' : 0 }}>
                                            <ColumnDesign
                                              part={part}
                                              settingBlock={block.setting}
                                              settings={settings}
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <div
                                      className={`mail-parts-edit-panel ${index !== column.parts.length - 1 ? 'mail-parts-padding-bottom' : ''} ${selectedColumn && selectedColumn.blockId === block.id && selectedColumn.columnId === column.id && selectedColumn.id === part.id && activeTab !== 'blockEditMenu' ? 'edit-target-element' : ''}`}
                                      title='パーツ編集'
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          ))}
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
      _.isEqual(prevProps.selectedColumn, nextProps.selectedColumn) &&
      _.isEqual(prevProps.settings, nextProps.settings) &&
      prevProps.count === nextProps.count &&
      prevProps.index === nextProps.index &&
      prevProps.activeTab === nextProps.activeTab
    ) {
      return true
    }
    return false
  }
)

BaseBlock.displayName = 'BaseBlock'

export default BaseBlock
