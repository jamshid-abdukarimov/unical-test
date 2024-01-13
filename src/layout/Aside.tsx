import { NavLink } from "react-router-dom";
import Icon from "../components/Icon";
import menuItems from "../config/menuItems";

interface Props {
  sidebarOpen: boolean;
}

const Aside = ({ sidebarOpen }: Props) => {
  return (
    <aside
      className={`${
        sidebarOpen ? "left-0" : "-left-60"
      } xl:left-0 xl:flex zzz lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden bg-gray-100`}
    >
      <div className="aside lg:rounded-2xl flex-1 flex flex-col overflow-hidden">
        <div className="aside-brand flex flex-row h-14 items-center justify-between bg-gray-950 text-white">
          <div className="text-center flex-1 xl:pl-0">
            <b className="font-semibold">Project #1</b>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden aside-scrollbars bg-gray-800 text-white">
          <ul>
            {menuItems.map((item) => (
              <li key={item.link}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex cursor-pointer py-3 aside-menu-item font-bold"
                      : "flex cursor-pointer py-3 aside-menu-item"
                  }
                  to={item.link}
                >
                  <span className="inline-flex justify-center items-center w-16 h-6 flex-none">
                    <Icon path={item.icon} size={20} />
                  </span>
                  <span className="grow text-ellipsis line-clamp-1 pr-12">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
