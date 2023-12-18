"use client";

import { BarChart } from "lucide-react";
import React, { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = () => {

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <BarChart size={20} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="w-[127.34px] block">
                <Image
                  className="w-[94.34px] h-[19.98px]"
                  src={"/logo.png"}
                  alt="logo"
                  width={1085}
                  height={230}
                />
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav className="h-[100vh] mt-[5rem]">
            {/* For Desktop screens */}
            <ul className="flex flex-col gap-10">
              <li className="!text-left">
                <Link href={"/"} className="nav-links inline-block text-5xl">
                  Home
                </Link>
              </li>
              <li className="!text-left">
                <Link
                  href={"/"}
                  className="nav-links inline-block text-5xl text-left"
                >
                  Shop
                </Link>
              </li>
              <li className="!text-left">
                <Link href={"/"} className="nav-links inline-block text-left">
                  Contact
                </Link>
              </li>
            </ul>
            {/* For Mobile screens */}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
