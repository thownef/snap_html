import RoutesApp from '@/routes'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#d92a33'
          }
        }}
      >
        <RoutesApp />
      </ConfigProvider>
    </>
  )
}

export default App
