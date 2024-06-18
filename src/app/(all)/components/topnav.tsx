"use client";
import React from "react";
import { FloatingNav } from "../../../components/ui/floating-navbar";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";


export function Topnav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <CiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <CiUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <FaRegMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full flex items-center">
      <FloatingNav navItems={navItems} />
     
    </div>
  );
}
