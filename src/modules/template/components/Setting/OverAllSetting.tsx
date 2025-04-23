import { Space, Typography, ColorPicker, Radio, type RadioChangeEvent } from 'antd'
import LeftBlockImage from '@/modules/template/components/Svg/LeftBlockImage'
import CenterBlockImage from '@/modules/template/components/Svg/CenterBlockImage'
import { colorList } from '@/modules/template/core/config/columns/color-list'
import { AggregationColor } from 'antd/es/color-picker/color'
import { SettingKeys, settingKeys } from '@/modules/template/hooks/useHandleSetting'
const { Text } = Typography

type OverAllSettingProps = {
  onChangeSettings: (key: string) => (color: AggregationColor | RadioChangeEvent) => void
  settings: SettingKeys
}

const OverAllSetting = ({ settings, onChangeSettings }: OverAllSettingProps) => {
  return (
    <Space className='w-full px-6 py-4' direction='vertical' size='small'>
      <Space className='w-full mb-4 bg-white rounded' direction='vertical' size='small'>
        <Text strong className=''>
          カラー
        </Text>

        <Space align='center' size='small'>
          <ColorPicker value={settings[settingKeys.ALL_BACKGROUND]} onChange={onChangeSettings(settingKeys.ALL_BACKGROUND)} presets={colorList} size='large' />
          <Space>全体背景色</Space>
        </Space>

        <Space align='center' size='small'>
          <ColorPicker value={settings[settingKeys.BACKGROUND]} onChange={onChangeSettings(settingKeys.BACKGROUND)} presets={colorList} size='large' defaultValue='rgba(255,255,255,0)' />
          <Space>ブロック背景色</Space>
        </Space>

        <Space align='center' size='small'>
          <ColorPicker value={settings[settingKeys.LINK]} onChange={onChangeSettings(settingKeys.LINK)} presets={colorList} size='large' defaultValue='#2f54eb' />
          <Space>リンク色</Space>
        </Space>

        <Space align='center' size='small'>
          <ColorPicker value={settings[settingKeys.TEXT]} onChange={onChangeSettings(settingKeys.TEXT)} presets={colorList} size='large' defaultValue='#262626' />
          <Space>文字色</Space>
        </Space>
      </Space>
      <Space className='w-full bg-white rounded' direction='vertical' size='small'>
        <Text strong>PC表示のブロック位置</Text>
        <Radio.Group size='small' value={settings[settingKeys.CONTENT_POSITION]} onChange={onChangeSettings(settingKeys.CONTENT_POSITION)}>
          <Radio.Button value='left' className='w-24 text-center'>
            <Space>左揃え</Space>
          </Radio.Button>
          <Radio.Button value='center' className='w-24 text-center' defaultChecked>
            <Space>中央揃え</Space>
          </Radio.Button>
        </Radio.Group>
        {settings[settingKeys.CONTENT_POSITION] === 'left' ? <LeftBlockImage /> : <CenterBlockImage />}
      </Space>
    </Space>
  )
}

export default OverAllSetting
