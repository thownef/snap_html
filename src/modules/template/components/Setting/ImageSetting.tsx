import { useRef } from 'react'
import { Space, Typography, Button, Slider, Checkbox, InputNumber } from 'antd'
import { UploadOutlined, AppstoreOutlined, QuestionCircleFilled, LinkOutlined } from '@ant-design/icons'
import { displayImageList } from '@/modules/template/core/config/columns/display-image-list'
import RadioDesign from '@/shared/design-system/Radio/RadioDesign'

const ImageSetting = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <Space direction='vertical' size='small' className='px-6 py-4 h-[calc(100%-48px)] fmDqZl'>
      <Space direction='vertical' size='small' className='fmDqZl mb-4 w-full'>
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
              onClick={handleImageClick}
              className='hover:border-[rgb(230,80,83)] w-[195px] h-[184px] mb-2 flex justify-center items-center relative text-center bg-[rgba(38,38,38,0.02)] border border-dashed border-[rgb(217,217,217)] rounded-lg cursor-pointer transition-[border-color] duration-200'
            >
              <div role='presentation'>
                <input
                  ref={fileInputRef}
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
                <Typography.Text className='font-bold iwPcDK'>画像アップロード</Typography.Text>
                <br />
                <Typography.Text className='!text-[11px] !text-[rgb(140,140,140)]'>
                  ファイル形式：jpg / gif / png
                </Typography.Text>
                <br />
                <Typography.Text className='!text-[11px] !text-[rgb(140,140,140)]'>
                  容量：3 MB以下 (1ファイル)
                </Typography.Text>
                <br />
                <Typography.Text className='!text-[11px] !text-[rgb(140,140,140)]'>
                  推奨サイズ：300 KB以下 (1ファイル)
                </Typography.Text>
              </div>
            </div>

            <Button icon={<AppstoreOutlined />} className='w-[195px] text-center'>
              <Space>画像ライブラリ</Space>
            </Button>
          </div>
        </div>

        <Typography.Text className='!text-[rgb(191,191,191)]'>
          <span>336 KB</span>
          <br />
          <span>548 x 338</span>
        </Typography.Text>
      </Space>

      <Space direction='vertical' size='small' className='fmDqZl mb-4 w-full'>
        <Typography.Text className='font-bold'>
          URL
          <QuestionCircleFilled className='ml-[5px] text-[rgb(89,89,89)] h-3.5 w-3.5' />
        </Typography.Text>

        <Space direction='vertical' size='small' className='max-w-full'>
          <Button icon={<LinkOutlined />} title='リンク設定'>
            <Space>リンク設定</Space>
          </Button>
          <Typography.Text className='!text-[rgb(191,191,191)]'>（未設定）</Typography.Text>
        </Space>
      </Space>

      <Space direction='vertical' size='small' className='mb-4 w-full'>
        <Typography.Text className='font-bold'>画像の表示幅</Typography.Text>
        <div className='flex w-full gap-4 justify-center items-center'>
          <InputNumber min={32} max={600} value={600} />
          <Slider className='w-full' defaultValue={600} />
        </div>
        <Space align='center'>
          <Checkbox checked className='gQQSxR' />
          <Typography.Text className='jcfnqJ'>スマホ表示幅100%</Typography.Text>
        </Space>
      </Space>

      <Space direction='vertical' size='small' className='mb-4 w-full'>
        <Typography.Text className='font-bold'>位置</Typography.Text>
        <RadioDesign
          options={displayImageList}
          onChange={() => {}}
          value={'left'}
          className='[&_.ant-radio-button-wrapper]:w-24 [&_.ant-radio-button-wrapper]:text-center'
        />
      </Space>
    </Space>
  )
}

export default ImageSetting
