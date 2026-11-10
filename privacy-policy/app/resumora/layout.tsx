import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Resumora",
  description:
    "Learn how Resumora handles resume files, storage access, and advertising.",
  authors: [{ name: "Bhim Kumar Yadav" }],
  publisher: "Nitya App Studio",
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resumora_app_icon.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resumora_app_icon.png`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resumora_app_icon.png`,
  },
};

export default function ResumoraLayout({
  children,
}: LayoutProps<"/resumora">) {
  return children;
}
