/**
 * Mobile menu component
 *
 * @description
 * This component is used to show the sidebar on mobile devices.
 * When the user clicks on the hamburger icon, the menu slides in from the left.
 * The menu is hidden by default and displayed when the user clicks on the hamburger icon.
 * The menu is also hidden when the user clicks outside of the menu.
 */
"use client";
import { useState } from "react";
import SideMenuItem from "./side-menu-item";
import { sideMenuItems } from "@/constants";
import HamburgerIcon from "../icons/hamburger-icon";
import useLockScroll from "../hooks/useLockScroll";
import Backdrop from "./backdrop";

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);

  /**
   * Lock the scroll when the menu is open
   */
  useLockScroll(isOpen);

  return (
    <>
      {/* Mobile menu toggle button */}
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        className="group h-10 w-10 text-2xl text-black focus:outline-none sm:w-[76px] sm:text-3xl md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <HamburgerIcon />
      </button>

      {/* Mobile menu backdrop */}
      <Backdrop isOpen={isOpen} onClick={closeMenu} />

      {/* Mobile menu  */}
      <aside
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
        className="h-[calc(100dvh-76px] fixed inset-0 top-[72px] z-20 w-[80vw] bg-foreground duration-700 ease-in-out md:hidden"
        id="mobile-menu"
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1 p-4">
          {sideMenuItems.map((item, index) => (
            <SideMenuItem key={index} {...item} />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default MobileMenu;
