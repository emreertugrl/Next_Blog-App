"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import useStore from "../../../../store/useStore";

const Footer = () => {
  const { footerText } = useStore();

  return (
    <div className="bg-gray-700 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left space-y-4">
          <Link href="/" className="text-xl text-white font-bold">
            {footerText}
          </Link>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo beatae et quae atque
            repellat molestias odio sit.
          </p>
        </div>
        <nav className="md:mt-0 mt-4 space-x-8">
          <Link href="/" className="text-md text-white font-bold hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-md text-white font-bold hover:underline">
            About
          </Link>
          <Link href="/blog" className="text-md text-white font-bold hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="text-md text-white font-bold hover:underline">
            Contact
          </Link>
        </nav>
        <div className="md:mt-0 mt-4 space-x-8">
          <Button variant="ghost">
            <Facebook />
          </Button>
          <Button variant="ghost">
            <Instagram />
          </Button>
          <Button variant="ghost">
            <Linkedin />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
