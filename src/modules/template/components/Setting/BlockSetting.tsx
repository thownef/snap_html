import { Tabs, TabsProps } from 'antd'
import { type SelectedColumn, ChangeBlockType } from '@/modules/template/core/types/block.type'
import ImageSetting from '@/modules/template/components/Setting/ImageSetting'
import TextSetting from '@/modules/template/components/Setting/TextSetting'
import BlockDesignSetting from '@/modules/template/components/Setting/BlockDesignSetting'
import ButtonSetting from '@/modules/template/components/Setting/ButtonSetting'

type BlockSettingProps = {
  selectedColumn: SelectedColumn | null
  activeTab: string
  onChangeBlock: (keyChange: string, blockId: number, columnId: number) => (value: ChangeBlockType) => void
  onChangeActiveTab: (newKey: string) => void
  onChangeSettingBlock: (blockId: number, keyChange: string) => (value: any) => void
}

const BlockSetting = ({
  selectedColumn,
  activeTab,
  onChangeBlock,
  onChangeActiveTab,
  onChangeSettingBlock
}: BlockSettingProps) => {
  if (!selectedColumn) {
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
      children: <ImageSetting selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
    },
    {
      key: 'blockEditMenu',
      label: 'ブロックデザイン',
      children: <BlockDesignSetting selectedColumn={selectedColumn} onChangeSettingBlock={onChangeSettingBlock} />
    }
  ]

  const itemTexts: TabsProps['items'] = [
    {
      key: 'partsEditMenu',
      label: 'テキスト編集',
      children: <TextSetting selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
    },
    {
      key: 'blockEditMenu',
      label: 'ブロックデザイン',
      children: <BlockDesignSetting selectedColumn={selectedColumn} onChangeSettingBlock={onChangeSettingBlock} />
    }
  ]

  const itemButtons: TabsProps['items'] = [
    {
      key: 'partsEditMenu',
      label: 'ボタン編集',
      children: <ButtonSetting selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
    },
    {
      key: 'blockEditMenu',
      label: 'ブロックデザイン',
      children: <BlockDesignSetting selectedColumn={selectedColumn} onChangeSettingBlock={onChangeSettingBlock} />
    }
  ]

  return selectedColumn.type === 'image' ? (
    <Tabs
      className='h-full [&_.ant-tabs-nav]:h-[39px] [&_.ant-tabs-nav]:!mb-0 [&_.ant-tabs-tabpane]:!overflow-hidden [&_.ant-tabs-tabpane]:!overflow-y-auto [&_.ant-tabs-tabpane]:!h-[calc(100vh-150px)]'
      defaultActiveKey='partsEditMenu'
      type='line'
      size={'middle'}
      items={itemImages}
      activeKey={activeTab}
      onChange={onChangeActiveTab}
    />
  ) : selectedColumn.type === 'text' ? (
    <Tabs
      className='h-full [&_.ant-tabs-nav]:h-[39px] [&_.ant-tabs-content-holder]:!h-full'
      defaultActiveKey='partsEditMenu'
      type='line'
      size={'middle'}
      items={itemTexts}
      activeKey={activeTab}
      onChange={onChangeActiveTab}
    />
  ) : (
    <Tabs
      className='h-full [&_.ant-tabs-nav]:h-[39px] [&_.ant-tabs-content-holder]:!h-full'
      defaultActiveKey='partsEditMenu'
      type='line'
      size={'middle'}
      items={itemButtons}
      activeKey={activeTab}
      onChange={onChangeActiveTab}
    />
  )
}

export default BlockSetting
