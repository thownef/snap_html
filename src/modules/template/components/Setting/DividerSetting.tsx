import { borderList, borderWidthList } from '@/modules/template/core/config/columns/border-list'
import { ChangeBlockType } from '@/modules/template/core/types/block.type'
import { SelectedColumn } from '@/modules/template/core/types/block.type'
import ColorPicker from '@/shared/components/ColorPicker/ColorPicker'
import RadioDesign from '@/shared/design-system/Radio/RadioDesign'
import { Space, Typography } from 'antd'

const { Text } = Typography

type DividerSettingProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (keyChange: string, blockId: number, columnId: number, partId: number) => (value: ChangeBlockType) => void
}

const DividerSetting = ({ selectedColumn, onChangeBlock }: DividerSettingProps) => {
  return (
    <Space direction='vertical' size='small' className='px-6 py-4'>
      <Space direction='vertical' size='small' className='mb-4'>
        <Text strong>太さ</Text>
        <RadioDesign
          className='[&_.ant-radio-button-wrapper]:w-[95px] [&_.ant-radio-button-wrapper]:text-center'
          value={selectedColumn.setting.borderWidth || '1px'}
          options={borderWidthList}
          onChange={onChangeBlock('setting.borderWidth', selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)}
        />
      </Space>
      <Space direction='vertical' size='small' className='mb-4'>
        <Text strong>線種</Text>
        <RadioDesign
          className='[&_.ant-radio-button-wrapper]:w-[95px] [&_.ant-radio-button-wrapper]:text-center'
          value={selectedColumn.setting.borderStyle || 'solid'}
          options={borderList}
          onChange={onChangeBlock('setting.borderStyle', selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)}
        />
      </Space>
      <Space direction='vertical' size='small' className='mb-4'>
        <Text strong>カラー</Text>
        <ColorPicker
          value={selectedColumn.setting.borderColor || '#bfbfbf'}
          onChange={onChangeBlock('setting.borderColor', selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)}
          label='線色'
        />
      </Space>
    </Space>
  )
}

export default DividerSetting
