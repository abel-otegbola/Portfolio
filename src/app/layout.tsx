import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/footer";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import Topbar from "@/components/topbar/topbar";

const roboto = Roboto({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Abel Otegbola Portfolio",
  description: "Frontend website developer and UI designer.",
  keywords: "frontend developer, css react, React website developer",
  authors: [{name: "Abel Otegbola"}],
  openGraph: {
    title: 'Abel Otegbola - Product Designer & Developer',
    description: 'Explore creative designs and innovative solutions from Abel Otegbola.',
    url: 'https://codewithabel.vercel.app',
    siteName: 'Abel Otegbola',
    images: [
      {
        url: 'https://codewithabel.vercel.app/abel-preview.jpg',
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
    images: ['https://codewithabel.vercel.app/abel-preview.jpg'],
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
    <html lang="en" className={cn(" scroll-smooth ", "font-sans", roboto.variable)}>
      <body
        className={`${roboto.className} text-[15px] antialiased text-black bg-[#FBFBFB] dark:bg-[#121212] dark:text-white`}
      >        
        <Topbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
