import { Card, Typography, Image } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const TemplateCard = () => {
  return (
    <Card
      size='small'
      className='w-[250px] min-h-[300px] overflow-hidden'
      title={
        <Typography.Paragraph ellipsis={{ rows: 2 }} className='m-0'>
          年賀03
        </Typography.Paragraph>
      }
      styles={{ body: { padding: 0 } }}
    >
      <div className='relative'>
        <Image
          className='w-full'
          alt='designTemplateThumbnail30'
          src='https://img.bme.jp/img/thumbnail_v3/thumbnail_0005.jpg?ts=-2'
          preview={false}
        />
        <div className='absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center'>
          <a
            href='https://e.bme.jp/bm/mng/create/html?type=designTemplate&id=30'
            className='text-white flex flex-col items-center gap-2'
          >
            <EditOutlined className='text-xl' />
            <span>メール編集</span>
          </a>
        </div>
      </div>
    </Card>
  )
}

export default TemplateCard
