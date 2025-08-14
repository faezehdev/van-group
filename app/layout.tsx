import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
const yekanBakh = localFont({
  src: [
    {
      path: "./lib/fonts/YekanBakh-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./lib/fonts/YekanBakh-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./lib/fonts/YekanBakh-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-yekanbakh", 
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className}`}>
           <Header/>
        {children}
         <Footer/>
      </body>
    </html>
  );
}
