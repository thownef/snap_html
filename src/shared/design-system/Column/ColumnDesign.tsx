import { ColumnBlock, PaddingBlock } from '@/modules/template/core/types/block.type'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import ImageDesign from '@/shared/design-system/Image/ImageDesign'
import TextDesign from '@/shared/design-system/Text/TextDesign'

type ColumnDesignProps = {
  column: ColumnBlock
  settings: SettingKeys
  padding: PaddingBlock
  count: number
}

const ColumnDesign = ({ column: { content, type }, settings, padding, count }: ColumnDesignProps) => {
  switch (type) {
    case 'text':
      return <TextDesign content={content} settings={settings} />
    case 'image':
      return <ImageDesign content={content} padding={padding} count={count} />
    default:
      break
  }
}

export default ColumnDesign
