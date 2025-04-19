import CopyButton from '@/modules/template/components/Button/CopyButton'
import DeleteButton from '@/modules/template/components/Button/DeleteButton'
import { getColumnPaddingRight } from '@/modules/template/utils'

type GroupColumnButtonProps = {
  blockId: number
  columnId: number
  count: number
  index: number
  onDuplicateColumn: (blockId: number, columnId: number) => () => void
  onDeleteColumn: (blockId: number, columnId: number) => () => void
}

const GroupColumnButton = ({ blockId, columnId, count, index, onDuplicateColumn, onDeleteColumn }: GroupColumnButtonProps) => {
  return (
    <div className='mail-column-edit-menu' style={{ right: getColumnPaddingRight(count, index) }}>
      {count < 4 && (
        <div className='mail-column-copy-button'>
          <div title='カラム複製'>
            <CopyButton onClick={onDuplicateColumn(blockId, columnId)} className='js-copy-column' style={{ padding: 0, border: 0 }} />
          </div>
        </div>
      )}
      {count > 1 && (
        <div className='mail-column-delete-button'>
          <div title='カラム削除'>
            <DeleteButton onClick={onDeleteColumn(blockId, columnId)} className='ant-btn-default js-delete-column' style={{ padding: 0, border: 0 }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default GroupColumnButton
