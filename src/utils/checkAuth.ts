import { NavigateFunction } from "react-router-dom";
import getToken from "./getToken";
import { GetRequest } from "../lib";

export const checkAuth = async (
  navigate: NavigateFunction,
  setUser: (user: User) => void,
  setLoading: (value: boolean) => void
) => {
  if (getToken()) {
    setLoading(true);
    try {
      const { data } = await GetRequest<User>("/auth/me");
      setUser(data);
      navigate(`${location.pathname}${location.search}` || "/");
    } catch (error) {
      return navigate("/login", {
        replace: true,
      });
    } finally {
      setLoading(false);
    }
  } else {
    return navigate("/login", {
      replace: true,
    });
  }
};
