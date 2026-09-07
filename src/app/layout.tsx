import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/footer/footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const lufga = localFont({
  src: [
    {
      path: "../assets/lufga/Lufga-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/lufga/Lufga-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/lufga/Lufga-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/lufga/Lufga-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abel Otegbola Portfolio",
  description: "Full stack website developer and UI designer with experience building amazing products.",
  keywords: "fullstack developer, css react, React website developer",
  authors: [{name: "Abel Otegbola"}],
  openGraph: {
    title: 'Abel Otegbola - Product Designer & Developer',
    description: 'Explore creative designs and innovative solutions from Abel Otegbola.',
    url: 'https://codewithabel.tech',
    siteName: 'Abel Otegbola',
    images: [
      {
        url: 'https://codewithabel.tech/abel-preview.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abel Otegbola - Product Designer & Developer',
    description: 'Explore creative designs and innovative solutions from Abel Otegbola.',
    images: ['https://codewithabel.tech/abel-preview.jpg'],
    creator: '@Abel_Otegbola',
    site: '@Abel_Otegbola',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(" scroll-smooth ", "font-sans", geist.variable)}>
      <body
        className={`${lufga.className} text-[15px] antialiased text-black bg-[#FFFFFF] dark:bg-dark dark:text-white`}
      >        
        {children}
        <Footer />
      </body>
    </html>
  );
}
