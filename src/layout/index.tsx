import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Section from "../components/Section";
import { checkAuth } from "../utils/checkAuth";
import Loader from "../components/Loader";
import useStore from "../store";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const { user, setUser } = useStore();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    if (!user.email) {
      checkAuth(navigate, setUser, setLoading);
    }
  }, []);

  if (loading) {
    return <Loader main />;
  }

  return (
    <main className="overflow-hidden lg:overflow-visible">
      <div
        className={`xl:pl-60  pt-14 min-h-screen w-screen transition-position lg:w-auto ${
          sidebarOpen ? "ml-60" : ""
        }`}
      >
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Aside sidebarOpen={sidebarOpen} />
        <Section>{user.email && <Outlet />}</Section>
      </div>
    </main>
  );
};

export default Layout;
