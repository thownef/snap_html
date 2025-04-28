import { SettingColumn } from '@/modules/template/core/types/block.type'

type DividerDesignProps = {
  setting: SettingColumn
}

const DividerDesign = ({ setting }: DividerDesignProps) => {
  return (
    <table
      className='mail-divider'
      align='center'
      border={0}
      cellPadding={0}
      cellSpacing={0}
      width={'100%'}
      style={{
        borderTop: `${setting.borderWidth} ${setting.borderStyle} ${setting.borderColor}`,
        fontSize: 1,
        margin: '0px auto',
        width: '100%'
      }}
    >
      <tbody>
        <tr>
          <td style={{ height: 0, lineHeight: 0 }}>&nbsp;&nbsp;</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DividerDesign
