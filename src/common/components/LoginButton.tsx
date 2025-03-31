import { getSpotifyAuthUrl } from "../../utils/auth";

const LoginButton = () => {
  const handleLogin = () => {
    getSpotifyAuthUrl();
  };
  return (
    <>
      <button
        className="bg-white rounded-full hover:scale-105 transition px-5 py-2 text-black text-sm font-bold"
        onClick={handleLogin}
      >
        Login
      </button>
    </>
  );
};
export default LoginButton;
