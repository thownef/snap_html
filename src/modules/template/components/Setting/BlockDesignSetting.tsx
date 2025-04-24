import { Space, Typography } from 'antd'
import TopPaddingIcon from '@/modules/template/components/Icon/TopPaddingIcon'
import BottomPaddingIcon from '@/modules/template/components/Icon/BottomPaddingIcon'
import CenterPaddingIcon from '@/modules/template/components/Icon/CenterPaddingIcon'
import LeftPaddingIcon from '@/modules/template/components/Icon/LeftPaddingIcon'
import RightPaddingIcon from '@/modules/template/components/Icon/RightPaddingIcon'
import ColorPicker from '@/shared/components/ColorPicker/ColorPicker'
import { SelectedColumn } from '@/modules/template/core/types/block.type'
import InputNumberDesign from '@/shared/design-system/Input/InputNumberDesign'
import { AggregationColor } from 'antd/es/color-picker/color'
const { Text } = Typography

type BlockDesignSettingProps = {
  selectedColumn: SelectedColumn
  onChangeBlockPadding: (
    blockId: number,
    paddingType: 'top' | 'right' | 'bottom' | 'left' | 'columnsInnerPadding'
  ) => (value: number | null) => void
  onChangeBackgroundBlock: (blockId: number) => (color: AggregationColor) => void
}

const BlockDesignSetting = ({
  selectedColumn: {
    blockId,
    blockCount,
    blockSetting: {
      padding: { bottom, left, right, top, columnsInnerPadding },
      backgroundColor
    }
  },
  onChangeBlockPadding,
  onChangeBackgroundBlock
}: BlockDesignSettingProps) => {
  return (
    <Space className='w-full px-6 py-4' direction='vertical' size='small'>
      <Text strong>ブロック内の余白</Text>
      <Space direction='vertical' className='mb-4'>
        <Space align='center' size={24}>
          <InputNumberDesign
            label='上の余白'
            value={top}
            onChange={onChangeBlockPadding(blockId, 'top')}
            icon={<TopPaddingIcon />}
          />
          <InputNumberDesign
            label='下の余白'
            value={bottom}
            onChange={onChangeBlockPadding(blockId, 'bottom')}
            icon={<BottomPaddingIcon />}
          />
          {blockCount > 1 && columnsInnerPadding && (
            <InputNumberDesign
              label='中の余白'
              value={columnsInnerPadding}
              onChange={onChangeBlockPadding(blockId, 'columnsInnerPadding')}
              icon={<CenterPaddingIcon />}
            />
          )}
        </Space>

        <Space align='center' size={24}>
          <InputNumberDesign
            label='左の余白'
            value={left}
            onChange={onChangeBlockPadding(blockId, 'left')}
            icon={<LeftPaddingIcon />}
          />
          <InputNumberDesign
            label='右の余白'
            value={right}
            onChange={onChangeBlockPadding(blockId, 'right')}
            icon={<RightPaddingIcon />}
          />
        </Space>
      </Space>

      <Space direction='vertical' size='small'>
        <Text strong>ブロック背景</Text>
        <ColorPicker
          placement='right'
          value={backgroundColor}
          onChange={onChangeBackgroundBlock(blockId)}
          label='背景色'
        />
      </Space>
    </Space>
  )
}

export default BlockDesignSetting
