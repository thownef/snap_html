import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ChangeBlockType, SelectedColumn } from '@/modules/template/core/types/block.type'

type DragTextOverlayProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (value: ChangeBlockType) => void
}

const DragTextOverlay = ({ selectedColumn, onChangeBlock }: DragTextOverlayProps) => {
  const imgRef = useRef<HTMLImageElement>(null)

  const TextBoxDraggable = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [, drag] = useDrag({
      type: 'TEXT_BOX',
      item: { id: selectedColumn.id }
    })

    drag(ref)

    return (
      <div
        ref={ref}
        data-text-box
        style={{
          display: 'inline-block',
          marginLeft: `${((selectedColumn.setting.x ?? 0) / 100) * (selectedColumn.setting.width ?? 560)}px`,
          marginTop: `${((selectedColumn.setting.y ?? 0) / 100) * (selectedColumn.setting.height ?? 303)}px`,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Helvetica, Arial, "Noto Sans JP", "BIZ UDGothic", Meiryo, sans-serif',
          lineHeight: '1.5',
          background: 'rgba(255,255,255,0.7)',
          padding: 2,
          borderRadius: 2,
          fontSize: 16,
          width: 'max-content',
          cursor: 'move'
        }}
      >
        {selectedColumn.content || 'Kéo tôi!'}
      </div>
    )
  }
  const [, drop] = useDrop({
    accept: 'TEXT_BOX',
    drop: (_, monitor) => {
      const offset = monitor.getSourceClientOffset()
      const dropRect = dropRef.current?.getBoundingClientRect()
      if (!offset || !dropRect) return

      const textBox = document.querySelector('[data-text-box]')
      const textBoxRect = textBox?.getBoundingClientRect()
      if (!textBoxRect) return

      const maxX = 100 - (textBoxRect.width / dropRect.width) * 100
      const maxY = 100 - (textBoxRect.height / dropRect.height) * 100

      const x = ((offset.x - dropRect.left) / dropRect.width) * 100
      const y = ((offset.y - dropRect.top) / dropRect.height) * 100

      const updates = [
        { key: 'setting.x', value: Math.max(0, Math.min(maxX, x)) },
        { key: 'setting.y', value: Math.max(0, Math.min(maxY, y)) }
      ] as const

      for (const { key, value } of updates) {
        onChangeBlock(key, selectedColumn.blockId, selectedColumn.columnId, selectedColumn.id)(value)
      }
    }
  })

  const dropRef = useRef<HTMLDivElement>(null)
  drop(dropRef)

  return (
    <div
      ref={dropRef}
      style={{
        position: 'relative',
        width: 560,
        height: 303,
        background: `url('${selectedColumn.setting.backgroundImage}') no-repeat`,
        backgroundSize: 'cover',
        marginBottom: 16
      }}
    >
      <img
        ref={imgRef}
        src={selectedColumn.setting.backgroundImage}
        alt='background'
        style={{
          width: selectedColumn.setting.width,
          height: selectedColumn.setting.height,
          visibility: 'hidden',
          position: 'absolute'
        }}
      />
      <TextBoxDraggable />
    </div>
  )
}

export default DragTextOverlay
