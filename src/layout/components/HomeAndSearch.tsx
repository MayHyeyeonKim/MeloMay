import { Home, Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const HomeAndSearch = () => {
  return (
    <>
      <div className=" text-white">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-semibold p-3 rounded-md transition-colors ${
              isActive ? " text-white" : "text-gray-300"
            } hover:text-primary`
          }
        >
          <Home size={20} /> Home
        </NavLink>
      </div>
      <div className="text-white">
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-semibold p-3 rounded-md transition-colors ${
              isActive ? "text-white" : "text-gray-300"
            }hover:text-primary`
          }
        >
          <Search size={20} /> Search
        </NavLink>
      </div>
    </>
  );
};

export default HomeAndSearch;
