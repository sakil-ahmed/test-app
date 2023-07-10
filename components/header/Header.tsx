import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Menubar from "./navbar/Navbar";
import logo from "./../../assets/name-logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header" id="header">
      <div className="container__fluid">
        <div className="row">
          
          <div className="logo">
            <a href={"#home"}>
              <Image src={logo} alt="Sakil Logo" priority={true} />
            </a>
          </div>
          <div className="mobile__menu__bar">
          <button
              onClick={() => setIsMenuOpen(true)}
              className="mobile__menu__bar__btn"
            >
              <HiOutlineMenuAlt1 />
            </button>
          </div>
          <nav className={`nav__menu ${isMenuOpen && "nav__menu__open"}`}>
            <div className="close__menu">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="close__menu__btn"
              >
                <MdClose />
              </button>
            </div>
            <Menubar setIsMenuOpen={setIsMenuOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
