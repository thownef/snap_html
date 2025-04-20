import CopyButton from '@/modules/template/components/Button/CopyButton'
import DeleteButton from '@/modules/template/components/Button/DeleteButton'
import MoveDownButton from '@/modules/template/components/Button/MoveDownButton'
import MoveUpButton from '@/modules/template/components/Button/MoveUpButton'

type GroupBlockButtonProps = {
  blockId: number
  canMoveUp: boolean
  canMoveDown: boolean
  onDuplicate: (blockId: number) => () => void
  onDelete: (blockId: number) => () => void
  onMoveUp: (blockId: number) => () => void
  onMoveDown: (blockId: number) => () => void
}

const GroupBlockButton = ({ blockId, canMoveUp, canMoveDown, onDuplicate, onDelete, onMoveUp, onMoveDown }: GroupBlockButtonProps) => {
  return (
    <div className='block-edit-menu-popover'>
      <div>
        <div className='ant-popover ant-popover-placement-rightTop'>
          <div className='ant-popover-content'>
            <div className='ant-popover-arrow'>
              <span className='ant-popover-arrow-content' />
            </div>
            <div className='ant-popover-inner' role='tooltip'>
              <div className='ant-popover-inner-content'>
                <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
                  <div title='上に移動'>
                    <MoveUpButton isMove={canMoveUp} onClick={onMoveUp(blockId)} className='ant-btn-text ant-btn-block js-move-up-block' />
                  </div>
                  <div title='下に移動'>
                    <MoveDownButton isMove={canMoveDown} onClick={onMoveDown(blockId)} className='ant-btn-text ant-btn-block js-move-down-block' />
                  </div>
                  <div title='ブロック複製'>
                    <CopyButton onClick={onDuplicate(blockId)} className='ant-btn-text ant-btn-block js-copy-block' />
                  </div>
                  <div title='削除'>
                    <DeleteButton onClick={onDelete(blockId)} className='ant-btn-text ant-btn-block js-delete-block' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupBlockButton
