import { Button, Col, Divider, Row, Select, Popover, ColorPicker, Space, Typography } from 'antd'
import {
  BoldOutlined,
  UnderlineOutlined,
  StrikethroughOutlined,
  AlignLeftOutlined,
  AlignCenterOutlined,
  AlignRightOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  LinkOutlined,
  UploadOutlined,
  AppstoreOutlined
} from '@ant-design/icons'
import cn from 'classnames'
import useHandleEditor from '@/shared/hooks/useHandleEditor'
import { fontSizeOptions } from '@/modules/template/core/config/columns/font-size-list'
import { lineHeightOptions } from '@/modules/template/core/config/columns/line-height-list'
import { colorList } from '@/modules/template/core/config/columns/color-list'
import HighlightColorIcon from '@/modules/template/components/Icon/HighlightColorIcon'
import { EditorContent } from '@tiptap/react'
import { isTransparent } from '@/shared/utils'
import { SettingKeys, settingKeys } from '@/modules/template/hooks/useHandleSetting'
import FontColorIcon from '@/modules/template/components/Icon/FontColorIcon'
import LinkEditorForm from '@/modules/template/components/Form/LinkEditorForm'
import UndoIcon from '@/modules/template/components/Icon/UndoIcon'
import RedoIcon from '@/modules/template/components/Icon/RedoIcon'
import { ChangeBlockType } from '@/modules/template/core/types/block.type'
import { SelectedColumn } from '@/modules/template/core/types/block.type'
const { Text } = Typography

type TextOverlayPartSettingProps = {
  settings: SettingKeys
  selectedColumn: SelectedColumn
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (value: ChangeBlockType) => void
}

const TextOverlayPartSetting = ({ settings, selectedColumn, onChangeBlock }: TextOverlayPartSettingProps) => {
  const {
    editor,
    triggerRef,
    form,
    fontSize,
    lineHeight,
    onOpenPopover,
    onClosePopover,
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
  } = useHandleEditor(settings, selectedColumn, onChangeBlock)

  if (!editor) {
    return null
  }

  return (
    <>
      <Space className='px-6 pt-4 w-full' direction='vertical'>
        <Space direction='vertical' size='small' className='mb-4 w-full'>
          <div className='flex'>
            <div className='w-56 h-56 flex items-center bg-[rgb(245,245,245)] mr-2 p-0 relative rounded-none border-none'>
              <Space align='center' size='small'>
                <div className='w-56 h-56 flex items-center'>
                  <img
                    src='https://img.bme.jp/img/htmlmail_v3/limited_design/gourmet/01_b.png'
                    alt='現在選択されている画像'
                  />
                </div>
              </Space>
            </div>
            <div>
              <div
                // onClick={handleImageClick}
                className='hover:border-[rgb(230,80,83)] w-[195px] h-[184px] mb-2 flex justify-center items-center relative text-center bg-[rgba(38,38,38,0.02)] border border-dashed border-[rgb(217,217,217)] rounded-lg cursor-pointer transition-[border-color] duration-200'
              >
                <div role='presentation'>
                  <input
                    // ref={fileInputRef}
                    accept='image/jpeg,.jpg,.JPG,.jpeg,.JPEG,image/png,.png,.PNG,image/gif,.gif,.GIF'
                    type='file'
                    data-testid='imageSingleUpload'
                    style={{ display: 'none' }}
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        console.log('Selected file:', file)
                      }
                    }}
                  />
                  <div className='text-5xl text-[rgb(217,42,51)] py-3'>
                    <UploadOutlined />
                  </div>
                  <Text className='font-bold'>画像アップロード</Text>
                  <br />
                  <Text className='!text-[11px] !text-[rgb(140,140,140)]'>ファイル形式：jpg / gif / png</Text>
                  <br />
                  <Text className='!text-[11px] !text-[rgb(140,140,140)]'>容量：3 MB以下 (1ファイル)</Text>
                  <br />
                  <Text className='!text-[11px] !text-[rgb(140,140,140)]'>推奨サイズ：300 KB以下 (1ファイル)</Text>
                </div>
              </div>

              <Button onClick={() => {}} icon={<AppstoreOutlined />} className='w-[195px] text-center'>
                <Space>画像ライブラリ</Space>
              </Button>
            </div>
          </div>
        </Space>
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
            <Button size='small' onClick={onClearFormat}>
              書式クリア
            </Button>
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
                content={
                  <LinkEditorForm
                    form={form}
                    onClosePopover={onClosePopover}
                    onSetLink={onSetLink}
                    onRemoveLink={onRemoveLink}
                  />
                }
                trigger='click'
                placement='topLeft'
                onOpenChange={onOpenPopover}
              >
                <Button
                  ref={triggerRef}
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
        <EditorContent
          editor={editor}
          className={cn('h-full w-full mt-2 text-bas', {
            '[&_a]:!text-[color:var(--link-color)]': isTransparent(settings[settingKeys.BACKGROUND])
          })}
          style={
            isTransparent(settings[settingKeys.BACKGROUND])
              ? ({ '--link-color': settings[settingKeys.LINK] } as React.CSSProperties)
              : ({ color: 'rgb(47,84,235) !important' } as React.CSSProperties)
          }
        />
      </div>
    </>
  )
}

export default TextOverlayPartSetting
