import { memo } from 'react'
import Icon from '@ant-design/icons'

interface FontColorIconProps {
  color?: string
}

const FontColorIcon = memo(
  ({ color = '#000000' }: FontColorIconProps) => {
    return (
      <Icon
        component={() => (
          <svg viewBox='0 0 16 16' width='1em' height='1em' fill='currentColor'>
            <path d='M4.14419 11H5.40754C5.46996 11 5.52644 10.9611 5.54576 10.9019L6.3439 8.50769H9.60185L10.3926 10.9019C10.4119 10.9596 10.4669 11 10.5308 11H11.8551C11.8714 11 11.8878 10.9971 11.9026 10.9928C11.9206 10.9868 11.9372 10.9774 11.9515 10.9651C11.9657 10.9529 11.9773 10.938 11.9856 10.9214C11.9939 10.9048 11.9987 10.8867 11.9998 10.8683C12.0008 10.8498 11.9981 10.8314 11.9918 10.8139L8.89883 2.09519C8.8888 2.06766 8.87032 2.04378 8.84587 2.02675C8.82142 2.00973 8.79218 2.0004 8.76209 2H7.24162C7.1792 2 7.1242 2.0375 7.10488 2.09519L4.00746 10.8139C4.00151 10.8284 4.00002 10.8442 4.00002 10.8601C3.99854 10.9365 4.06394 11 4.14419 11ZM7.94761 3.55625H8.00855L9.25406 7.36106H6.68872L7.94761 3.55625Z' />
            <rect x={2} y={13} width={12} height={3} fill={color} />
          </svg>
        )}
      />
    )
  },
  (prevProps, nextProps) => {
    return prevProps.color === nextProps.color
  }
)

FontColorIcon.displayName = 'FontColorIcon'

export default FontColorIcon
