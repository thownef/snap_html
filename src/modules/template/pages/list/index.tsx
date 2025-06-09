import { useState } from 'react'
import { Tabs, Button, Badge, Pagination } from 'antd'
import Navbar from '@/shared/components/Navbar/Navbar'
import TemplateList from '@/modules/template/components/TemplateList/TemplateList'

const TemplateFormPage = () => {
  const [activeTab, setActiveTab] = useState('myTemplates')
  const [paginationState, setPaginationState] = useState({
    myTemplates: 1,
    designTemplates: 1,
    pastEmails: 1
  })
  const currentPage = paginationState[activeTab as keyof typeof paginationState]
  const pageSize = 12

  const handlePageChange = (page: number) => {
    setPaginationState((prev) => ({
      ...prev,
      [activeTab]: page
    }))
  }

  const handleTabChange = (key: string) => {
    setActiveTab(key)
  }

  const items = [
    {
      key: 'myTemplates',
      label: 'Myテンプレート',
      children: <TemplateList />
    },
    {
      key: 'designTemplates',
      label: (
        <span>
          <Badge count='NEW' className='mr-2' />
          デザインテンプレート
        </span>
      ),
      children: <TemplateList />
    }
  ]

  return (
    <div className='h-screen'>
      <Navbar />

      <div className='bg-gray-50 overflow-y-auto h-[calc(100vh-64px-56px)]'>
        <div className='container mx-auto px-4 py-4'>
          <Tabs
            activeKey={activeTab}
            onChange={handleTabChange}
            tabBarExtraContent={{
              right: (
                <Button type='default' size='middle' className='!ml-8'>
                  独自HTMLアップロード
                </Button>
              )
            }}
            items={items}
          />
        </div>
      </div>

      <div className='container bg-white px-0 fixed bottom-0 w-full py-4 mx-auto flex justify-center'>
        <Pagination
          current={currentPage}
          total={200}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  )
}

export default TemplateFormPage
