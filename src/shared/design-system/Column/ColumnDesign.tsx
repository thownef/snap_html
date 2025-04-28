import { ColumnBlock, SettingBlock } from '@/modules/template/core/types/block.type'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import ButtonDesign from '@/shared/design-system/Button/ButtonDesign'
import DividerDesign from '@/shared/design-system/Divider/DividerDesign'
import ImageDesign from '@/shared/design-system/Image/ImageDesign'
import TextDesign from '@/shared/design-system/Text/TextDesign'

type ColumnDesignProps = {
  column: ColumnBlock
  settingBlock: SettingBlock
  settings: SettingKeys
}

const ColumnDesign = ({ column: { content, type, setting }, settingBlock, settings }: ColumnDesignProps) => {
  switch (type) {
    case 'text':
      return <TextDesign content={content} settingBlock={settingBlock} settings={settings} />
    case 'image':
      return <ImageDesign content={content} setting={setting} />
    case 'button':
      return <ButtonDesign content={content} setting={setting!} />
    case 'divider':
      return <DividerDesign setting={setting} />
    default:
      break
  }
}

export default ColumnDesign
