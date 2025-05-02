import { Modal, Space } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { snsListBasic, snsListWhite } from '@/modules/template/core/config/columns/sns-list'
import { getSnsIcon } from '@/shared/utils'

type AddSnsModalProps = {
  isOpen: boolean
  onClose: () => void
  onAddSns: (type: string, label: string) => () => void
}

const AddSnsModal = ({ isOpen, onClose, onAddSns }: AddSnsModalProps) => {
  return (
    <Modal
      className='!max-w-full !min-h-screen !w-full !h-screen !p-0 [&_.ant-modal-header]:!text-center [&_.ant-modal-header]:!p-6'
      title={<div className='text-2xl leading-[1.5] font-bold'>SNS追加</div>}
      open={isOpen}
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
          padding: '0 24px',
          marginTop: '0',
          marginBottom: '0'
        },
        body: {
          overflow: 'hidden',
          padding: '0 24px',
          margin: '64px auto',
          maxWidth: '960px'
        },
        content: {
          minHeight: '100vh',
          padding: '20px 24px'
        }
      }}
    >
      <div className='flex items-center justify-center'>
        <Space direction='vertical' size={16}>
          <Space size={16} align='center'>
            {snsListBasic.map((item) => (
              <div key={item.value} className='leading-none'>
                <img
                  src={getSnsIcon(item.value)}
                  width={60}
                  height={60}
                  alt={item.label}
                  className='cursor-pointer'
                  onClick={onAddSns(item.value, item.label)}
                />
              </div>
            ))}
          </Space>

          <Space size={16} align='center' className=' '>
            {snsListWhite.map((item) => (
              <div key={item.value} className='leading-none bg-neutral-200'>
                <img
                  src={getSnsIcon(item.value)}
                  width={60}
                  height={60}
                  alt={item.label}
                  className='cursor-pointer'
                  onClick={onAddSns(item.value, item.label)}
                />
              </div>
            ))}
          </Space>
        </Space>
      </div>
    </Modal>
  )
}

export default AddSnsModal
