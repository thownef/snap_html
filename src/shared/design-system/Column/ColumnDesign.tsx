import { ColumnBlock } from '@/modules/template/core/types/block.type'
import ImageDesign from '@/shared/design-system/Image/ImageDesign'
import TextDesign from '@/shared/design-system/Text/TextDesign'

type ColumnDesignProps = {
  column: ColumnBlock
}

const ColumnDesign = ({ column: { content, type } }: ColumnDesignProps) => {
  switch (type) {
    case 'text':
      return <TextDesign content={content} />
    case 'image':
      return <ImageDesign content={content} />
    default:
      break
  }
}

export default ColumnDesign
