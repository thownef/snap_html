import { Form, Select, Space, Button, Input, FormInstance } from 'antd'
import { linkOptions } from '@/modules/template/core/config/select-options'

type LinkEditorFormProps = {
  form: FormInstance
  onTogglePopover: (isOpen: boolean) => () => void
  onSetLink: () => void
  onRemoveLink: () => void
}

const LinkEditorForm = ({ form, onTogglePopover, onSetLink, onRemoveLink }: LinkEditorFormProps) => {
  return (
    <Space className='w-[270px]' direction='vertical' size='small'>
      <Form form={form} layout='horizontal'>
        <Form.Item name='linkType' initialValue='URL' className='!mb-1 w-36'>
          <Select size='small' options={linkOptions} />
        </Form.Item>
        <Form.Item name='urlInput' className=''>
          <Input size='small' placeholder='https://example.com' maxLength={1000} />
        </Form.Item>
        <Space className='w-full justify-between'>
          <Button size='small' onClick={onRemoveLink}>
            解除
          </Button>
          <Space>
            <Button size='small' onClick={onTogglePopover(false)}>
              キャンセル
            </Button>
            <Button size='small' type='primary' onClick={onSetLink}>
              設定
            </Button>
          </Space>
        </Space>
      </Form>
    </Space>
  )
}

export default LinkEditorForm
