"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn(
        "flex justify-between fixed z-50 w-full  px-6 py-4 border-b-2 lg:px-10 items-center",
        {
          "bg-primary-foreground": width < 640,
          "bg-primary": width >= 640,
        }
      )}
    >
      {width < 640 ? (
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={90}
            height={90}
            className="ml-[-21px]"
          />
        </Link>
      ) : (
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            src="/icons/grem-full-logo-svg.svg"
            alt="logo"
            width={80}
            height={90}
            className="ml-[-21px]"
          />
        </Link>
      )}
      <div className="flex gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <ModeToggle />
        {width < 640 ? <MobileNav /> : null}
      </div>
    </nav>
  );
};

export default Navbar;
