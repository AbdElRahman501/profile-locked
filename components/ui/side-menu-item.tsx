"use client";

import { SideMenuItemType } from "@/types";
import LinkItem from "./menu-link-item";
import DropDownMenuItem from "./side-menu-dropDown";

/**
 * Component for rendering a side menu item.
 * Supports rendering dividers, link items, and dropdown menu items.
 */
const SideMenuItem: React.FC<SideMenuItemType> = ({
  title,
  children,
  icon,
  link,
  kind,
}) => {
  // Render a divider
  if (kind === "divider") {
    return (
      <li>
        <div className="my-5 h-px bg-gray-200" />
      </li>
    );
  }
  if (kind === "title") {
    return (
      <li>
        <p
          className={
            "flex w-full min-w-60 items-center justify-between px-4 py-3 text-sm uppercase opacity-60"
          }
        >
          {title}
        </p>
      </li>
    );
  }
  // Render a dropdown menu item if it has children
  if (children && children.length > 0) {
    return (
      <li>
        {" "}
        <DropDownMenuItem title={title} children={children} icon={icon} />
      </li>
    );
  }

  // Render a link item
  return (
    <li>
      <LinkItem title={title} link={link} icon={icon} />
    </li>
  );
};

export default SideMenuItem;
