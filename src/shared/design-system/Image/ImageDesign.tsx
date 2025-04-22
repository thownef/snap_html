type ImageDesignProps = {
  content: string
}

const ImageDesign = ({ content }: ImageDesignProps) => {
  return (
    <span style={{ display: 'inline-block' }}>
      <img
        className='mail-parts-image'
        src={content}
        width={199}
        style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', width: 199 }}
      />
    </span>
  )
}

export default ImageDesign
