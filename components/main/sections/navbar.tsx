"use client";

import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../../ui/button";
import { cn } from "@/lib/utils";
import { AppleIcon, SearchIcon, ShoppingCart } from "lucide-react";
import { HiOutlineUser } from "react-icons/hi2";
import Image from "next/image";
import MobileMenu from "../mobile-menu";
import CartDropdown from "../cart-dropdown";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  // Get the user data from the session upon login
  const { data: session } = useSession();

  return (
    <header className="">
      {/* For Desktop screens */}
      <div className="border-b top-0 left-0 fixed right-0 bg-white z-[20]">
        <div className="md:container mx-auto">
          <div className="md:flex md:items-center py-4 px-4">
            {/* Logo */}
            <div className="w-[127.34px] hidden md:block">
              <Image
                className="w-[94.34px] h-[19.98px]"
                src={"/logo.png"}
                alt="logo"
                width={1085}
                height={230}
              />
            </div>
            {/* Nav Items */}
            <nav className="flex-1">
              {/* For Desktop screens */}
              <ul className="hidden md:flex items-center md:space-x-4">
                <li>
                  <Link href={"/"} className="nav-links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="nav-links">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="nav-links">
                    Contact
                  </Link>
                </li>
              </ul>
              {/* For Mobile screens */}
            </nav>
            {/* Nav Icons */}
            <div className="flex items-center text-[14px] justify-between md:gap-2">
              <div className="block md:hidden nav-links">
                {/* Here is the mobile menu trigger */}
                <MobileMenu />
              </div>
              <div className="nav-links">
                <SearchIcon size={20} />
              </div>
              {session?.user?.email ? (
                <Avatar onClick={() => signOut()}>
                  <AvatarImage src={session?.user?.image || ""} />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              ) : (
                <>
                  {/* Login functionality here */}
                  <div className="nav-links">
                    <HiOutlineUser size={20} />
                  </div>
                </>
              )}

              <CartDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[70px]"></div>
      <div className="w-full h-10 flex justify-center items-center  md:hidden">
        <Image
          className="w-[94.34px] h-[19.98px]"
          src={"/logo.png"}
          alt="logo"
          width={1085}
          height={230}
        />
      </div>
    </header>
  );
};

export default Navbar;
