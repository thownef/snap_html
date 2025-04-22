type TextDesignProps = {
  content: string
}

const TextDesign = ({ content }: TextDesignProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content || '' }}
      className='mail-text'
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
        fontSize: 16,
        lineHeight: '1.5',
        textAlign: 'left',
        color: 'rgb(38, 38, 38)',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        maxWidth: 278
      }}
    />
  )
}

export default TextDesign
