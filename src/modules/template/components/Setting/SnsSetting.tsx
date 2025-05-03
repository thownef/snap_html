import { Space, Button, Typography, Tooltip } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import RadioDesign from '@/shared/design-system/Radio/RadioDesign'
import { positionIconList, sizeIconList } from '@/modules/template/core/config/columns/sns-list'
import { SelectedColumn } from '@/modules/template/core/types/block.type'
import SnsSettingTable from '@/modules/template/components/Table/SnsSettingTable'
import useHandleModal from '@/shared/hooks/useHandleModal'
import AddSnsModal from '@/modules/template/components/Modal/AddSnsModal'
import useHandleDrag from '@/modules/template/hooks/useHandleDrag'
import { useCallback } from 'react'
import { getSnsIcon } from '@/shared/utils'

const { Text } = Typography

type SnsSettingProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (keyChange: string, blockId: number, columnId: number, partId: number) => (value: any) => void
}

const SnsSetting = ({ selectedColumn, onChangeBlock }: SnsSettingProps) => {
  const { dataSource, onSetDataSource, onDragEnd, onDelete } = useHandleDrag(
    selectedColumn.icon,
    onChangeBlock,
    selectedColumn.blockId,
    selectedColumn.columnId,
    selectedColumn.id
  )
  const { modalName, onOpenModal, onCloseModal } = useHandleModal()

  const handleAddSns = useCallback(
    (type: string, label: string) => {
      return () => {
        const newIcon = [
          ...(selectedColumn.icon || []),
          {
            type: type,
            originalHref: '',
            convertedHref: ''
          }
        ]
        onSetDataSource([
          ...dataSource,
          {
            id: Date.now(),
            key: dataSource.length,
            sns: label,
            icon: getSnsIcon(type),
            originalHref: '',
            convertedHref: '',
            type: type
          }
        ])
        onChangeBlock('icon', selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)(newIcon)
        onCloseModal()
      }
    },
    [dataSource, selectedColumn]
  )

  return (
    <>
      <Space direction='vertical' className='px-6 py-4 w-full'>
        <SnsSettingTable
          dataSource={dataSource}
          selectedColumn={selectedColumn}
          onSetDataSource={onSetDataSource}
          onDragEnd={onDragEnd}
          onDelete={onDelete}
          onChangeBlock={onChangeBlock}
        />
        <Tooltip placement='topLeft' title='追加できるSNSアイコンは8個までです。'>
          <Button
            onClick={dataSource.length < 8 ? onOpenModal('addSns') : undefined}
            icon={<PlusOutlined />}
            className='!mb-4 !text-center'
          >
            SNS追加
          </Button>
        </Tooltip>

        <Space direction='vertical' size='small' className='!mb-4 !w-full'>
          <Text strong>アイコンサイズ</Text>
          <RadioDesign
            value={selectedColumn.setting.size || 'middle'}
            options={sizeIconList}
            onChange={onChangeBlock(
              'setting.size',
              selectedColumn.blockId,
              selectedColumn.columnId,
              selectedColumn.id
            )}
            className='[&_.ant-radio-button-wrapper]:w-[95px] [&_.ant-radio-button-wrapper]:text-center'
          />
        </Space>

        <Space direction='vertical' size='small' className='!mb-4 !w-full'>
          <Text strong>アイコン位置</Text>
          <RadioDesign
            value={selectedColumn.setting.align || 'center'}
            options={positionIconList}
            onChange={onChangeBlock(
              'setting.align',
              selectedColumn.blockId,
              selectedColumn.columnId,
              selectedColumn.id
            )}
            className='[&_.ant-radio-button-wrapper]:w-[95px] [&_.ant-radio-button-wrapper]:text-center'
          />
        </Space>
      </Space>
      <AddSnsModal isOpen={modalName === 'addSns'} onClose={onCloseModal} onAddSns={handleAddSns} />
    </>
  )
}

export default SnsSetting
