/**
 * SideMenu component
 *
 * This component is used to render the side menu. It is
 * a fixed position element that is only visible on large
 * screens. It is hidden by default and revealed when the
 * user hovers over the element. The menu items are rendered
 * using the SideMenuItem component.
 */
import { sideMenuItems } from "@/constants";
import SideMenuItem from "./side-menu-item";

const SideMenu = () => {
  return (
    <nav
      className="fixed left-0 top-0 hidden min-h-[calc(100vh-76px)] w-14 bg-foreground duration-300 ease-in-out hover:w-60 md:block lg:static lg:w-60"
      aria-label="Main navigation"
      role="navigation"
    >
      <ul
        className="sticky top-[76px] overflow-y-auto overflow-x-hidden pt-5"
        aria-label="Main menu"
      >
        {sideMenuItems.map((item, index) => (
          <SideMenuItem key={index} {...item} aria-label={item.title} />
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
