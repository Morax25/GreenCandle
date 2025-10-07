import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavItems } from "./NavItems";
import UseDropdown from "./UseDropdown";

const Header = () => {
  return (
    <header className="stikcy top-0 header">
      <div className="container header-wrapper overflow-hidden">
        <Link href="/">
          <Image
            src="assets/icons/logo.svg"
            width={40}
            height={40}
            alt="logo"
            className="h-10 pl-2 scale-130 w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems/>
        </nav>
        <UseDropdown/>
      </div>
    </header>
  );
};

export default Header;
