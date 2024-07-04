import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import AuthSession from "@/providers/next-auth";
import { getServerAuthSession } from "@/lib/auth";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
});
export const metadata: Metadata = {
  title: "E-Commerce Application",
  description: "A complete e-commerce application with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerAuthSession();
  console.log(session)
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <AuthSession session={session}>{children}</AuthSession>
      </body>
    </html>
  );
}
