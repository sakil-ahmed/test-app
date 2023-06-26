import React from "react";

const Navbar = ({ setIsMenuOpen }: any) => {
  return (
    <ul className="nav__menu__items">
      <li onClick={() => setIsMenuOpen(false)}>
        <a className="active_menu" href={"#home"}>
          Home
        </a>
      </li>

      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#skills"}>Skills</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#portfolio"}>Portfolio</a>
      </li>
      <li onClick={() => setIsMenuOpen(false)}>
        <a href={"#contact"}>Contact</a>
      </li>
    </ul>
  );
};

export default Navbar;
