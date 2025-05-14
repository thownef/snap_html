import { useRef } from 'react'
import { useDrop } from 'react-dnd'
import { ChangeBlockType, SelectedColumn } from '@/modules/template/core/types/block.type'
import DragTextOverlay from '@/modules/template/components/Drag/DragTextOverlay'

type DropTextOverlayProps = {
  selectedColumn: SelectedColumn
  onChangeBlock: (
    keyChange: string,
    blockId: number,
    columnId: number,
    partId: number
  ) => (value: ChangeBlockType) => void
}

const DropTextOverlay = ({ selectedColumn, onChangeBlock }: DropTextOverlayProps) => {
  const imgRef = useRef<HTMLImageElement>(null)

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

      const x = Math.round(((offset.x - dropRect.left) / dropRect.width) * 100)
      const y = Math.round(((offset.y - dropRect.top) / dropRect.height) * 100)

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
    <div className='!border-[rgb(230,80,83)]'>
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
        <DragTextOverlay selectedColumn={selectedColumn} />
      </div>
    </div>
  )
}

export default DropTextOverlay
