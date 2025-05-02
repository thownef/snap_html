import { useMemo } from 'react'
import { Sns, SettingColumn } from '@/modules/template/core/types/block.type'
import { getSnsIcon } from '@/shared/utils'
import _ from 'lodash'

type SnsDesignProps = {
  icon: Sns[] | undefined
  setting: SettingColumn
}

const SnsDesign = ({ icon, setting }: SnsDesignProps) => {
  const width = useMemo(() => {
    return setting.size === 'small' ? 32 : setting.size === 'large' ? 56 : 40
  }, [setting.size])

  const Icon = ({ item }: { item: Sns }) => {
    return (
      <img
        src={getSnsIcon(item.type)}
        width={width}
        style={{
          display: 'block',
          outline: 'none',
          border: 'none',
          textDecoration: 'none',
          backgroundColor: item.type.includes('White') ? 'rgb(240, 240, 240)' : undefined,
          borderRadius: item.type.includes('White') ? '50%' : undefined
        }}
      />
    )
  }

  return (
    <table align='center' width='100%' border={0} cellPadding={0} cellSpacing={0} role='presentation'>
      <tbody style={{ width: '100%' }}>
        <tr style={{ width: '100%' }}>
          <td>
            {icon?.map((item) =>
              item.originalHref ? (
                <a
                  key={_.uniqueId(item.type)}
                  href={item.originalHref}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ display: 'inline-block' }}
                >
                  <Icon item={item} />
                </a>
              ) : (
                <span key={_.uniqueId(item.type)} style={{ display: 'inline-block' }}>
                  <Icon item={item} />
                </span>
              )
            )}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default SnsDesign
