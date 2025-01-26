import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><div className="container mx-auto p-4">

          <nav className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-orange-600">
                <Link href="/">La-a-la</Link>
              </h1>
              <ul className="flex space-x-6 ml-8">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-orange-600 cursor-pointer">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-gray-600 hover:text-orange-600 cursor-pointer">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/transactions" className="text-gray-600 hover:text-orange-600 cursor-pointer">
                    Transactions
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="text-gray-600 hover:text-orange-600 cursor-pointer">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link href="/savings" className="text-gray-600 hover:text-orange-600 cursor-pointer">
                    Savings
                  </Link>
                </li>
                <li>
                  <Link href="/settings" className="text-gray-600 hover:text-orange-600 cursor-pointer">
                    Settings
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}
