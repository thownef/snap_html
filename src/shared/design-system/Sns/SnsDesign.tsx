import { Sns } from '@/modules/template/core/types/block.type'
import { getSnsIcon } from '@/shared/utils'

type SnsDesignProps = {
  icon: Sns[] | undefined
}

const SnsDesign = ({ icon }: SnsDesignProps) => {
  return (
    <table align='center' width='100%' border={0} cellPadding={0} cellSpacing={0} role='presentation'>
      <tbody style={{ width: '100%' }}>
        <tr style={{ width: '100%' }}>
          <td>
            {icon?.map((item) => (
              <span style={{ display: 'inline-block' }}>
                <img
                  src={getSnsIcon(item.type)}
                  width={40}
                  style={{ display: 'block', outline: 'none', border: 'none', textDecoration: 'none', width: 40 }}
                />
              </span>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default SnsDesign
