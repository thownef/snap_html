import { Button, Dropdown } from 'antd'
import { DownOutlined, EditOutlined, UserOutlined } from '@ant-design/icons'

const Navbar = () => {
  const userMenuItems = [
    {
      key: 'logout',
      label: 'ログアウト',
      onClick: () => {
        // Handle logout
      }
    }
  ]

  const contractMenuItems = [
    {
      key: 'contract-period',
      label: (
        <div>
          <div className='text-gray-600'>契約期間</div>
          <div>2024-12-06〜2025-06-30</div>
        </div>
      )
    },
    {
      key: 'plan',
      label: (
        <div>
          <div className='text-gray-600'>プラン</div>
          <div>Standardプラン（10,000アドレス）</div>
        </div>
      )
    },
    {
      key: 'payment',
      label: (
        <div className='flex justify-between items-center'>
          <div>
            <div className='text-gray-600'>支払方法</div>
            <div>クレジットカード</div>
          </div>
          <EditOutlined className='text-gray-400' />
        </div>
      )
    },
    {
      key: 'contract-info',
      label: (
        <div className='flex justify-between items-center'>
          <div>
            <div className='text-gray-600'>契約情報</div>
            <div>表示する</div>
          </div>
          <EditOutlined className='text-gray-400' />
        </div>
      )
    }
  ]
  return (
    <div className='bg-white border-b border-gray-200'>
      <div className='container mx-auto px-4 py-2'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-xl font-semibold'>HTMLメールテンプレート</h1>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='text-right'>
              <div className='text-sm font-medium text-gray-900'>Standardプラン10,000アドレス</div>
              <div className='text-sm text-gray-500'>残り 9,997アドレス</div>
            </div>
            <Button type='primary'>プラン変更</Button>
            <div className='flex items-center space-x-2'>
              <Dropdown menu={{ items: contractMenuItems }} placement='bottomRight' trigger={['click']}>
                <Button className='flex items-center space-x-1 !h-8 border border-gray-300'>
                  <span>bm78699cm</span>
                  <DownOutlined className='text-gray-400' />
                </Button>
              </Dropdown>
            </div>
            <Dropdown menu={{ items: userMenuItems }} placement='bottomRight' trigger={['click']}>
              <Button className='flex items-center justify-center !h-8 !px-2 border border-gray-300'>
                <UserOutlined className='text-gray-600' />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
