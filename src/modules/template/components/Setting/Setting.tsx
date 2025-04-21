import { Tabs, TabsProps } from 'antd'
import BlockSetting from '@/modules/template/components/Setting/BlockSetting'
import SendSetting from '@/modules/template/components/Setting/SendSetting'
import OverAllSetting from '@/modules/template/components/Setting/OverAllSetting'
import { type SelectedBlock } from '@/modules/template/core/types/block.type'

type SettingProps = {
  selectedBlock: SelectedBlock | null
  activeKey: string
  onChangeTab: (newKey: string) => void
}

const Setting = ({ selectedBlock, activeKey, onChangeTab }: SettingProps) => {

  const items: TabsProps['items'] = [
    {
      key: 'sendSettings',
      label: '配信設定',
      children: <SendSetting />
    },
    {
      key: 'blockSettings',
      label: 'メール編集',
      children: <BlockSetting selectedBlock={selectedBlock} />
    },
    {
      key: 'overallSettings',
      label: '全体デザイン',
      children: <OverAllSetting />
    }
  ]
  return (
    <div className='min-[1424px]:min-w-[680px] max-[1424px]:min-w-[496px]'>
      <div className='w-[calc(100vw-744px)] h-screen box-border border-l border-[rgb(240,240,240)] max-w-[680px] min-w-[496px] overflow-hidden'>
        <div className='h-[55px] bg-gray-50'>input</div>
        <div className='h-[calc(100%-55px)]'>
          <Tabs
            className='h-full [&_.ant-tabs-nav]:px-6 [&_.ant-tabs-nav]:bg-gray-50 [&_.ant-tabs-nav]:!mb-0'
            activeKey={activeKey}
            onChange={onChangeTab}
            type='card'
            size={'middle'}
            items={items}
          />
        </div>
      </div>
    </div>
  )
}

export default Setting