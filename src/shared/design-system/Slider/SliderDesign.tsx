import { Slider, type SliderSingleProps } from 'antd'
const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value}%`

type SliderDesignProps = {
  value: number
  onChange: (value: number) => void
}

const SliderDesign = ({ value, onChange }: SliderDesignProps) => {
  return <Slider className='w-full' tooltip={{ formatter }} value={value} onChange={onChange} />
}

export default SliderDesign
