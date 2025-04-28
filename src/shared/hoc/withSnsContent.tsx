import { Sns } from '@/modules/template/core/types/block.type'
import _ from 'lodash'

const withSnsContent = <TProps extends { content: Sns[] }>(Component: React.ComponentType<TProps>) => {
  return (props: Omit<TProps, 'content'> & { content: unknown }) => {
    if (
      Array.isArray(props.content) &&
      props.content.every((item) =>
        _.conformsTo(item, {
          type: _.isString,
          originalHref: _.isString,
          convertedHref: _.isString
        })
      )
    ) {
      return <Component {...(props as TProps)} />
    }
    return null
  }
}

export default withSnsContent
