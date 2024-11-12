"use client"
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Button } from "./ui/button";
import { navItems } from "@/constant";
import { INavItems } from "@/types";
import { usePathname } from "next/navigation";

const Header = () => {
  const aboutActive = ['/about/introduction', '/about/members']
  const pathname = usePathname()
  const navLink = navItems.map((item: INavItems) => item.path === '/about' ? <DropdownMenu key={item.label}>
    <DropdownMenuTrigger className={`duration-300 hover:text-[#ed3927] hover:font-bold text-base ${aboutActive.includes(pathname) ? "text-[#ed3927] font-bold border-b border-b-[#ed3927]" : ""}`}>About</DropdownMenuTrigger>

    <DropdownMenuContent>
      <Link href='/about/introduction'> <DropdownMenuItem>
        <Button className="w-full" variant="outline">Introduction</Button>
      </DropdownMenuItem></Link>
      <Link href='/about/members'>
        <DropdownMenuItem>
          <Button className="w-full" variant="outline">Our Members</Button>
        </DropdownMenuItem>
      </Link>
    </DropdownMenuContent>
  </DropdownMenu> : <Link key={item.label} href={item.path} className={`duration-300 hover:text-[#ed3927] hover:font-bold text-base ${pathname === item.path ? "text-[#ed3927] font-bold border-b border-b-[#ed3927]" : ""} `}>
    <li>{item.label}</li>
  </Link>)
  return (
    <header className="sticky top-0 z-50 w-full hidden md:block border-b bg-white">
      <div className="bg-white px-1">
        <div className="text-slate-500 flex items-center justify-between mx-2 py-1">
          <p className="text-sm">Scottish Bangladesh Welfare Association</p>
          <div className="flex gap-2 items-center">
            <div className="cursor-pointer text-black hover:bg-cyan-400 hover:text-white duration-200 p-1">
              <FaFacebookSquare />
            </div>
            <div className="cursor-pointer text-black hover:bg-black hover:text-white duration-200 p-1">
              <FaSquareXTwitter />
            </div>
            <div className="cursor-pointer text-black hover:bg-orange-500 hover:text-white duration-200 p-1">
              <FaInstagram />
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-7 items-center">
          <div className="text-black px-4 col-start-1 col-span-1 text-center border-r py-3">
            <Link className="flex items-center" href="/">
              <Image
                width={100}
                height={100}
                src="/images/logo/main-logo.png"
                alt="Main logo"
              />
            </Link>
          </div>
          <div className="flex justify-between items-center px-3 col-span-5 py-3">
            <div>
              <ul className="flex text-black space-x-6 font-medium text-sm">
                {navLink}
              </ul>
            </div>
            <div>
              <button className="bg-orange-400 font-bold p-2 text-white">
                GET INVOLVED
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
