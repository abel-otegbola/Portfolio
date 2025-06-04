import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer/footer";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Abel Otegbola Portfolio",
  description: "Full stack website developer and UI designer with experience building amazing products.",
  keywords: "fullstack developer, css react, React website developer",
  authors: [{name: "Abel Otegbola"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" scroll-smooth ">
      <body
        className={`${inter.className} antialiased text-[14px] text-[#000] bg-[#F6FFFC] dark:bg-[#101010] dark:text-white/[0.9]`}
      >
        <Header />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
