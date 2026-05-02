import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Footer from "../components/footer/footer";
import Header from "@/components/header/header";

const SuisseIntl = localFont({
  src: '../assets/SuisseIntl-Regular.ttf',
})

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
    <html lang="en" className=" scroll-smooth ">
      <body
        className={`${SuisseIntl.className} antialiased text-[#000] bg-[#FFFFFF] dark:bg-[#111011] dark:text-white`}
      >
        <Header />
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
