import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-red-500 text-white p-2 hidden md:block">
        Sidebar
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-red-500 p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
