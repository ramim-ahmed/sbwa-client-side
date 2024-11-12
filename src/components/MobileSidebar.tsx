"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { RiMenu3Fill } from "react-icons/ri"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { usePathname } from "next/navigation"
import { navItems } from "@/constant"
import { INavItems } from "@/types"

export default function MobileSidebar() {
  const pathname = usePathname()
  const aboutActive = ['/about/introduction', '/about/members']
  const navLink = navItems.map((item: INavItems) => item.path === '/about' ? <div>
    <DropdownMenu key={item.label} >
      <DropdownMenuTrigger className="w-full"> <Button variant="outline" className={`w-full ${aboutActive.includes(pathname) ? "bg-red-600 text-white" : ""}`}>ABOUT</Button></DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href='/about/introduction'>
          <DropdownMenuItem>
            <SheetClose asChild><Button className="w-full" variant="outline">INTRODUCTION</Button></SheetClose>
          </DropdownMenuItem>
        </Link>
        <Link href='/about/members'>
          <DropdownMenuItem>
            <SheetClose asChild>
              <Button className="w-full" variant="outline">OUR MEMBERS</Button>
            </SheetClose>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  </div> : <div key={item.label}>
    <Link href={item.path}>
      <SheetClose asChild><Button variant={"outline"} className={`hover:text-red-600 duration-200 w-full ${pathname === item.path ? "bg-red-600 text-white" : ""}`}>{item.label}</Button></SheetClose>
    </Link>
  </div>)
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant={"outline"} size="icon"> <RiMenu3Fill className="w-10 h-10 font-bold" /></Button>
      </SheetTrigger>
      <SheetContent>
        <div>
          <div className=" text-black font-medium text-sm space-y-3">
            {navLink}
          </div>
        </div>
      </SheetContent>
    </Sheet>

  )
}
