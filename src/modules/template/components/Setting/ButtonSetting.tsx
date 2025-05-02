import { Space, Typography, Input, Button, Popover } from 'antd'
import { LinkOutlined } from '@ant-design/icons'
import RadioDesign from '@/shared/design-system/Radio/RadioDesign'
import { formButtonOptions, sizeButtonOptions } from '@/modules/template/core/config/select-options'
import ColorPicker from '@/shared/components/ColorPicker/ColorPicker'
import { ChangeBlockType, SelectedColumn } from '@/modules/template/core/types/block.type'
import { FormButton, SizeButton } from '@/modules/template/core/enums/block.enum'
import LinkEditorForm from '@/modules/template/components/Form/LinkEditorForm'
import useHandleLinkButton from '@/modules/template/hooks/useHandleLinkButton'
import { revertLink } from '@/modules/template/utils'
const { Text, Link } = Typography

type ButtonSettingProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (event: ChangeBlockType) => void
}

const ButtonSetting = ({ selectedColumn, onChangeBlock }: ButtonSettingProps) => {
  const { form, triggerRef, onOpenPopover, onClosePopover, onSetLink, onRemoveLink } = useHandleLinkButton(
    selectedColumn,
    onChangeBlock
  )
  return (
    <Space direction='vertical' size='small' className='w-full px-6 py-4 h-[calc(100%-48px)]'>
      <Space direction='vertical' size='small' className='!mb-4 !w-full'>
        <Text strong>ボタンテキスト</Text>
        <Input
          onChange={onChangeBlock('content', selectedColumn.blockId, selectedColumn.id, selectedColumn.parts[0].id)}
          maxLength={1000}
          value={selectedColumn.parts[0].content}
          className='!w-full !mb-1'
        />
        <Space direction='vertical' size='small' className='max-w-full'>
          <Popover
            content={
              <LinkEditorForm
                form={form}
                onClosePopover={onClosePopover}
                onSetLink={onSetLink('setting.href')}
                onRemoveLink={onRemoveLink('setting.href')}
              />
            }
            trigger='click'
            placement='topLeft'
            onOpenChange={onOpenPopover(selectedColumn.parts[0].setting?.href || '')}
          >
            <Button ref={triggerRef} icon={<LinkOutlined />} className='text-center'>
              リンク設定
            </Button>
          </Popover>
          {selectedColumn.parts[0].setting?.href ? (
            <Link underline href={selectedColumn.parts[0].setting?.href} target='_blank'>
              {revertLink(selectedColumn.parts[0].setting?.href)}
            </Link>
          ) : (
            <Text type='secondary' className='text-neutral-300'>
              （未設定）
            </Text>
          )}
        </Space>
      </Space>

      <Space direction='vertical' size='small' className='!mb-4 !w-full'>
        <Text strong>形状</Text>
        <RadioDesign
          value={selectedColumn.parts[0].setting?.form || FormButton.CIRCLE}
          options={formButtonOptions}
          onChange={onChangeBlock(
            'setting.form',
            selectedColumn.blockId,
            selectedColumn.id,
            selectedColumn.parts[0].id
          )}
          className='[&_.ant-radio-button-wrapper]:w-[95px] [&_.ant-radio-button-wrapper]:text-center'
        />
      </Space>

      <Space direction='vertical' size='small' className='!mb-4 !w-full'>
        <Text strong>ボタンサイズ</Text>
        <RadioDesign
          value={selectedColumn.parts[0].setting?.size || SizeButton.MIDDLE}
          options={sizeButtonOptions}
          onChange={onChangeBlock(
            'setting.size',
            selectedColumn.blockId,
            selectedColumn.id,
            selectedColumn.parts[0].id
          )}
          className='[&_.ant-radio-button-wrapper]:w-[95px] [&_.ant-radio-button-wrapper]:text-center'
        />
      </Space>

      <Space direction='vertical' size='small' className='!mb-4 !w-full'>
        <Text strong>カラー</Text>
        <ColorPicker
          placement='top'
          value={selectedColumn.parts[0].setting?.color || 'rgb(255, 255, 255)'}
          onChange={onChangeBlock(
            'setting.color',
            selectedColumn.blockId,
            selectedColumn.id,
            selectedColumn.parts[0].id
          )}
          label='文字色'
        />
        <ColorPicker
          placement='top'
          value={selectedColumn.parts[0].setting?.backgroundColor || 'rgb(47, 84, 235)'}
          onChange={onChangeBlock(
            'setting.backgroundColor',
            selectedColumn.blockId,
            selectedColumn.id,
            selectedColumn.parts[0].id
          )}
          label='ボタン背景色'
        />
      </Space>
    </Space>
  )
}

export default ButtonSetting
