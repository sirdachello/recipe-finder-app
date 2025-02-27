import Head from "./head";
import "./globals.css";
import Image from "next/image";
import logo from '../public/Images/food-logo.svg'
import Link from "next/link";

import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
})

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} data-theme="emerald">
      <Head />
      <body>
        <header className="bg-orange-300 h-16 flex justify-around items-center">
          <Link href='/'>
          <Image src={logo} alt="dish" width={48}/>
          </Link>
          <h1 className="font-bold">Recipe finder</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
