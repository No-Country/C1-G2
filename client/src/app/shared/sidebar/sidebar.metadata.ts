// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  subtitle: string; 
  class: string;
  extralink: boolean;
  submenu: RouteInfo[];
}
