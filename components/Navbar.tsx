"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Nav_Links } from "@/constants/NavLinks";
import { TbMenu, TbX, TbChevronDown, TbPhone, TbUser } from "react-icons/tb";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <header className="bg-black/80 backdrop-blur-3xl fixed z-40 w-full select-none">
      <nav className="max-w-6xl mx-auto select-none shadow-xl flex items-center justify-between py-4 px-6 md:px-14 2xl:px-0">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/favicon.ico"
              alt="TQ"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden h-full gap-6 lg:flex text-[13px]">
          {Nav_Links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(link.href + "/");

            return (
              <li key={link.key} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center cursor-pointer font-medium transition-all duration-500 p-1.5
                      ${
                        isActive
                          ? "border-b-2 border-gray-300 font-medium text-gray-100"
                          : "hover:font-bold text-white hover:text-white"
                      }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          aria-label="Open menu"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <TbX className="w-8 h-8 cursor-pointer text-white" />
          ) : (
            <TbMenu className="w-8 h-8 cursor-pointer text-white " />
          )}
        </button>
        {/* </div> */}
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl rounded-b-4xl text-white overflow-hidden xl:hidden select-none shadow-xl transition-transform duration-300 ease-in-out origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="flex flex-col gap-2 py-6 px-4 text-sm">
          {Nav_Links.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between transition-all duration-500 rounded-full w-full py-3 px-6 hover:bg-white/5 text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
