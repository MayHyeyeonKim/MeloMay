import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <div className="text-green-500 p-2 text-4xl"> Sidebar </div>

      {/* Main Content */}
      <div className="flex-1 bg-red-500 text-blue-500 p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
