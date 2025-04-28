import { settingKeys, SettingKeys } from "@/modules/template/hooks/useHandleSetting"
import { SettingBlock } from "@/modules/template/core/types/block.type"

type TextDesignProps = {
  content: string
  settingBlock: SettingBlock
  settings: SettingKeys
}

const TextDesign = ({ content, settingBlock, settings }: TextDesignProps) => {
  const processedContent = content.replace(
    /<a(.*?)>/g, 
    `<a$1 style="color: ${settings[settingKeys.LINK]}">`
  )

  return (
    <div
      dangerouslySetInnerHTML={{ __html: processedContent || '' }}
      className='mail-text'
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
        fontSize: 16,
        lineHeight: '1.5',
        textAlign: 'left',
        color: settings[settingKeys.TEXT],
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        maxWidth: settingBlock.columnMaxWidth
      }}
    />
  )
}

export default TextDesign
