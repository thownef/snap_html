import { ConfigProvider, notification } from 'antd'
import RoutesApp from '@/routes'
import { useNavigation } from '@/shared/hooks/useNavigation'

function App() {
  const [, contextHolder] = notification.useNotification()
  useNavigation()
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#d92a33'
        }
      }}
    >
      {contextHolder}
      <RoutesApp />
    </ConfigProvider>
  )
}

export default App
