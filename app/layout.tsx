import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/header";
import SideMenu from "@/components/ui/side-menu";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Profile Lock",
    template: "%s | Profile Lock",
  },
  description: "Find the perfect profile lock for your social media accounts.",
  openGraph: {
    title: "Profile Lock",
    description:
      "Find the perfect profile lock for your social media accounts.",
    url: baseUrl,
    siteName: "Profile Lock",
    images: [
      {
        url: `/screen.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Profile Lock",
    description:
      "Find the perfect profile lock for your social media accounts.",
    creator: "Abd El-Rahman Ahmed",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const epilogue = localFont({
  src: "./fonts/Epilogue-VariableFont_wght.ttf",
  variable: "--font-epilogue",
  weight: "400 600 700 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.variable}>
        <main>
          <Header />
          <div className="flex">
            <SideMenu />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
