import { memo, useCallback } from 'react'
import { InputNumber, Space, Typography } from 'antd'
const { Text } = Typography

type InputNumberDesignProps = {
  label: string
  value: number | null
  onChange: (value: number | null) => void
  min?: number
  max?: number
  icon?: React.ReactNode
  size?: 'small' | 'middle' | 'large'
  direction?: 'horizontal' | 'vertical'
}

const InputNumberDesign = memo(
  ({
    label,
    value,
    onChange,
    min = 0,
    max = 64,
    icon,
    size = 'small',
    direction = 'vertical'
  }: InputNumberDesignProps) => {
    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
      }
    }, [])

    return (
      <Space direction={direction} size='small'>
        <Text>{label}</Text>
        <Space>
          {icon}
          <InputNumber
            onKeyDown={handleKeyDown}
            onChange={onChange}
            className='!py-1 !px-1'
            min={min}
            max={max}
            value={value}
            size={size}
          />
        </Space>
      </Space>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.value === nextProps.value
  }
)

export default InputNumberDesign
