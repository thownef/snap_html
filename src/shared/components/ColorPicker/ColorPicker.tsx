import { ColorPicker as AntdColorPicker, Space } from 'antd'
import { AggregationColor } from 'antd/es/color-picker/color'
import { TooltipPlacement } from 'antd/es/tooltip'
import { colorList } from '@/modules/template/core/config/columns/color-list'
import { memo } from 'react'

type ColorPickerProps = {
  value: string
  onChange: (value: AggregationColor) => void
  label: string
  placement?: TooltipPlacement
}

const ColorPicker = memo(
  ({ value, onChange, label, placement = 'bottom' }: ColorPickerProps) => {
    return (
      <Space>
        <AntdColorPicker placement={placement} value={value} onChange={onChange} presets={colorList} size='large' />
        <Space>{label}</Space>
      </Space>
    )
  },
  (prevProps, nextProps) => {
    if (prevProps.value === nextProps.value) {
      return true
    }
    return false
  }
)

export default ColorPicker
