import { Space, Button, Select, Row, Col, Divider, ColorPicker, Popover } from 'antd'
import {
  BoldOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  LinkOutlined
} from '@ant-design/icons'
import { EditorContent, EditorEvents } from '@tiptap/react'
import { fontSizeOptions } from '@/modules/template/core/config/columns/font-size-list'
import { lineHeightOptions } from '@/modules/template/core/config/columns/line-height-list'
import { colorList } from '@/modules/template/core/config/columns/color-list'
import FontColorIcon from '@/modules/template/components/Icon/FontColorIcon'
import HighlightColorIcon from '@/modules/template/components/Icon/HighlightColorIcon'
import UndoIcon from '@/modules/template/components/Icon/UndoIcon'
import RedoIcon from '@/modules/template/components/Icon/RedoIcon'
import { SelectedColumn } from '@/modules/template/core/types/block.type'
import useHandleEditor from '@/shared/hooks/useHandleEditor'
import LinkEditorForm from '@/modules/template/components/Form/LinkEditorForm'

type TextSettingProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (keyChange: string, blockId: number, columnId: number) => (value: EditorEvents["update"]) => void
}

const TextSetting = ({ selectedColumn, onChangeBlock }: TextSettingProps) => {
  const {
    editor,
    isOpen,
    form,
    fontSize,
    lineHeight,
    onTogglePopover,
    onSetLink,
    onRemoveLink,
    onSetFontSize,
    onSetLineHeight,
    onToggleBold,
    onToggleUnderline,
    onToggleStrike,
    onSetColor,
    onToggleHighlight,
    onSetTextAlign,
    onToggleBulletList,
    onToggleOrderedList,
    onUndo,
    onRedo,
    onClearFormat
  } = useHandleEditor(selectedColumn, onChangeBlock)

  if (!editor) {
    return null
  }

  return (
    <>
      <Space className='px-6 pt-4 w-full' direction='vertical'>
        <Row justify='space-between' align='middle'>
          <Col>
            <Space>
              <span>サイズ</span>
              <Select
                className='w-[70px]'
                size='small'
                value={fontSize}
                onChange={onSetFontSize}
                options={fontSizeOptions}
              />
              <span>行間</span>
              <Select
                className='w-[70px]'
                size='small'
                value={lineHeight}
                onChange={onSetLineHeight}
                options={lineHeightOptions}
              />
            </Space>
          </Col>
          <Col>
            <Button size='small' onClick={onClearFormat}>書式クリア</Button>
          </Col>
        </Row>
        <Divider className='!m-0' />
        <Row justify='space-between'>
          <Col>
            <Space>
              <Button
                size='small'
                icon={<BoldOutlined />}
                onClick={onToggleBold}
                className={editor.isActive('bold') ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
              <Button
                size='small'
                icon={<UnderlineOutlined />}
                onClick={onToggleUnderline}
                className={editor.isActive('underline') ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
              <Button
                size='small'
                icon={<StrikethroughOutlined />}
                onClick={onToggleStrike}
                className={editor.isActive('strike') ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
              <ColorPicker size='small' format='hex' presets={colorList} onChange={onSetColor}>
                <Button size='small' className='!rounded-full !p-1'>
                  <FontColorIcon color={editor.getAttributes('textStyle').color} />
                </Button>
              </ColorPicker>
              <ColorPicker size='small' format='hex' presets={colorList} onChange={onToggleHighlight}>
                <Button className='!rounded-full !p-1' size='small' title='ハイライト色'>
                  <HighlightColorIcon color={editor.getAttributes('highlight').color} />
                </Button>
              </ColorPicker>
              <div className='h-6 mx-0 border-l border-[rgb(240,240,240)] border-r-0' />
              <Popover
                open={isOpen}
                content={
                  <LinkEditorForm
                    form={form}
                    onTogglePopover={onTogglePopover}
                    onSetLink={onSetLink}
                    onRemoveLink={onRemoveLink}
                  />
                }
                trigger='click'
                placement='topLeft'
                onOpenChange={onTogglePopover(!isOpen)}
              >
                <Button
                  size='small'
                  icon={<LinkOutlined />}
                  className={editor?.isActive('link') ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
                />
              </Popover>
              <div className='h-6 mx-0 border-l border-[rgb(240,240,240)] border-r-0' />
              <Button
                size='small'
                icon={<AlignLeftOutlined />}
                onClick={onSetTextAlign('left')}
                className={editor.isActive({ textAlign: 'left' }) ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
              <Button
                size='small'
                icon={<AlignCenterOutlined />}
                onClick={onSetTextAlign('center')}
                className={editor.isActive({ textAlign: 'center' }) ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
              <Button
                size='small'
                icon={<AlignRightOutlined />}
                onClick={onSetTextAlign('right')}
                className={editor.isActive({ textAlign: 'right' }) ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
              <div className='h-6 mx-0 border-l border-[rgb(240,240,240)] border-r-0' />
              <Button
                size='small'
                icon={<UnorderedListOutlined />}
                onClick={onToggleBulletList}
                className={editor.isActive('bulletList') ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
              <Button
                size='small'
                icon={<OrderedListOutlined />}
                onClick={onToggleOrderedList}
                className={editor.isActive('orderedList') ? '!bg-gray-100 !rounded-full' : '!rounded-full'}
              />
            </Space>
          </Col>
          <Col>
            <Space>
              <Button
                size='small'
                icon={<UndoIcon />}
                onClick={onUndo}
                disabled={!editor.can().undo()}
                className='!rounded-full'
              />
              <Button
                size='small'
                icon={<RedoIcon />}
                onClick={onRedo}
                disabled={!editor.can().redo()}
                className='!rounded-full'
              />
            </Space>
          </Col>
        </Row>
      </Space>
      <div className='h-[calc(100vh-255px)] p-0 px-6 mt-2 text-base leading-normal'>
        <EditorContent editor={editor} className='h-full w-full mt-2 text-base' />
      </div>
    </>
  )
}

export default TextSetting
