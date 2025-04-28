import { ColumnBlock, SettingBlock } from '@/modules/template/core/types/block.type'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import ButtonDesign from '@/shared/design-system/Button/ButtonDesign'
import DividerDesign from '@/shared/design-system/Divider/DividerDesign'
import SnsDesign from '@/shared/design-system/Sns/SnsDesign'
import ImageDesign from '@/shared/design-system/Image/ImageDesign'
import TextDesign from '@/shared/design-system/Text/TextDesign'
import withSnsContent from '@/shared/hoc/withSnsContent'
import withStringContent from '@/shared/hoc/withStringContent'
const GuardTextDesign = withStringContent(TextDesign)
const GuardImageDesign = withStringContent(ImageDesign)
const GuardButtonDesign = withStringContent(ButtonDesign)
const GuardSnsDesign = withSnsContent(SnsDesign)

type ColumnDesignProps = {
  column: ColumnBlock
  settingBlock: SettingBlock
  settings: SettingKeys
}

const ColumnDesign = ({ column: { content, type, setting }, settingBlock, settings }: ColumnDesignProps) => {
  switch (type) {
    case 'text':
      return <GuardTextDesign content={content} settingBlock={settingBlock} settings={settings} />
    case 'image':
      return <GuardImageDesign content={content} setting={setting} />
    case 'button':
      return <GuardButtonDesign content={content} setting={setting!} />
    case 'divider':
      return <DividerDesign setting={setting} />
    case 'sns':
      return <GuardSnsDesign content={content} />
    default:
      break
  }
}

export default ColumnDesign
