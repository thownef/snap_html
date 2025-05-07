import { Space } from 'antd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ChangeBlockType, SelectedColumn } from '@/modules/template/core/types/block.type'
import DragTextOverlay from '@/modules/template/components/Drag/DragTextOverlay'

type TextOverlaySettingProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (keyChange: string, blockId: number, columnId: number, partId: number) => (value: ChangeBlockType) => void
}

const TextOverlaySetting = ({ selectedColumn, onChangeBlock }: TextOverlaySettingProps) => {
  return (
    <Space className='px-6 pt-4 w-full' direction='vertical'>
      <DndProvider backend={HTML5Backend}>
        <DragTextOverlay selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
      </DndProvider>
    </Space>
  )
}

export default TextOverlaySetting
