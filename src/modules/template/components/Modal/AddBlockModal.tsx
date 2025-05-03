import { Col, Modal, Row, Anchor, Typography, Space, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { blockIconList, menuBlockList } from '@/modules/template/core/config/columns/menu-block-list'
import useAnchorScroll from '@/modules/template/hooks/useHandleScroll'

const { Text } = Typography

type AddBlockModalProps = {
  isModalOpen: boolean
  onClose: (modalName: string, blockId: number) => () => void
  onAddBlock: (blockType: string, count: number) => () => void
}

const AddBlockModal = ({ isModalOpen, onClose, onAddBlock }: AddBlockModalProps) => {
  const { activeAnchor, handleClick } = useAnchorScroll()
  return (
    <Modal
      className='!max-w-full !min-h-screen !w-full !h-screen !p-0 [&_.ant-modal-header]:!text-center [&_.ant-modal-header]:!p-6'
      title={<div className='text-2xl leading-[1.5] font-bold'>ブロック挿入</div>}
      open={isModalOpen}
      closeIcon={<CloseOutlined className='text-3xl' />}
      onCancel={onClose('', 0)}
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
          maxWidth: '1160px'
        },
        content: {
          minHeight: '100vh',
          padding: 0,
          backgroundColor: '#fafafa'
        }
      }}
    >
      <Row>
        <Col span={4}>
          <Anchor
            affix={false}
            items={menuBlockList}
            targetOffset={100}
            offsetTop={100}
            direction='vertical'
            getCurrentAnchor={() => activeAnchor}
            onClick={handleClick}
            className='[&_.ant-anchor::before]:!border-s-4 [&_.ant-anchor-ink]:!w-1 [&_.ant-anchor]:!font-bold [&_.ant-anchor-link]:!py-[6px]'
          />
        </Col>
        <Col 
          className='overflow-auto h-[calc(100vh-168px)]' 
          span={20}
        >
          <div className='flex flex-col gap-8 px-8 [&>div:last-child]:mb-[calc(-320px+100vh)]'>
            {blockIconList.map((block) => (
              <div key={block.id} id={block.anchorKey} data-block-id={block.id}>
                <Space direction='vertical'>
                  <Text className='font-bold !text-lg'>{block.name}</Text>
                  <Space size='small'>
                    {block.icons.map((icon) => (
                      <Button
                        onClick={onAddBlock(icon.type, icon.count)}
                        key={icon.id}
                        className='!p-0 !w-fit !h-fit hover:[&_.thumbnail-header--brand-color]:fill-[rgb(217,42,51)] hover:[&_.thumbnail-body--red1]:fill-[rgb(255,241,240)]'
                        type='link'
                        icon={<icon.component />}
                      />
                    ))}
                  </Space>
                </Space>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Modal>
  )
}

export default AddBlockModal
