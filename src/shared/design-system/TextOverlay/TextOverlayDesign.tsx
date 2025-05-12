import { SettingColumn } from '@/modules/template/core/types/block.type'
import { SettingKeys, settingKeys } from '@/modules/template/hooks/useHandleSetting'

type TextOverlayDesignProps = {
  content: string | undefined
  setting: SettingColumn
  settings: SettingKeys
}

const TextOverlayDesign = ({ content, setting, settings }: TextOverlayDesignProps) => {
  const processedContent = content?.replace(/<a(.*?)>/g, `<a$1 style="color: ${settings[settingKeys.LINK]}">`)
  return (
    <table cellPadding={0} cellSpacing={0} border={0}>
      <tbody>
        <tr>
          <td>
            <div
              style={{
                background: `url(${setting.backgroundImage}) no-repeat`,
                width: setting.width,
                height: setting.height,
                backgroundSize: 'cover',
                display: 'inline-block'
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: processedContent || '' }}
                style={{
                  marginLeft: `${((setting.x ?? 0) / 100) * (setting.width ?? 560)}px`,
                  marginTop: `${((setting.y ?? 0) / 100) * (setting.height ?? 303)}px`,
                  fontSize: 16,
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
                  lineHeight: '1.5',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  width: 'max-content',
                  display: 'inline-block'
                }}
              />
              <div style={{ clear: 'both', height: '1px', visibility: 'hidden' }}>&nbsp;</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TextOverlayDesign
