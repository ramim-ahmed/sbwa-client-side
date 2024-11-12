import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";

import { Button } from "./ui/button";
import MobileSidebar from "./MobileSidebar";

const MobileHeader = () => {
  return (
    <header className="sticky top-0 w-full md:hidden z-50 bg-white border-b">
      <div className="bg-white px-1 ">
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
        <div className="flex justify-between items-center px-4">
          <div className="text-black px-4  text-center border-r py-3">
            <Link className="flex items-center" href="/">
              <Image
                width={40}
                height={40}
                src="/images/logo/main-logo.png"
                alt="Main logo"
              />
            </Link>
          </div>
          <div>
            <MobileSidebar />
            {/* <div>
              <ul className="flex text-black gap-3 font-bold text-sm">
                <Link href="/" className="hover:text-sky-500 duration-200">
                  <li>HOME</li>
                </Link>
                <Link href="/news" className="hover:text-sky-500 duration-200">
                  <li>NEWS</li>
                </Link>
                <Link
                  href="/features"
                  className="hover:text-sky-500 duration-200"
                >
                  <li>FEATURES</li>
                </Link>
                <Link
                  href="/gallery"
                  className="hover:text-sky-500 duration-200"
                >
                  <li>GALLERY</li>
                </Link>
                <Link
                  href="/events"
                  className="hover:text-sky-500 duration-200"
                >
                  <li>EVENTS</li>
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-sky-500 duration-200"
                >
                  <li>CONTACT</li>
                </Link>
              </ul>
            </div>
            <div>
              <button className="bg-orange-400 font-bold p-2 text-white">
                GET INVOLVED
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
