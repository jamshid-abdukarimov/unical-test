import {
  mdiAccountGroup,
  mdiNoteEditOutline,
  mdiPackageVariantClosedCheck,
  mdiCheckAll,
} from "@mdi/js";

const menuItems = [
  {
    icon: mdiCheckAll,
    title: "Todos",
    link: "/todos",
    allowedRoles: [],
  },
  {
    icon: mdiPackageVariantClosedCheck,
    title: "Products",
    link: "/products",
    allowedRoles: [],
  },
  {
    icon: mdiAccountGroup,
    title: "Users",
    link: "/users",
    allowedRoles: [],
  },
  {
    icon: mdiNoteEditOutline,
    title: "Posts",
    link: "/posts",
    allowedRoles: [],
  },
];

export default menuItems;
