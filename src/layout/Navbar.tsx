import React from "react";

import { mdiMenuClose, mdiChevronDown, mdiLogout, mdiAccount } from "@mdi/js";
import Icon from "../components/Icon";
import { Link, useNavigate } from "react-router-dom";
import logout from "../utils/logout";
import useStore from "../store";

const Navbar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const { user, reset } = useStore();
  return (
    <nav
      className={`xl:pl-60  top-0 inset-x-0 fixed h-14 z-30 transition-position w-screen lg:w-auto bg-gray-100 ${
        sidebarOpen ? "ml-60" : ""
      }`}
    >
      <div className="flex justify-between xl:max-w-[1400px] xl:mx-auto">
        <div className="flex h-14">
          <div className="items-center cursor-pointer flex xl:hidden navbar-item-label py-2 px-3">
            <span
              className="inline-flex justify-center items-center w-6 h-6"
              onClick={() => {
                setSidebarOpen((prev) => !prev);
              }}
            >
              <Icon size={24} path={mdiMenuClose} className="text-blue-600" />
            </span>
          </div>
        </div>
        <div className="max-h-screen-menu  w-auto flex shadow-none profile-dropdown-button">
          <div className="flex items-center relative cursor-pointer navbar-item-label mr-3">
            <div className="flex items-center bg-slate-200 text-slate-700 font-medium p-2 border rounded-full">
              {user.image && (
                <div className="w-6 h-6 mr-1 inline-flex">
                  <img
                    src={`${user.image}`}
                    alt={user.firstName}
                    className="rounded-full block h-auto w-full max-w-full bg-gray-100 object-cover"
                  />
                </div>
              )}
              <span className="px-2 transition-colors">{`${user.firstName} ${user.lastName}`}</span>
              <span className="justify-center items-center w-6 h-6 inline-flex transition-colors">
                <Icon size={16} path={mdiChevronDown} />
              </span>
            </div>
            <div
              className={`${"hidden"} profile-dropdown-menu text-sm border-b border-gray-100 border bg-white absolute top-full right-0 w-full z-20 rounded-lg shadow-lg min-w-max`}
            >
              <Link
                className="flex items-center relative cursor-pointer navbar-item-label py-2 px-3 "
                to="/profile"
              >
                <div className="flex items-center ">
                  <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                    <Icon size={16} path={mdiAccount} />
                  </span>
                  <span className="px-2 transition-colors ">My Profile</span>
                </div>
              </Link>
              <hr className="block lg:my-0.5 border-t border-gray-100" />
              <button
                onClick={() => logout(navigate, reset)}
                className="block lg:flex items-center relative cursor-pointer navbar-item-label py-2 px-3 w-full"
              >
                <div className="flex items-center ">
                  <span className="inline-flex justify-center items-center w-6 h-6 transition-colors">
                    <Icon path={mdiLogout} size={16} />
                  </span>
                  <span className="px-2 transition-colors ">Log Out</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
