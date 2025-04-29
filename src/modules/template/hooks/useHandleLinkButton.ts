import { useState } from 'react'
import { Form } from 'antd'
import { ChangeBlockType, SelectedColumn } from '@/modules/template/core/types/block.type'

const useHandleLinkButton = (
  selectedColumn: SelectedColumn,
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (event: ChangeBlockType) => void
) => {
  const [isOpen, setIsOpen] = useState(false)
  const [form] = Form.useForm()

  const handleTogglePopover = (isOpen: boolean) => () => {
    form.setFieldsValue({
      urlInput: selectedColumn.parts[0].setting?.href,
      linkType: selectedColumn.parts[0].setting?.href?.startsWith('mailto:')
        ? 'email'
        : selectedColumn.parts[0].setting?.href?.startsWith('tel:')
          ? 'phone'
          : 'URL'
    })
    setIsOpen(isOpen)
  }

  const handleSetLink = () => {
    const type = form.getFieldValue('linkType')
    const value = form.getFieldValue('urlInput')
    onChangeBlock(
      'setting.href',
      selectedColumn.blockId,
      selectedColumn.id,
      selectedColumn.parts[0].id
    )({
      target: {
        value: type === 'email' ? `mailto:${value}` : type === 'phone' ? `tel:${value}` : value
      }
    })
    setIsOpen(false)
    form.resetFields()
  }

  const handleRemoveLink = () => {
    setIsOpen(false)
    onChangeBlock(
      'setting.href',
      selectedColumn.blockId,
      selectedColumn.id,
      selectedColumn.parts[0].id
    )({
      target: {
        value: ''
      }
    })
    form.resetFields()
  }
  return {
    isOpen,
    form,
    onTogglePopover: handleTogglePopover,
    onSetLink: handleSetLink,
    onRemoveLink: handleRemoveLink
  }
}

export default useHandleLinkButton
