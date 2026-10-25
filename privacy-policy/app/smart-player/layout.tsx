import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Smart Player",
  description:
    "Learn how Smart Player accesses local media files and uses internet connectivity.",
};

export default function SmartPlayerLayout({
  children,
}: LayoutProps<"/smart-player">) {
  return children;
}
