import { useCallback, useRef } from 'react'
import { Form } from 'antd'
import { ChangeBlockType, SelectedColumn } from '@/modules/template/core/types/block.type'
import { convertLink, revertLink } from '@/modules/template/utils'

const useHandleLinkButton = (
  selectedColumn: SelectedColumn,
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (event: ChangeBlockType) => void
) => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [form] = Form.useForm()

  const handleOpenPopover = (href: string) => {
    return (open: boolean) => {
      if (open) {
        form.setFieldsValue({
          urlInput: revertLink(href),
          linkType: href?.startsWith('mailto:') ? 'email' : href?.startsWith('tel:') ? 'phone' : 'URL'
        })
      } else {
        form.resetFields()
      }
    }
  }

  const handleClosePopover = useCallback(() => {
    form.resetFields()
    triggerRef.current?.click()
  }, [form])

  const handleSetLink = useCallback(
    (key: string) => {
      return () => {
        const type = form.getFieldValue('linkType')
        const value = form.getFieldValue('urlInput')
        onChangeBlock(
          key,
          selectedColumn.blockId,
          selectedColumn.id,
          selectedColumn.parts[0].id
        )({
          target: {
            value: convertLink(value, type)
          }
        })
        handleClosePopover()
      }
    },
    [form, selectedColumn]
  )

  const handleRemoveLink = useCallback(
    (key: string) => {
      return () => {
        onChangeBlock(
          key,
          selectedColumn.blockId,
          selectedColumn.id,
          selectedColumn.parts[0].id
        )({
          target: {
            value: ''
          }
        })
        handleClosePopover()
      }
    },
    [selectedColumn]
  )

  return {
    triggerRef,
    form,
    onOpenPopover: handleOpenPopover,
    onClosePopover: handleClosePopover,
    onSetLink: handleSetLink,
    onRemoveLink: handleRemoveLink
  }
}

export default useHandleLinkButton
