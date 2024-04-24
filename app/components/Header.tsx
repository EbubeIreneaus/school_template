import React, { } from "react";
import { NavTypes } from "../types/NavLinks.types";

import Link from "next/link";
import Image from "next/image";

function Header() {

  const nav_links: NavTypes[] = [
    { title: "home", href: "/", icon: "", submenu: [] },
    { title: "about", href: "/about", icon: "", submenu: [] },
    { title: "cources", href: "/course", icon: "", submenu: [] },
    { title: "Blog", href: "/blog", icon: "", submenu: [] },
    { title: "contact", href: "/contact", icon: "", submenu: [] },
  ];

  return (
    <header>
      <div className="hidden lg:flex justify-between items-center h-14 px-10  bg-orange-600 text-white">
        <ul className="flex gap-7 *:text-sm">
          <li className="flex items-center gap-3">
            <i className="pi pi-phone"></i>
            <span>+234 806 198 2520</span>
          </li>
          <li className="flex items-center gap-3">
            <i className="pi pi-envelope"></i>
            <span>contact@ourschool.com</span>
          </li>
        </ul>

        <Link
          href=""
          className=" h-full bg-blue-800 flex items-center px-7 text-sm"
        >
          <span>Apply Now</span>
        </Link>
      </div>

      <div className="h-[100px] border flex justify-between items-center px-12 text-white">
        <div className="w-40">
          <Image src="/image/logo.png" alt="School Logo" width={250} height={80}/>
        </div>

        <ul className="h-full hidden lg:flex items-center gap-5 ">
          {
            nav_links.map(link => (
              <li key={link.title} className="uppercase text-sm font-semibold !text-black/50 !hover:text-orange-500">
                {
                  <Link href={link.href}> {link.title}</Link>
                }
              </li>
            ))
          }
        </ul>
        <button className="ring-1 rounded ring-orange-500 py-2 px-3 text-black lg:hidden">
          <i className="pi pi-bars"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
