"use client";
import { ChevronDown } from "lucide-react";
import { DropDown, DropDownButton, DropDownList } from "./DropDown";
import { SideMenuItemType } from "@/types";
import LinkItem from "./menu-link-item";
import { usePathname } from "next/navigation";
import { icons } from "@/constants";

/**
 * Component for rendering a dropdown menu item with optional children.
 * Displays an icon if provided and highlights the active child link.
 */
export const DropDownMenuItem: React.FC<SideMenuItemType> = ({
  title,
  children,
  icon,
}) => {
  const Icon = icon ? icons[icon] : null;
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  // Determine if any child link is active
  const isActive = children?.some(
    (item) =>
      item.link && item.link.toLowerCase().replace("/", "") === currentPage,
  );

  return (
    <DropDown aria-expanded={!!isActive}>
      <DropDownButton
        className="flex w-full min-w-60 items-center justify-between px-4 py-3 opacity-50 group-focus-within:opacity-100 group-aria-expanded:opacity-100"
        aria-label={title}
      >
        <div className="flex items-center justify-center gap-4">
          {Icon && <Icon className="h-6 w-6" />}
          <span>{title}</span>
        </div>
        {children ? <ChevronDown className="h-4 w-4" /> : null}
      </DropDownButton>
      <DropDownList>
        {children && (
          <li className="flex flex-col bg-white pl-2">
            {children.map((item, index) => (
              <LinkItem key={index} {...item} />
            ))}
          </li>
        )}
      </DropDownList>
    </DropDown>
  );
};

export default DropDownMenuItem;
