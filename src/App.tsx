import { useEffect } from 'react'
import { ConfigProvider } from 'antd'
import _ from 'lodash'
import Cookies from 'js-cookie'
import { router } from '@/routes'
import { useNavigation } from '@/shared/hooks/useNavigation'
import { RouterProvider } from 'react-router-dom'
import { getProfile } from '@/shared/services/auth.service'
import { useBoundStore } from '@/shared/stores'

function App() {
  useNavigation()
  const { user, userProfile } = useBoundStore()
  const isAuthenticated = Cookies.get('accessToken')

  useEffect(() => {
    (async () => {
      if (isAuthenticated && !user) {
        try {
          const profileResponse = await getProfile()
          const profileData = profileResponse?.data?.data || {}

          if (_.isEmpty(profileData)) {
            Cookies.remove('accessToken')
            Cookies.remove('refreshToken')
          } else {
            userProfile(profileData)
          }
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d92a33'
        }
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
