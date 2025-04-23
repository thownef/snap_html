import { ColumnBlock } from '@/modules/template/core/types/block.type'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import ImageDesign from '@/shared/design-system/Image/ImageDesign'
import TextDesign from '@/shared/design-system/Text/TextDesign'

type ColumnDesignProps = {
  column: ColumnBlock
  settings: SettingKeys
}

const ColumnDesign = ({ column: { content, type }, settings }: ColumnDesignProps) => {
  switch (type) {
    case 'text':
      return <TextDesign content={content} settings={settings} />
    case 'image':
      return <ImageDesign content={content} />
    default:
      break
  }
}

export default ColumnDesign
