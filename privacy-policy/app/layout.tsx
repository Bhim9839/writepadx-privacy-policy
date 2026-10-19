import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Privacy Policy | Writepad X",
  description:
    "Learn how Writepad X handles notes, Android permissions, shared files, home-screen widgets, and Google Mobile Ads.",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/writepadx_icon.svg`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/writepadx_icon.svg`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/writepadx_icon.svg`,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
