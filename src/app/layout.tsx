import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import MiddleNavbar from "@/components/navbar/middleNavbar";
import Footer from "@/components/footer/footer";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
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
        <MiddleNavbar />

        <main className="xl:mx-10 lg:mx-10 md:mx-5 sm:mx-5 mx-3">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
