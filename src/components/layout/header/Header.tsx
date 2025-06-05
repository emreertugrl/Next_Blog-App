"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import { Search, User } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "../../modeToggle";
import useStore from "../../../../store/useStore";

const Header = () => {
  const { headerText } = useStore();
  return (
    <div className="bg-blue-400 font-montserrat shadow-sm top-0">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl text-white font-bold">
          {headerText}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-xl text-white font-bold hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-xl text-white font-bold hover:underline">
            About
          </Link>
          <Link href="/blog" className="text-xl text-white font-bold hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="text-xl text-white font-bold hover:underline">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button variant="outline">
            <Search />
          </Button>
          <Link href="/login">
            <Button variant="outline">
              <User />
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
