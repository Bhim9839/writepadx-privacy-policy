import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PDFusion",
  description:
    "Learn how PDFusion handles PDF files, file access, and internet connectivity.",
  authors: [{ name: "Bhim Kumar Yadav" }],
  publisher: "Nitya App Studio",
};

export default function AppPolicyLayout({
  children,
}: LayoutProps<"/app-policy">) {
  return children;
}
