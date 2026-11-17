import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Musynx",
  description:
    "Learn how Musynx handles music playback, device permissions, and connected services.",
  authors: [{ name: "Bhim Kumar Yadav" }],
  publisher: "Nitya App Studio",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/musynx_app_icon.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/musynx_app_icon.png`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/musynx_app_icon.png`,
  },
};

export default function MusynxLayout({
  children,
}: LayoutProps<"/musynx">) {
  return children;
}
