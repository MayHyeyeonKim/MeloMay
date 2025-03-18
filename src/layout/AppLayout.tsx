import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex flex-row p-2 h-screen">
      {/* Sidebar */}
      <div className="hidden sm:!flex flex-col w-1/3 text-red-500 pr-2 text-4xl">
        Sidebar
        <div>Item1</div>
        <div>Item2</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 text-green-500">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
