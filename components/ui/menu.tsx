import { menuList } from "@/constants/header";
import MenuItem from "./menu-item";

const Menu: React.FC = () => {
  return (
    <ul className="hidden md:flex text-sm text-black/80 font-epilogue font-semibold gap-5 text-center items-center">
      {menuList.map((item) => (
        <MenuItem key={item.name} {...item} />
      ))}
    </ul>
  );
};

export default Menu;
