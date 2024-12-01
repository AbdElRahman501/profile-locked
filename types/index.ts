import { icons } from "@/constants";

export interface SideMenuItemType {
  title?: string;
  icon?: keyof typeof icons;
  link?: string;
  children?: SideMenuItemType[];
  kind?: "divider" | "title";
}
