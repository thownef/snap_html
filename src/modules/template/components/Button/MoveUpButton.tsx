type MoveUpButtonProps = {
  isMove: boolean
  onClick?: () => void
  className?: string
}

const MoveUpButton = ({ isMove, onClick, className }: MoveUpButtonProps) => {
  return (
    <button onClick={onClick} type='button' className={`ant-btn ${className}`} disabled={!isMove}>
      <div className='ant-space ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small'>
        <div className='ant-space-item'>
          <div
            className='button-icon button-icon--filled'
            style={{
              color: isMove ? 'rgb(255, 255, 255)' : 'rgb(217, 217, 217)',
              background: isMove ? 'rgb(217, 42, 51)' : 'rgb(245, 245, 245)',
              border: !isMove ? '1px solid rgb(217, 217, 217)' : 'none',
              width: 24,
              height: 24
            }}
          >
            <span role='img' aria-label='arrow-up' className='anticon anticon-arrow-up'>
              <svg
                viewBox='64 64 896 896'
                focusable='false'
                data-icon='arrow-up'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default MoveUpButton
