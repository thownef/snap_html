import { ReactNode } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { PagePath } from '@/shared/core/enum'

type Props = {
  children?: ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const location = useLocation()
  const isAuthenticated = Cookies.get('accessToken')

  if (!isAuthenticated) {
    return <Navigate state={{ from: location }} to={PagePath.LOGIN} />
  } else if (children) {
    return <>{children}</>
  } else {
    return <Outlet />
  }
}

export default PrivateRoute
