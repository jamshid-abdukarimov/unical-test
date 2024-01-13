import { Navigate, Outlet, useLocation } from "react-router-dom";
import useStore from "../store";

const RequiredAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { user } = useStore();
  const location = useLocation();
  return user.gender ? (
    allowedRoles.includes(user.gender) ? (
      <Outlet />
    ) : (
      <Navigate to="/login" replace state={{ from: location }} />
    )
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default RequiredAuth;
