import { Outlet } from "react-router";
import { Home, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-row p-4 h-screen bg-outside">
      {/* Sidebar */}
      <div className="hidden sm:!flex flex-col w-1/3 text-red-500 mr-4 text-4xl">
        <div className="space-y-4">
          <div className=" text-white bg-background rounded-lg p-4">
            <nav className="space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-semibold p-3 rounded-md transition-colors ${
                    isActive ? " text-white" : "text-gray-300"
                  } hover:text-secondary/80`
                }
              >
                <Home size={20} /> Home
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-semibold p-3 rounded-md transition-colors ${
                    isActive ? "text-white" : "text-gray-300"
                  } hover:text-secondary/80`
                }
              >
                <Search size={20} /> Search
              </NavLink>
            </nav>
          </div>
          <div className=" text-white  bg-background rounded-lg p-4">Item2</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-backgroundPager rounded-lg text-green-500">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
