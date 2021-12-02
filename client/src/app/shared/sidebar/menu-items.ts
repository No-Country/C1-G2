import { RouteInfo } from "./sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Personal",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    icon: "mdi mdi-gauge",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "/admin/card",
    title: "Card",
    icon: "mdi mdi-gauge",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "",
    title: "Adopciones",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: "/admin/adoption-table",
    title: "Lista",
    icon: "mdi mdi-gauge",
    class: "",
    extralink: false,
    submenu: [],
  },
  {
    path: "/admin/adoption-publish",
    title: "Publicar",
    icon: "mdi mdi-gauge",
    class: "",
    extralink: false,
    submenu: [],
  }
];
