import { Space, Typography, type RadioChangeEvent } from 'antd'
import LeftBlockImage from '@/modules/template/components/Icon/LeftBlockImage'
import CenterBlockImage from '@/modules/template/components/Icon/CenterBlockImage'
import { AggregationColor } from 'antd/es/color-picker/color'
import { SettingKeys, settingKeys } from '@/modules/template/hooks/useHandleSetting'
import ColorPicker from '@/shared/components/ColorPicker/ColorPicker'
import RadioDesign from '@/shared/design-system/Radio/RadioDesign'
import { displayPcOptions } from '@/modules/template/core/config/columns/display-pc-list'
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
          <RadioDesign
            value={settings[settingKeys.CONTENT_POSITION]}
            options={displayPcOptions}
            onChange={onChangeSettings(settingKeys.CONTENT_POSITION)}
            className='w-full [&_.ant-radio-button-wrapper]:w-24 [&_.ant-radio-button-wrapper]:text-center'
          />
          {settings[settingKeys.CONTENT_POSITION] === 'left' ? <LeftBlockImage /> : <CenterBlockImage />}
        </Space>
      </Space>
    </Space>
  )
}

export default OverAllSetting
