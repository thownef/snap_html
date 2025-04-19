type DeleteButtonProps = {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

const DeleteButton = ({ className, style, onClick }: DeleteButtonProps) => {
  return (
    <button onClick={onClick} type='button' className={`ant-btn ${className}`} style={style}>
      <div className='ant-space ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small'>
        <div className='ant-space-item'>
          <div
            className='button-icon button-icon--ghost'
            style={{
              color: 'rgb(217, 42, 51)',
              background: 'rgb(255, 255, 255)',
              border: '1px solid rgb(217, 42, 51)',
              width: 24,
              height: 24
            }}
          >
            <span role='img' aria-label='delete' className='anticon anticon-delete'>
              <svg
                viewBox='64 64 896 896'
                focusable='false'
                data-icon='delete'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default DeleteButton
