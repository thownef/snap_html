import { Radio, RadioChangeEvent } from 'antd'
import cn from 'classnames'
import { OptionSelect } from '@/shared/core/types/common.type'

type RadioDesignProps = {
  value: number | string
  options: OptionSelect[]
  onChange: (e: RadioChangeEvent) => void
  size?: 'small' | 'middle' | 'large'
  className?: string
  classNames?: {
    radio?: string
  }
  optionType?: 'default' | 'button'
}

const RadioDesign = ({
  value,
  options,
  onChange,
  size = 'small',
  className,
  optionType = 'button'
}: RadioDesignProps) => {
  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      options={options}
      optionType={optionType}
      size={size}
      className={cn('w-full', className)}
    />
  )
}

export default RadioDesign
