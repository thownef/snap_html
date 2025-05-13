import { useRef } from 'react'
import { useDrag } from 'react-dnd'
import { SelectedColumn } from '@/modules/template/core/types/block.type'

type TextBoxDraggableProps = {
  selectedColumn: SelectedColumn
}

const TextBoxDraggable = ({ selectedColumn }: TextBoxDraggableProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [, drag] = useDrag({
    type: 'TEXT_BOX',
    item: { id: selectedColumn.id }
  })

  drag(ref)

  return (
    <div
      className='[&_p]:block [&_p]:m-0 [&_p]:min-h-[1em]'
      ref={ref}
      dangerouslySetInnerHTML={{ __html: selectedColumn.content || '' }}
      data-text-box
      style={{
        marginLeft: `${((selectedColumn.setting.x ?? 0) / 100) * (selectedColumn.setting.width ?? 560)}px`,
        marginTop: `${((selectedColumn.setting.y ?? 0) / 100) * (selectedColumn.setting.height ?? 303)}px`,
        fontSize: 16,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
        lineHeight: '1.5',
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        width: 'max-content',
        display: 'inline-block',
        cursor: 'move'
      }}
    />
  )
}

export default TextBoxDraggable
