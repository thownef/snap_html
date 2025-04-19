type CopyButtonProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const CopyButton = ({ className, style, onClick }: CopyButtonProps) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`ant-btn ant-btn-default js-copy-column ${className}`}
      style={style}
    >
      <div className='ant-space ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small'>
        <div className='ant-space-item'>
          <div
            className='button-icon button-icon--filled'
            style={{
              color: 'rgb(255, 255, 255)',
              background: 'rgb(217, 42, 51)',
              width: 24,
              height: 24
            }}
          >
            <span role='img' aria-label='block' className='anticon anticon-block'>
              <svg
                viewBox='64 64 896 896'
                focusable='false'
                data-icon='block'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M856 376H648V168c0-8.8-7.2-16-16-16H168c-8.8 0-16 7.2-16 16v464c0 8.8 7.2 16 16 16h208v208c0 8.8 7.2 16 16 16h464c8.8 0 16-7.2 16-16V392c0-8.8-7.2-16-16-16zm-480 16v188H220V220h360v156H392c-8.8 0-16 7.2-16 16zm204 52v136H444V444h136zm224 360H444V648h188c8.8 0 16-7.2 16-16V444h156v360z' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default CopyButton
