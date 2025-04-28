const withStringContent = <TProps extends { content: string }>(Component: React.ComponentType<TProps>) => {
  return (props: Omit<TProps, 'content'> & { content: unknown }) => {
    if (typeof props.content === 'string') {
      return <Component {...(props as TProps)} />
    }
    return null
  }
}

export default withStringContent
