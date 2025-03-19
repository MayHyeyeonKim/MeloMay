import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="flex flex-row p-2 h-screen bg-primary">
      {/* Sidebar */}
      <div className="hidden sm:!flex flex-col w-1/3 text-red-500 pr-2 text-4xl">
        Sidebar
        <div className=" text-green-500 bg-background p-4">Item1</div>
        <div className="bg-accent text-yellow-500 p-4">Item2</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 text-green-500">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
