import { Tabs, TabsProps } from 'antd'
import { type SelectedBlock } from '@/modules/template/core/types/block.type'
import ImageSetting from '@/modules/template/components/Setting/ImageSetting'
import TextSetting from '@/modules/template/components/Setting/TextSetting'

type BlockSettingProps = {
  selectedBlock: SelectedBlock | null
  activeTab: string
  onChangeBlock: (content: string, blockId: number, columnId: number) => void
  onChangeActiveTab: (newKey: string) => void
}

const BlockSetting = ({ selectedBlock, activeTab, onChangeBlock, onChangeActiveTab }: BlockSettingProps) => {
  if (!selectedBlock) {
    return (
      <div className='w-full h-full overflow-hidden'>
        <div className='m-4 mx-6 w-[calc(100%-96px)] p-4 px-6 bg-gray-100 text-[rgb(140,140,140)]'>
          ブロックが選択されています。
          <br />
          編集するブロックを選択してください。
        </div>
      </div>
    )
  }

  const itemImages: TabsProps['items'] = [
    {
      key: 'partsEditMenu',
      label: '画像編集',
      children: <ImageSetting />
    },
    {
      key: 'blockEditMenu',
      label: 'ブロックデザイン',
      children: 'ブロックデザイン'
    }
  ]

  const itemTexts: TabsProps['items'] = [
    {
      key: 'partsEditMenu',
      label: 'テキスト編集',
      children: <TextSetting selectedBlock={selectedBlock} onChangeBlock={onChangeBlock} />
    },
    {
      key: 'blockEditMenu',
      label: 'ブロックデザイン',
      children: 'ブロックデザイン'
    }
  ]

  return selectedBlock.type === 'image' ? (
    <Tabs
      className='h-full [&_.ant-tabs-nav]:!mb-0 [&_.ant-tabs-tabpane]:!overflow-hidden [&_.ant-tabs-tabpane]:!overflow-y-auto [&_.ant-tabs-tabpane]:!h-[calc(100vh-150px)]'
      defaultActiveKey='1'
      type='line'
      size={'middle'}
      items={itemImages}
    />
  ) : (
    <Tabs
      className='h-full [&_.ant-tabs-nav]:!mb-0'
      defaultActiveKey='partsEditMenu'
      type='line'
      size={'middle'}
      items={itemTexts}
      activeKey={activeTab}
      onChange={onChangeActiveTab}
    />
  )
}

export default BlockSetting
