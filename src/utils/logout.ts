import { NavigateFunction } from "react-router-dom";

const logout = (navigate: NavigateFunction, reset: () => void) => {
  reset();
  localStorage.removeItem("token");
  navigate("/login");
};

export default logout;
