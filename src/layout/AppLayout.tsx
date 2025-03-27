import { Outlet } from "react-router";
import HomeAndSearch from "./components/HomeAndSearch";
import YourLibrary from "./components/YourLibrary";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <div className="flex flex-row p-4 h-screen bg-outside">
      <div className="hidden sm:!flex flex-col w-1/3 text-red-500 mr-4 text-4xl">
        {/* Sidebar - first box */}
        <div className="space-y-4">
          <nav className="p-2 rounded-lg  bg-gray-900">
            <HomeAndSearch />
          </nav>
          {/* Sidebar - second box */}
          <nav className="p-2 rounded-lg  bg-gray-900">
            <YourLibrary />
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-backgroundPager rounded-lg text-green-500">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
