import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website.",
  url: "https://harundev.vercel.app/portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TODO: */}
        <div className="w-screen h-max bg-gradient-to-b from-blue-400 to-black">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
