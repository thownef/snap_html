type BlockAddButtonProps = {
  blockId: number
}

const AddBlockButton = ({ blockId }: BlockAddButtonProps) => (
  <div className='mail-block-add-button'>
    <div title='ブロック追加'>
      <button
        data-block-id={blockId}
        type='button'
        className='ant-btn css-p8b6i ant-btn-default sc-abc88c93-0 dsNwsu js-add-block'
        style={{ padding: 0, border: 0 }}
      >
        <div className='ant-space css-p8b6i ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small'>
          <div className='ant-space-item'>
            <div
              className='button-icon button-icon--filled'
              style={{
                color: 'rgb(255, 255, 255)',
                background: 'rgb(217, 42, 51)',
                width: 32,
                height: 32
              }}
            >
              <span role='img' aria-label='plus' className='anticon anticon-plus'>
                <svg
                  viewBox='64 64 896 896'
                  focusable='false'
                  data-icon='plus'
                  width='1em'
                  height='1em'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path d='M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' />
                  <path d='M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z' />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
)

export default AddBlockButton
