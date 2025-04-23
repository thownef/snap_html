import { settingKeys, SettingKeys } from "@/modules/template/hooks/useHandleSetting"

type TextDesignProps = {
  content: string
  settings: SettingKeys
}

const TextDesign = ({ content, settings }: TextDesignProps) => {
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
        maxWidth: 278
      }}
    />
  )
}

export default TextDesign
