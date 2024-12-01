"use client";

// This component is used to render a single menu item.
// It uses the Next.js Link component to wrap the item in a link.

import { icons } from "@/constants";
import { cn } from "@/lib/utils";
import { SideMenuItemType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem: React.FC<SideMenuItemType> = ({ title, link, icon }) => {
  const Icon = icon ? icons[icon] : null;
  const pathname = usePathname();

  if (!link) return null;
  const currentPage = pathname.split("/").pop();
  const isActive = currentPage === link.toLowerCase().replace("/", "");
  return (
    <Link
      href={link || "#"}
      className={cn(
        "flex w-full min-w-60 items-center justify-between px-4 py-3 opacity-50",
        { "opacity-100": isActive },
      )}
      aria-label={title}
      aria-current={isActive ? "page" : undefined}
    >
      <div className="flex items-center justify-center gap-4">
        <div className="h-6 w-6">{Icon && <Icon className="h-6 w-6" />}</div>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default LinkItem;
