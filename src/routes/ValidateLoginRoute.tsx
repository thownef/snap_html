import { ReactNode } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { PagePath } from '@/shared/core/enum'

type Props = {
  children?: ReactNode
}

const ValidateLoginRoute = ({ children }: Props) => {
  const location = useLocation()
  const isAuthenticated = localStorage.getItem('accessToken')

  if (isAuthenticated) {
    return <Navigate state={{ from: location }} to={PagePath.HOME} />
  } else if (children) {
    return <>{children}</>
  } else {
    return <Outlet />
  }
}

export default ValidateLoginRoute
