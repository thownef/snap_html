import { Tabs } from 'antd'
import { type SelectedColumn, ChangeBlockType } from '@/modules/template/core/types/block.type'
import ImageSetting from '@/modules/template/components/Setting/ImageSetting'
import TextSetting from '@/modules/template/components/Setting/TextSetting'
import BlockDesignSetting from '@/modules/template/components/Setting/BlockDesignSetting'
import ButtonSetting from '@/modules/template/components/Setting/ButtonSetting'
import DividerSetting from '@/modules/template/components/Setting/DividerSetting'
import SnsSetting from '@/modules/template/components/Setting/SnsSetting'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'

type BlockSettingProps = {
  selectedColumn: SelectedColumn | null
  activeTab: string
  settings: SettingKeys
  onChangeBlock: (keyChange: string, blockId: number, columnId: number, partId: number) => (value: ChangeBlockType) => void
  onChangeActiveTab: (newKey: string) => void
  onChangeSettingBlock: (blockId: number, keyChange: string) => (value: any) => void
}

const BlockSetting = ({
  selectedColumn,
  activeTab,
  settings,
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

  const getTabItems = (type: string) => {
    switch (type) {
      case 'image':
        return [
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
      case 'button':
        return [
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
      case 'divider':
        return [
          {
            key: 'partsEditMenu',
            label: '区切り線編集',
            children: <DividerSetting selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
          },
          {
            key: 'blockEditMenu',
            label: 'ブロックデザイン',
            children: <BlockDesignSetting selectedColumn={selectedColumn} onChangeSettingBlock={onChangeSettingBlock} />
          }
        ]
      case 'sns':
        return [
          {
            key: 'partsEditMenu',
            label: 'SNS編集',
            children: <SnsSetting selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
          },
          {
            key: 'blockEditMenu',
            label: 'ブロックデザイン',
            children: <BlockDesignSetting selectedColumn={selectedColumn} onChangeSettingBlock={onChangeSettingBlock} />
          }
        ]
      default:
        return [
          {
            key: 'partsEditMenu',
            label: 'テキスト編集',
            children: <TextSetting settings={settings} selectedColumn={selectedColumn} onChangeBlock={onChangeBlock} />
          },
          {
            key: 'blockEditMenu',
            label: 'ブロックデザイン',
            children: <BlockDesignSetting selectedColumn={selectedColumn} onChangeSettingBlock={onChangeSettingBlock} />
          }
        ]
    }
  }

  const tabItems = getTabItems(selectedColumn.type)

  return (
    <Tabs
      className='h-full [&_.ant-tabs-nav]:h-[39px] [&_.ant-tabs-content-holder]:!h-full [&_.ant-tabs-nav]:!mb-0 [&_.ant-tabs-tabpane]:!overflow-hidden [&_.ant-tabs-tabpane]:!overflow-y-auto [&_.ant-tabs-tabpane]:!h-[calc(100vh-150px)]'
      defaultActiveKey='partsEditMenu'
      type='line'
      size='middle'
      items={tabItems}
      activeKey={activeTab}
      onChange={onChangeActiveTab}
    />
  )
}

export default BlockSetting
