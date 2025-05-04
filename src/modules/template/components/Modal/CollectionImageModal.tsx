import { Modal, Upload, Button, Checkbox, Typography, Divider, FloatButton, Space, Tooltip } from 'antd'
import { CloseOutlined, UploadOutlined } from '@ant-design/icons'
import CollectionImageCard from '@/modules/template/components/Card/CollectionImageCard'
import { initData } from '@/modules/template/core/config/columns/collection-list'

const { Text } = Typography

type CollectionImageModalProps = {
  open: boolean
  onClose: () => void
}

const CollectionImageModal = ({ open, onClose }: CollectionImageModalProps) => {
  return (
    <Modal
      className='!max-w-full !min-h-screen !w-full !h-screen !p-0 [&_.ant-modal-header]:!text-center'
      title={<div className='text-2xl leading-[1.5] font-bold'>画像ライブラリ </div>}
      open={open}
      closeIcon={<CloseOutlined className='text-3xl' />}
      onCancel={onClose}
      centered
      footer={null}
      styles={{
        header: {
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#fff',
          padding: '24px',
          marginTop: '-20px'
        },
        body: {
          overflow: 'hidden',
          padding: '0',
          margin: 'auto',
          maxWidth: '100%'
        },
        content: {
          minHeight: '100vh'
        }
      }}
    >
      <div role='presentation' tabIndex={0}>
        <div>
          <div role='presentation' tabIndex={0}>
            <Upload
              className='!h-0 block'
              accept='image/jpeg,.jpg,.JPG,.jpeg,.JPEG,image/png,.png,.PNG,image/gif,.gif,.GIF'
              multiple
              showUploadList={false}
              style={{ display: 'none' }}
            >
              <FloatButton className='left-6 top-[85px]' type='primary' icon={<UploadOutlined />}></FloatButton>
            </Upload>
          </div>
          <div className='flex justify-end items-center gap-6 pt-2'>
            <Checkbox className='ant-checkbox-wrapper sc-dd3e1624-0 gQQSxR css-sq2mzf'>全選択</Checkbox>
            <Tooltip placement='topLeft' title='削除するには画像にチェックを入れてください'>
              <Button type='default' className='w-[100px] text-center'>
                <Space size='small'>
                  <div className='ant-space-item'>画像削除</div>
                </Space>
              </Button>
            </Tooltip>

            <Text className='!text-xl ml-2'>5 MB / 100 MB</Text>
          </div>
          <Divider className='!mt-[7px]' />
          <Space className='w-full' size='small' direction='horizontal' wrap>
            {initData.map((item) => (
              <CollectionImageCard key={item.id} item={item} />
            ))}
          </Space>
        </div>
      </div>
    </Modal>
  )
}

export default CollectionImageModal
