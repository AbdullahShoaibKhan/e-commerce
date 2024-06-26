import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import BottomNavbar from "@/components/navbar/bottomNavbar";
import MiddleNavbar from "@/components/navbar/middleNavbar";
import Footer from "@/components/footer/footer";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});
export const metadata: Metadata = {
  title: "E-Commerce Application",
  description: "A complete e-commerce application with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <MiddleNavbar/>
        <BottomNavbar/>

        <main className="mx-10">{children}</main>
        <Footer/>
        </body>
    </html>
  );
}
