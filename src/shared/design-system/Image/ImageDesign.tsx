import { useMemo } from 'react'
import { PaddingBlock } from '@/modules/template/core/types/block.type'

type ImageDesignProps = {
  content: string
  padding: PaddingBlock
  count: number
}

const ImageDesign = ({ content, padding: { left, right, columnsInnerPadding }, count }: ImageDesignProps) => {
  const width = useMemo(
    () => (600 - left - right - (count - 1) * columnsInnerPadding) / count,
    [count, left, right, columnsInnerPadding]
  )
  return (
    <span style={{ display: 'inline-block' }}>
      <img
        className='mail-parts-image'
        src={content}
        width={width}
        style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', width: width }}
      />
    </span>
  )
}

export default ImageDesign
