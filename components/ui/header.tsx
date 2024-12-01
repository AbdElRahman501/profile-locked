/**
 * Header component
 *
 * @description
 * This component is the header of the page. It contains the logo, the menu and the user menu.
 * The logo is a link to the homepage.
 * The menu is a list of links to the different pages of the website.
 * The user menu Item is a Link to the profile page and only visible in desktop mode..
 */
import { Bell } from "lucide-react";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import MenuUserItem from "./menu-user";
import MobileMenu from "./menu-mobile";

const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-50 h-[72px] w-full bg-white px-5 shadow-md md:px-10 lg:px-[76px]"
      role="banner"
      aria-label="Header"
    >
      <nav
        className="container mx-auto flex h-full w-full items-center justify-between gap-5"
        aria-label="Main menu"
      >
        <MobileMenu />
        <div className="flex items-center gap-5 md:flex-row-reverse lg:gap-20">
          <Menu />
          <Link href="/" className="min-w-[86px] overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/ab/3d/e2/ab3de2f5cc08f507f728f39c66e596b8.jpg"
              alt="logo"
              width={86}
              height={61}
              className="h-16 object-cover"
              aria-label="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Button className="hidden md:inline-flex" aria-label="Add New Post">
            Add New Post
          </Button>
          <Button
            variant="icon"
            size="icon"
            className="relative lg:ml-9"
            aria-label="Notifications"
          >
            <div className="absolute right-3 top-2 h-2 w-2 rounded-full border border-white bg-red-500" />
            <Bell />
          </Button>
          <MenuUserItem />
        </div>
      </nav>
    </header>
  );
};

export default Header;
