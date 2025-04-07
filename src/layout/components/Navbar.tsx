import LoginButton from "../../common/components/LoginButton";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import * as Avatar from "@radix-ui/react-avatar";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const { data: userProfile } = useGetCurrentUserProfile();
  const fallbackLetter = userProfile?.display_name?.[0] || "?";

  const logout = useLogout();

  return (
    <div className="flex flex-row justify-end items-center">
      {userProfile ? (
        <div className="flex flex-row gap-2">
          <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden bg-gray-400">
            <Avatar.Image
              src={userProfile?.images?.[0]?.url}
              className="w-full h-full object-cover"
            />
            <Avatar.Fallback
              delayMs={300}
              className="flex items-center justify-center h-full w-full text-white text-sm font-medium"
            >
              {fallbackLetter}
            </Avatar.Fallback>
          </Avatar.Root>

          <button
            onClick={logout}
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};
export default Navbar;
