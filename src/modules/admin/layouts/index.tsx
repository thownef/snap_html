import { Outlet } from 'react-router'
import { useSidebar } from '@/modules/admin/hooks/useSidebar'
import Backdrop from '@/modules/admin/layouts/Backdrop/Backdrop'
import Header from '@/modules/admin/layouts/Header/Header'
import Sidebar from '@/modules/admin/layouts/Sidebar/Sidebar'
import { SidebarProvider } from '@/modules/admin/providers/SidebarProvider'

const Content = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar()

  return (
    <div className='min-h-screen xl:flex'>
      <div>
        <Sidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]'
        } ${isMobileOpen ? 'ml-0' : ''}`}
      >
        <Header />
        <div className='p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <Content />
    </SidebarProvider>
  )
}

// Tạo một component con để sử dụng useSidebar

export default AdminLayout
