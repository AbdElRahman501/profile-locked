import Image from "next/image";
import Link from "next/link";

const MenuUserItem: React.FC = () => {
  return (
    <Link
      href="#profile"
      className="hidden items-center gap-4 md:inline-flex"
      aria-label="User profile" // Accessibility improvement
    >
      <Image
        src={
          "https://scontent.faly8-2.fna.fbcdn.net/v/t39.30808-6/358672940_748990513900305_5671391693226161337_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=wCbaViRx23UQ7kNvgGttS3S&_nc_zt=23&_nc_ht=scontent.faly8-2.fna&_nc_gid=AvKbpUaRIy3gpJsxiSoszGB&oh=00_AYBjF1KQwK132Ub1ke7n61AflwhLGNQrVSVysui7nl5ZVA&oe=675288AD"
        }
        alt={`profile picture`} // Descriptive alt text for accessibility
        width={50}
        height={50}
        className="aspect-square rounded-full object-cover"
      />
    </Link>
  );
};

export default MenuUserItem;
