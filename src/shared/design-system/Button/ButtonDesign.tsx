import { FormButton, SizeButton } from '@/modules/template/core/enums/block.enum'
import { SettingColumn } from '@/modules/template/core/types/block.type'

type ButtonDesignProps = {
  content: string
  setting: SettingColumn
}

const ButtonDesign = ({ content, setting }: ButtonDesignProps) => {
  if (setting.href) {
    return (
      <a
        href={setting.href}
        target='_blank'
        rel='noopener noreferrer'
        style={{
          color: setting.color,
          background: setting.backgroundColor,
          fontSize: setting.size === SizeButton.SMALL ? 14 : 16,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
          borderRadius: setting.form === FormButton.CIRCLE ? 24 : setting.form === FormButton.ROUND ? 6 : 2,
          width: '100%',
          display: 'inline-block',
          textAlign: 'center',
          padding: setting.size === SizeButton.SMALL ? '4px 0px' : '10px 0px',
          boxSizing: 'border-box',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
          margin: 0
        }}
      >
        <span
          className='mail-button-text'
          style={{
            padding: '0px 20px',
            display: 'inline-block',
            maxWidth: 520,
            lineHeight: '150%',
            textDecoration: 'none'
          }}
        >
          {content}
        </span>
      </a>
    )
  }

  return (
    <p
      style={{
        color: setting.color,
        background: setting.backgroundColor,
        fontSize: setting.size === SizeButton.SMALL ? 14 : 16,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
        borderRadius: setting.form === FormButton.CIRCLE ? 24 : setting.form === FormButton.ROUND ? 6 : 2,
        width: '100%',
        display: 'inline-block',
        textAlign: 'center',
        padding: setting.size === SizeButton.SMALL ? '4px 0px' : '10px 0px',
        boxSizing: 'border-box',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        margin: 0
      }}
    >
      <span
        className='mail-button-text'
        style={{
          padding: '0px 20px',
          display: 'inline-block',
          maxWidth: 520,
          lineHeight: '150%',
          textDecoration: 'none'
        }}
      >
        {content}
      </span>
    </p>
  )
}

export default ButtonDesign
