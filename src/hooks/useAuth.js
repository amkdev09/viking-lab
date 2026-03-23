import Cookies from "js-cookie";

export const useAuth = () => {
  const cookieToken = Cookies.get("token");

  return {
    isLoggedIn: Boolean(cookieToken),
  };
};

export default useAuth;
