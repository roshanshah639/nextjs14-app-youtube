import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Js 14 - Latest App",
  description: "Generated by Roshan Shah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col items-center justify-between pt-4">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
