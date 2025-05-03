import { MobileLayout } from '@/modules/template/core/enums/block.enum'
import { type Block } from '@/modules/template/core/types/block.type'
import { settingKeys } from '@/modules/template/hooks/useHandleSetting'
import { SettingKeys } from '@/modules/template/hooks/useHandleSetting'
import {
  convertPadding,
  getColumnAlign,
  getColumnPadding,
  getColumnWidth,
  getStyleTableWrapper
} from '@/modules/template/utils'
import ColumnDesign from '@/shared/design-system/Column/ColumnDesign'

interface BaseRenderBlockProps {
  key: number
  block: Block
  settings: SettingKeys
}

const BaseRenderBlock = ({ block, settings }: BaseRenderBlockProps) => {
  return (
    <table
      align='center'
      width={600}
      className='root-mail-block scroll-block'
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role='presentation'
      style={{
        padding: convertPadding(block.setting),
        background: block.setting.backgroundColor ? block.setting.backgroundColor : settings[settingKeys.BACKGROUND],
        position: 'relative'
      }}
    >
      <tbody>
        <tr>
          <td>
            <div className='mail-block-insert-line' />
            <div className='mail-block-panel' />

            <table align='center' width='100%' border={0} cellPadding={0} cellSpacing={0} role='presentation'>
              <tbody style={{ width: '100%' }}>
                <tr style={{ width: '100%' }}>
                  {block.columns.map((column, index) => (
                    <td
                      key={column.id}
                      className={
                        block.setting.mobileLayout === MobileLayout.HORIZONTAL ? 'layout-horizontal' : 'layout-vertical'
                      }
                      width={`${100 / block.columns.length}%`}
                      style={{
                        verticalAlign: 'top',
                        width: `${100 / block.columns.length}%`,
                        maxWidth: `${100 / block.columns.length}%`,
                        padding: getColumnPadding(block.columns.length, index, block.setting.columnsInnerPadding),
                        position: 'relative'
                      }}
                    >
                      <div className='mail-column-edit-panel'>
                        {column.parts.map((part) => (
                          <table
                            key={part.id}
                            align='center'
                            width='100%'
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            role='presentation'
                            style={{ position: 'relative' }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <table
                                    style={getStyleTableWrapper(part.type)}
                                    align={part.setting?.align || getColumnAlign(part.type)}
                                    width={getColumnWidth(part.type, part.setting?.size)}
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td style={{ padding: index !== column.parts.length - 1 ? '0px 0px 8px' : 0 }}>
                                          <ColumnDesign part={part} settingBlock={block.setting} settings={settings} />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className='mail-parts-edit-panel' title='パーツ編集' />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BaseRenderBlock
