import { createContext, useCallback, useContext } from 'react'
import { Space, Table, Button, Typography, Popover } from 'antd'
import { DeleteOutlined, LinkOutlined, MenuOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { SelectedColumn } from '@/modules/template/core/types/block.type'
import { SnsList } from '@/modules/template/core/types/sns.type'
import useHandleLinkButton from '@/modules/template/hooks/useHandleLinkButton'
import LinkEditorForm from '@/modules/template/components/Form/LinkEditorForm'
import { convertLink, revertLink } from '@/modules/template/utils'

const { Text, Link } = Typography

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string
}

type RowContextProps = {
  setActivatorNodeRef?: (element: HTMLElement | null) => void
  listeners?: SyntheticListenerMap
}

type SnsSettingTableProps = {
  selectedColumn: SelectedColumn
  dataSource: SnsList[]
  onSetDataSource: (dataSource: SnsList[]) => void
  onDragEnd: ({ active, over }: DragEndEvent) => void
  onDelete: (id: number) => () => void
  onChangeBlock: (keyChange: string, blockId: number, columnId: number, partId: number) => (value: any) => void
}

const SnsSettingTable = ({
  selectedColumn,
  dataSource,
  onSetDataSource,
  onDragEnd,
  onDelete,
  onChangeBlock
}: SnsSettingTableProps) => {
  const { form, triggerRef, onOpenPopover, onClosePopover, onSetLink, onRemoveLink } = useHandleLinkButton(
    selectedColumn,
    onChangeBlock
  )
  const RowContext = createContext<RowContextProps>({})

  const DragHandle = () => {
    const { setActivatorNodeRef, listeners } = useContext(RowContext)
    return (
      <Button
        type='text'
        size='small'
        icon={<MenuOutlined />}
        style={{ cursor: 'pointer' }}
        ref={setActivatorNodeRef}
        {...listeners}
      />
    )
  }

  const Row = ({ children, ...props }: RowProps) => {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef, transform, transition, isDragging } = useSortable({
      id: props['data-row-key']
    })

    const style: React.CSSProperties = {
      ...props.style,
      transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : '',
      transition,
      ...(isDragging ? { position: 'relative', zIndex: 9999 } : {})
    }

    return (
      <RowContext.Provider value={{ setActivatorNodeRef, listeners }}>
        <tr {...props} ref={setNodeRef} style={style} {...attributes}>
          {children}
        </tr>
      </RowContext.Provider>
    )
  }

  const columns = [
    {
      key: 'key',
      width: 32,
      className: 'min-w-[32px] max-w-[32px] text-center p-0',
      render: () => <DragHandle />
    },
    {
      title: <Text strong>SNS</Text>,
      dataIndex: 'sns',
      width: 140,
      className: 'min-w-[140px]',
      render: (text: string, record: SnsList) => (
        <Space>
          <img
            src={record.icon}
            className={cn('w-8 h-8 align-middle leading-none', {
              '!bg-neutral-200': record.type.includes('White')
            })}
            alt={text}
          />
          <Text className='whitespace-nowrap'>{text}</Text>
        </Space>
      )
    },
    {
      title: <Text strong>URL</Text>,
      dataIndex: 'originalHref',
      width: 260,
      className: 'min-w-[260px]',
      render: (text: string, record: SnsList, index: number) => (
        <div className='flex items-center justify-between'>
          <div className='w-[calc(100%-24px)]'>
            <Space className='w-full [&_.ant-space-item:nth-child(2)]:w-full [&_.ant-space-item:nth-child(2)]:max-w-[calc(100%-132px)]'>
              <Popover
                content={
                  <LinkEditorForm
                    form={form}
                    onClosePopover={onClosePopover}
                    onSetLink={handleSetLink(record.id, index)}
                    onRemoveLink={handleRemoveLink(record.id, index)}
                  />
                }
                trigger='click'
                placement='topLeft'
                onOpenChange={onOpenPopover(record.originalHref)}
              >
                <Button ref={triggerRef} icon={<LinkOutlined />} className='text-center'>
                  リンク設定
                </Button>
              </Popover>
              {!text ? (
                <Text className='!text-[#bfbfbf]'>（未設定）</Text>
              ) : (
                <Text ellipsis className='!text-[#2f54eb] !underline'>
                  <Link href={text} target='_blank'>
                    {revertLink(text)}
                  </Link>
                </Text>
              )}
            </Space>
          </div>
          {dataSource.length > 1 && (
            <Button
              onClick={onDelete(record.id)}
              icon={<DeleteOutlined />}
              className='!text-center !rounded-full !p-1 !w-6 !h-6'
            />
          )}
        </div>
      )
    }
  ]

  const handleSetLink = useCallback(
    (id: number, key: number) => {
      return () => {
        onSetDataSource(
          dataSource.map((item) =>
            item.id === id
              ? { ...item, originalHref: convertLink(form.getFieldValue('urlInput'), form.getFieldValue('linkType')) }
              : item
          )
        )
        onSetLink(`icon[${key}].originalHref`)()
      }
    },
    [dataSource, form]
  )

  const handleRemoveLink = useCallback(
    (id: number, key: number) => {
      return () => {
        onSetDataSource(dataSource.map((item) => (item.id === id ? { ...item, originalHref: '' } : item)))
        onRemoveLink(`icon[${key}].originalHref`)()
      }
    },
    [dataSource]
  )

  return (
    <DndContext onDragEnd={onDragEnd}>
      <SortableContext items={dataSource.map((i) => i.key)} strategy={verticalListSortingStrategy}>
        <Table
          tableLayout='fixed'
          components={{
            body: {
              row: Row
            }
          }}
          rowKey='key'
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          size='small'
          className='[&_.ant-table-row]:!leading-none'
        />
      </SortableContext>
    </DndContext>
  )
}

export default SnsSettingTable
