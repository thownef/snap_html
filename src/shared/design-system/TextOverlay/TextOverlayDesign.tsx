import { SettingColumn } from '@/modules/template/core/types/block.type'

type TextOverlayDesignProps = {
  content: string | undefined
  setting: SettingColumn
}

const TextOverlayDesign = ({ content, setting }: TextOverlayDesignProps) => {
  return (
    <table
      cellPadding={0}
      cellSpacing={0}
      border={0}
      style={{
        background: `url(${setting.backgroundImage}) no-repeat`,
        width: setting.width,
        height: setting.height,
        backgroundSize: 'cover'
      }}
    >
      <tbody>
        <tr>
          <td style={{ width: setting.width, height: setting.height, verticalAlign: 'top' }}>
            <div
              style={{
                marginLeft: `${((setting.x ?? 0) / 100) * (setting.width ?? 560)}px`,
                marginTop: `${((setting.y ?? 0) / 100) * (setting.height ?? 303)}px`,
                fontSize: 16,
                background: 'rgba(255,255,255,0.7)',
                padding: 2,
                display: 'block',
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
                lineHeight: '1.5',
                overflowWrap: 'break-word',
                borderRadius: 2,
                width: 'max-content'
              }}
            >
              {content}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TextOverlayDesign
