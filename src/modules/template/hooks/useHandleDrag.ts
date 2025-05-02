import { Sns } from '@/modules/template/core/types/block.type'
import { SnsList } from '@/modules/template/core/types/sns.type'
import { getSnsIcon, getSnsLabel } from '@/shared/utils'
import { DragEndEvent } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useCallback, useState } from 'react'

const useHandleDrag = (
  initData: Sns[] | undefined,
  onChangeBlock: (keyChange: string, blockId: number, columnId: number, partId: number) => (value: any) => void,
  blockId: number,
  columnId: number,
  partId: number
) => {
  const [dataSource, setDataSource] = useState<SnsList[]>(() => {
    const icons = Array.isArray(initData) ? initData : []
    return icons.map((icon, index) => ({
      id: icon.id,
      key: index,
      sns: getSnsLabel(icon.type),
      icon: getSnsIcon(icon.type),
      originalHref: icon.originalHref,
      convertedHref: icon.convertedHref,
      type: icon.type
    }))
  })

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const activeIndex = dataSource.findIndex((i) => i.key === active.id)
      const overIndex = dataSource.findIndex((i) => i.key === over?.id)
      const newDataSource = arrayMove(dataSource, activeIndex, overIndex)

      const newIcons = newDataSource.map((item) => ({
        id: item.id,
        type: item.type,
        originalHref: item.originalHref || '',
        convertedHref: item.convertedHref || ''
      }))

      setDataSource(newDataSource)
      onChangeBlock('icon', blockId, columnId, partId)(newIcons)
    }
  }

  const handleDelete = useCallback((id: number) => {
    return () => {
      const newDataSource = dataSource.filter((item) => item.id !== id)
      
      const newIcons = newDataSource.map((item) => ({
        id: item.id,
        type: item.type,
        originalHref: item.originalHref || '',
        convertedHref: item.convertedHref || ''
      }))

      setDataSource(newDataSource)
      onChangeBlock('icon', blockId, columnId, partId)(newIcons)
    }
  }, [dataSource, blockId, columnId, partId])

  return {
    dataSource,
    onSetDataSource: setDataSource,
    onDragEnd: handleDragEnd,
    onDelete: handleDelete
  }
}

export default useHandleDrag
