import { Sidebar } from './layout/AppSidebar';
import { Rightbar } from './layout/AppRightbar';
import { Props } from '@/util/definations';

const Layout = ({ children }:Props) => {
  return (
    <div className="h-screen bg-slate-900">
      <div className="container h-full mx-auto xl:px-30">
        <div className="grid grid-cols-4 h-full">
          <Sidebar />
          <div 
            className="
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-800
              text-white
          ">
            {children}
          </div>
          <Rightbar />
        </div>
     </div>
    </div>
  )
}

export default Layout;