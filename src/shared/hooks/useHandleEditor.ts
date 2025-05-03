import { useCallback, useEffect, useRef, useState } from 'react'
import { Form } from 'antd'
import cn from 'classnames'
import { EditorEvents, useEditor } from '@tiptap/react'
import Color from '@tiptap/extension-color'
import Link from '@tiptap/extension-link'
import TextAlign from '@tiptap/extension-text-align'
import { TextStyle } from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import { SelectedColumn } from '@/modules/template/core/types/block.type'
import { AggregationColor } from 'antd/es/color-picker/color'
import { FontSize } from '@/shared/lib/FontSize'
import { LineHeight } from '@/shared/lib/LineHeight'
import { settingKeys, SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import { isTransparent } from '@/shared/utils'

const useHandleEditor = (
  settings: SettingKeys,
  selectedColumn: SelectedColumn,
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (value: EditorEvents['update']) => void
) => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [form] = Form.useForm()
  const [fontSize, setFontSize] = useState('16')
  const [lineHeight, setLineHeight] = useState('1.5')
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        hardBreak: {
          keepMarks: true
        }
      }),
      Underline,
      TextStyle,
      Color,
      FontSize,
      LineHeight,
      Link.configure({
        openOnClick: false
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Highlight.configure({ multicolor: true })
    ],
    content: selectedColumn.content,
    onSelectionUpdate: ({ editor }) => {
      const currentFontSize = editor.getAttributes('textStyle').fontSize
      if (currentFontSize) {
        setFontSize(currentFontSize)
      } else {
        setFontSize('16')
      }

      const currentLineHeight = editor.getAttributes('textStyle').lineHeight
      if (currentLineHeight) {
        setLineHeight(currentLineHeight)
      } else {
        setLineHeight('1.5')
      }
    },
    editorProps: {
      attributes: {
        class: cn(
          'custom-link h-full px-[11px] py-1 border border-[#d9d9d9] rounded-[6px] [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-[40px] [&_ol]:pl-[40px] [&_ul]:my-4 [&_ol]:my-4 text-[#262626] overflow-y-auto overflow-x-hidden focus:outline-none focus:!border-[rgb(230,80,83)] [&_a]:!underline'
        ),
        style: `background-color: ${!isTransparent(selectedColumn.blockSetting.backgroundColor) ? selectedColumn.blockSetting.backgroundColor : !isTransparent(settings[settingKeys.BACKGROUND]) ? settings[settingKeys.BACKGROUND] : 'white'};`
      },
      handleKeyDown: (view, event) => {
        if (event.key === 'Enter') {
          const { state } = view
          if (!state.selection.empty) {
            editor?.chain().focus().deleteSelection().insertContent('<br/>').run()
            return true
          }
        }
        return false
      }
    },
    onUpdate: onChangeBlock('content', selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)
  })

  const handleOpenPopover = useCallback(
    (open: boolean) => {
      if (open) {
        const attrs = editor?.getAttributes('link')
        const href = attrs?.href || ''
        form.setFieldsValue({
          urlInput: href.replace(/^mailto:|^tel:/, ''),
          linkType: href.startsWith('mailto:') ? 'email' : href.startsWith('tel:') ? 'phone' : 'URL'
        })
      } else {
        form.resetFields()
      }
    },
    [form, editor]
  )

  const handleClosePopover = useCallback(() => {
    form.resetFields()
    triggerRef.current?.click()
  }, [form])

  const handleClearFormat = useCallback(() => {
    editor?.chain().focus().unsetAllMarks().run()
  }, [editor])

  const handleSetFontSize = useCallback(
    (value: string) => {
      setFontSize(value)
      editor?.chain().focus().setFontSize(value).run()
    },
    [editor]
  )

  const handleSetLineHeight = useCallback(
    (value: string) => {
      setLineHeight(value)
      editor?.chain().focus().setLineHeight(value).run()
    },
    [editor]
  )

  const handleToggleBold = useCallback(() => {
    editor?.chain().focus().toggleBold().run()
  }, [editor])

  const handleToggleUnderline = useCallback(() => {
    editor?.chain().focus().toggleUnderline().run()
  }, [editor])

  const handleToggleStrike = useCallback(() => {
    editor?.chain().focus().toggleStrike().run()
  }, [editor])

  const handleSetColor = useCallback(
    (color: AggregationColor) => {
      editor?.chain().focus().setColor(color.toHexString()).run()
    },
    [editor]
  )

  const handleToggleHighlight = useCallback(
    (color: AggregationColor) => {
      editor?.chain().focus().toggleHighlight({ color: color.toHexString() }).run()
    },
    [editor]
  )

  const handleTogglePopover = useCallback(
    (isOpen: boolean) => {
      return () => {
        if (isOpen) {
          const attrs = editor?.getAttributes('link')
          if (attrs?.href) {
            form.setFieldValue('urlInput', attrs.href.replace('mailto:', '').replace('tel:', ''))
            form.setFieldValue(
              'linkType',
              attrs.href.startsWith('mailto:') ? 'email' : attrs.href.startsWith('tel:') ? 'phone' : 'URL'
            )
          }
        } else {
          form.resetFields()
        }
      }
    },
    [editor, form]
  )

  const handleSetLink = useCallback(() => {
    const url = form.getFieldValue('urlInput')
    const linkType = form.getFieldValue('linkType')
    if (url) {
      if (linkType === 'URL') {
        editor?.chain().focus().setLink({ href: url }).run()
      } else if (linkType === 'email') {
        editor
          ?.chain()
          .focus()
          .setLink({ href: `mailto:${url}` })
          .run()
      } else if (linkType === 'phone') {
        editor
          ?.chain()
          .focus()
          .setLink({ href: `tel:${url}` })
          .run()
      }
    }
    handleClosePopover()
  }, [editor, form])

  const handleRemoveLink = useCallback(() => {
    editor?.chain().focus().unsetLink().run()
    handleClosePopover()
  }, [editor])

  const handleSetTextAlign = useCallback(
    (align: string) => {
      return () => {
        editor?.chain().focus().setTextAlign(align).run()
      }
    },
    [editor]
  )

  const handleToggleBulletList = useCallback(() => {
    editor?.chain().focus().toggleBulletList().run()
  }, [editor])

  const handleToggleOrderedList = useCallback(() => {
    editor?.chain().focus().toggleOrderedList().run()
  }, [editor])

  const handleUndo = useCallback(() => {
    editor?.chain().focus().undo().run()
  }, [editor])

  const handleRedo = useCallback(() => {
    editor?.chain().focus().redo().run()
  }, [editor])

  useEffect(() => {
    editor?.commands.setContent(selectedColumn.content || '')
  }, [editor, selectedColumn.blockId, selectedColumn.id])

  return {
    editor,
    triggerRef,
    form,
    fontSize,
    lineHeight,
    onOpenPopover: handleOpenPopover,
    onClosePopover: handleClosePopover,
    onSetLink: handleSetLink,
    onRemoveLink: handleRemoveLink,
    onTogglePopover: handleTogglePopover,
    onSetFontSize: handleSetFontSize,
    onSetLineHeight: handleSetLineHeight,
    onToggleBold: handleToggleBold,
    onToggleUnderline: handleToggleUnderline,
    onToggleStrike: handleToggleStrike,
    onSetColor: handleSetColor,
    onToggleHighlight: handleToggleHighlight,
    onSetTextAlign: handleSetTextAlign,
    onToggleBulletList: handleToggleBulletList,
    onToggleOrderedList: handleToggleOrderedList,
    onUndo: handleUndo,
    onRedo: handleRedo,
    onClearFormat: handleClearFormat
  }
}

export default useHandleEditor
