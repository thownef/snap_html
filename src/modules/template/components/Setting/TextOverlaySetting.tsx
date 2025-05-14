import { Space } from 'antd'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ChangeBlockType, SelectedColumn } from '@/modules/template/core/types/block.type'
import DropTextOverlay from '@/modules/template/components/Drop/DropTextOverlay'
import InputNumberDesign from '@/shared/design-system/Input/InputNumberDesign'
import LeftPaddingIcon from '@/modules/template/components/Icon/LeftPaddingIcon'
import TopPaddingIcon from '@/modules/template/components/Icon/TopPaddingIcon'

type TextOverlaySettingProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (value: ChangeBlockType) => void
}

const TextOverlaySetting = ({ selectedColumn, onChangeBlock }: TextOverlaySettingProps) => {
  return (
    <Space className='px-6 pt-4 w-full' direction='vertical'>
      <Space align='center' size={24}>
        <InputNumberDesign
          label='左の余白'
          value={selectedColumn.setting.x ?? 0}
          onChange={onChangeBlock('setting.x', selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)}
          icon={<LeftPaddingIcon />}
        />
        <InputNumberDesign
          label='上の余白'
          value={selectedColumn.setting.y ?? 0}
          onChange={onChangeBlock('setting.y', selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)}
          icon={<TopPaddingIcon />}
        />
      </Space>
      <DndProvider backend={HTML5Backend}>
        <DropTextOverlay selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
      </DndProvider>
    </Space>
  )
}

export default TextOverlaySetting
