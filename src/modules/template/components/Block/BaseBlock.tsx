import { memo } from 'react'
import AddBlockButton from '@/modules/template/components/Button/AddBlockButton'
import GroupBlockButton from '@/modules/template/components/Button/GroupBlockButton'
import GroupColumnButton from '@/modules/template/components/Button/GroupColumnButton'
import { getColumnPadding } from '@/modules/template/utils'

interface BaseBlockProps {
  key: number
  block: any
  index: number
  count: number
  onDuplicate: (blockId: number) => () => void
  onDelete: (blockId: number) => () => void
  onDuplicateColumn: (blockId: number, columnId: number) => () => void
  onDeleteColumn: (blockId: number, columnId: number) => () => void
  onMoveUp: (blockId: number) => () => void
  onMoveDown: (blockId: number) => () => void
}

const BaseBlock = memo(
  ({
    block,
    index,
    count,
    onDuplicate,
    onDelete,
    onDuplicateColumn,
    onDeleteColumn,
    onMoveUp,
    onMoveDown
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
              <div className='mail-block-panel' data-block-id={block.id} />
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
                    {block.contents.map((content: any, index: number) => (
                      <td
                        key={content.id}
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
                            columnId={content.id}
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
                                        <td style={{ padding: 0 }}>{content.preview()}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div
                                    className='mail-parts-edit-panel mail-parts-edit-panel-0-0-0'
                                    title='パーツ編集'
                                    data-block-id={0}
                                    data-column-id={0}
                                    data-part-id={0}
                                    data-part-type='text'
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
    if (prevProps.block !== nextProps.block || prevProps.index !== nextProps.index) {
      return false
    }
    return true
  }
)

BaseBlock.displayName = 'BaseBlock'

export default BaseBlock
