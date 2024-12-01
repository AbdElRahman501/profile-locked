"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  name: string;
  link: string;
  children?: MenuItemProps[];
}

const MenuItem: React.FC<MenuItemProps> = ({ name, link, children }) => {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop();

  // Check if the current page matches the link
  const isActive = currentPage === link.toLowerCase().replace("/", "");

  return (
    <li
      className={cn(
        "group relative py-2 hover:underline", // Apply base class for hover effect
        { "text-primary underline": isActive }, // Apply active class if the link is active
      )}
    >
      <Link href={link} className="block w-full">
        {name}
      </Link>
      {children && children.length > 0 ? (
        <ul className="absolute left-0 mt-1 hidden w-60 border bg-white p-4 text-left shadow-lg group-hover:block">
          {children.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
