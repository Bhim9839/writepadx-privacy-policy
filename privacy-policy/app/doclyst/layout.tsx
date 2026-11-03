import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Doclyst",
  description:
    "Learn how Doclyst handles your documents on your device and uses internet access to display ads.",
  authors: [{ name: "Bhim Kumar Yadav" }],
  publisher: "Nitya App Studio",
};

export default function DoclystLayout({
  children,
}: LayoutProps<"/doclyst">) {
  return children;
}
