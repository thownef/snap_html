import { useState } from 'react'
import { AggregationColor } from 'antd/es/color-picker/color'
import { RadioChangeEvent } from 'antd'

export type SettingKeys = {
  [settingKeys.ALL_BACKGROUND]: string
  [settingKeys.BACKGROUND]: string
  [settingKeys.LINK]: string
  [settingKeys.TEXT]: string
  [settingKeys.CONTENT_POSITION]: string
}

export const settingKeys = {
  ALL_BACKGROUND : 'allBackground',
  BACKGROUND: 'background',
  LINK: 'linkColor',
  TEXT: 'textColor',
  CONTENT_POSITION: 'contentPosition'
} as const

const useHandleSetting = () => {
  const [settings, setSettings] = useState<SettingKeys>({
    [settingKeys.ALL_BACKGROUND]: 'rgba(255,255,255,0)',
    [settingKeys.BACKGROUND]: 'rgba(255,255,255,0)',
    [settingKeys.TEXT]: '#262626',
    [settingKeys.LINK]: '#b82329',
    [settingKeys.CONTENT_POSITION]: 'center'
  })

  console.log(settings)

  const handleChangeSettings = (key: string) => (color: AggregationColor | RadioChangeEvent) => {
    const valueUpdate = 'toRgbString' in color ? color.toRgbString() : color.target.value
    setSettings((prev) => ({ ...prev, [key]: valueUpdate }))
  }

  return {
    settings,
    onChangeSettings: handleChangeSettings
  }
}

export default useHandleSetting
