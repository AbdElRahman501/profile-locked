import { SideMenuItemType } from "@/types";
import {
  BookUser,
  HelpCircle,
  HomeIcon,
  MessageCircle,
  ReceiptTextIcon,
  Search,
  Settings,
  Text,
  UserRound,
} from "lucide-react";

export const icons = {
  home: HomeIcon,
  search: Search,
  message: MessageCircle,
  receipt: ReceiptTextIcon,
  user: UserRound,
  book: BookUser,
  text: Text,
  settings: Settings,
  help: HelpCircle,
};

export const sideMenuItems: SideMenuItemType[] = [
  {
    title: "Dashboard",
    icon: "home",
    children: [
      {
        title: "Dashboard",
        link: "#dashboard",
      },
    ],
  },
  {
    title: "Company Profile",
    icon: "user",
    link: "#my-jobs",
  },
  {
    title: "My Jobs",
    icon: "book",
    children: [
      {
        title: "My Jobs",
        link: "#my-jobs",
      },
    ],
  },
  {
    title: "CV Search",
    icon: "search",
    children: [
      {
        title: "CV Search",
        link: "/",
      },
    ],
  },
  {
    title: "Billing & Subscription",
    icon: "receipt",
    link: "#billing",
  },
  {
    title: "Report",
    icon: "text",
    link: "#report",
  },
  {
    title: "Chat",
    icon: "message",
    link: "#messages",
  },
  {
    kind: "divider",
  },
  {
    kind: "title",
    title: "Settings",
  },
  {
    title: "settings",
    icon: "settings",
    link: "#settings",
  },
  {
    title: "Help center",
    icon: "help",
    link: "#help-center",
  },
];

export const user = {
  name: "John Doe",
  email: "GpO3q@example.com",
  address: "Nasrcity , Cairo , Egypt",
  experience: 10,
  image:
    "https://i.pinimg.com/736x/e8/83/ba/e883ba30bbf3da6ce6b0e22d042128c5.jpg",
  about: `I’m a Medical Ambassador + I am dedicated to transforming
      healthcare access and education in underserved communities. My
      passion for promoting health equity drives me to bridge the gap
      between medical professionals and those in need. Through
      community outreach, education, and advocacy, I strive to empower
      individuals with the knowledge and resources they require for
      better health outcomes. Together, we can build a future where
      quality healthcare is a right, not a privilege.`,

  workExperience: [
    {
      logo: "https://www.pngmart.com/files/21/Hospital-Vector-PNG-Isolated-Image.png",
      title: "Medical Ambassador +",
      start: "2016",
      end: "current",
    },
    {
      logo: "https://www.pngmart.com/files/21/Hospital-Vector-PNG-Isolated-Image.png",
      title: "Medical Ambassador +",
      start: "2016",
      end: "current",
    },
  ],
  education: [
    {
      logo: "https://www.pngmart.com/files/21/Hospital-Vector-PNG-Isolated-Image.png",
      title: "Medical Ambassador +",
      degree: "Medical Ambassador +",
      start: "2016",
      end: "current",
    },
    {
      logo: "https://www.pngmart.com/files/21/Hospital-Vector-PNG-Isolated-Image.png",
      title: "Medical Ambassador +",
      degree: "Medical Ambassador +",
      start: "2016",
      end: "current",
    },
  ],
  skills: ["Communication", "Analytics", "Facebook Ads", "Content Planning"],
};
