import { SettingColumn } from '@/modules/template/core/types/block.type'
type ImageDesignProps = {
  content: string | undefined
  setting: SettingColumn | undefined
}

const ImageDesign = ({ content, setting }: ImageDesignProps) => {
  return (
    <span style={{ display: 'inline-block' }}>
      <img
        className={`mail-parts-image ${setting?.isMobileFullWidth ? 'mail-parts-image-mobile' : ''}`}
        src={content}
        width={setting?.width}
        style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', width: setting?.width }}
      />
    </span>
  )
}

export default ImageDesign
