type MoveDownButtonProps = {
  isMove: boolean
  onClick?: () => void
  className?: string
}

const MoveDownButton = ({ isMove, onClick, className }: MoveDownButtonProps) => {
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
            <span role='img' aria-label='arrow-down' className='anticon anticon-arrow-down'>
              <svg
                viewBox='64 64 896 896'
                focusable='false'
                data-icon='arrow-down'
                width='1em'
                height='1em'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z' />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}

export default MoveDownButton
