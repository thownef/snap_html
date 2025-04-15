import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-full bg-white">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
