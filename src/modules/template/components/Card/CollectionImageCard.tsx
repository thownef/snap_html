import { formatFileSize } from '@/modules/template/utils'
import { Button, Checkbox, Space, Typography } from 'antd'
const { Text } = Typography

const CollectionImageCard = ({ item }: { item: any }) => {
  return (
    <div className='flex flex-col gap-1 mb-2'>
      <div className="relative group">
        <div className='flex justify-center items-center h-[130px] max-w-[calc(100vw-48px)] w-auto bg-white'>
          <img
            className='w-full h-full object-contain max-w-[270px]'
            src={item.url}
            width={item.width}
            height={item.height}
            alt={item.name}
          />
        </div>
        <Button
          type="text"
          className="!absolute top-0 left-0 w-full !h-full !bg-black/40 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
        >
          <Space size='small'>
            <Checkbox
              className='!absolute !right-1 !top-1 [&_.ant-checkbox]:!w-5 [&_.ant-checkbox]:!h-5 [&_.ant-checkbox-inner]:!w-5 [&_.ant-checkbox-inner]:!h-5 [&_.ant-checkbox-inner::after]:!w-[14px] [&_.ant-checkbox-inner::after]:!h-[14px] [&_.ant-checkbox-inner::after]:!left-[6px]'
              value='20'
            />
            <Button type='primary' size='small'>
              適用
            </Button>
          </Space>
        </Button>
      </div>
      <Text className='!text-xs !text-[rgb(191,191,191)] !leading-[1]'>{new Date(item.created_time).toISOString().split('T')[0]}</Text>
      <Text className='!text-xs !text-[rgb(191,191,191)] !leading-[1]'>{formatFileSize(item.size)}</Text>
      <Text className='!text-xs !text-[rgb(191,191,191)] !leading-[1]'>{item.width} x {item.height}</Text>
    </div>
  )
}

export default CollectionImageCard
