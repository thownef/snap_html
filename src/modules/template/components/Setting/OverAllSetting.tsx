import { Space, Typography, Radio, type RadioChangeEvent } from 'antd'
import LeftBlockImage from '@/modules/template/components/Svg/LeftBlockImage'
import CenterBlockImage from '@/modules/template/components/Svg/CenterBlockImage'
import { AggregationColor } from 'antd/es/color-picker/color'
import { SettingKeys, settingKeys } from '@/modules/template/hooks/useHandleSetting'
import ColorPicker from '@/shared/components/ColorPicker/ColorPicker'
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

        <ColorPicker
          value={settings[settingKeys.ALL_BACKGROUND]}
          onChange={onChangeSettings(settingKeys.ALL_BACKGROUND)}
          label='全体背景色'
        />

        <ColorPicker
          value={settings[settingKeys.BACKGROUND]}
          onChange={onChangeSettings(settingKeys.BACKGROUND)}
          label='ブロック背景色'
        />

        <ColorPicker
          value={settings[settingKeys.LINK]}
          onChange={onChangeSettings(settingKeys.LINK)}
          label='リンク色'
          placement='right'
        />

        <ColorPicker
          value={settings[settingKeys.TEXT]}
          onChange={onChangeSettings(settingKeys.TEXT)}
          label='文字色'
          placement='right'
        />
      </Space>

      <Space className='w-full bg-white rounded' direction='vertical' size='small'>
        <Space className='w-full bg-white rounded' direction='vertical' size='small'>
          <Text strong>PC表示のブロック位置</Text>
          <Radio.Group
            size='small'
            value={settings[settingKeys.CONTENT_POSITION]}
            onChange={onChangeSettings(settingKeys.CONTENT_POSITION)}
          >
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
    </Space>
  )
}

export default OverAllSetting
