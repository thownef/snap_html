import { useCallback } from 'react'
import { Form, Select, Space, Button, Input, FormInstance } from 'antd'
import { linkOptions } from '@/modules/template/core/config/select-options'
import { validateLink } from '@/modules/template/utils'

type LinkEditorFormProps = {
  form: FormInstance
  onClosePopover: () => void
  onSetLink: () => void
  onRemoveLink: () => void
}

const LinkEditorForm = ({ form, onClosePopover, onSetLink, onRemoveLink }: LinkEditorFormProps) => {
  const handleResetInput = useCallback(
    (changedValues: any) => {
      if ('linkType' in changedValues) {
        form.setFieldValue('urlInput', '')
      }
    },
    [form]
  )
  return (
    <Space className='w-[270px]' direction='vertical' size='small'>
      <Form form={form} onValuesChange={handleResetInput} layout='horizontal'>
        <Form.Item name='linkType' initialValue='URL' className='!mb-1 w-36'>
          <Select size='small' options={linkOptions} />
        </Form.Item>
        <Form.Item
          name='urlInput'
          className=''
          dependencies={['linkType']}
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) return Promise.resolve()

                const linkType = getFieldValue('linkType')
                const error = validateLink(value, linkType)

                return error ? Promise.reject(error.message) : Promise.resolve()
              }
            })
          ]}
        >
          <Input size='small' placeholder='https://example.com' maxLength={1000} />
        </Form.Item>
        <Space className='w-full justify-between'>
          <Button size='small' onClick={onRemoveLink}>
            解除
          </Button>
          <Space>
            <Button size='small' onClick={onClosePopover}>
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
