import React from "react";
import HeaderLogo from "./HeaderLogo";
import Nebvar from "./Nebvar";

function Header() {
  return (
    <header className="flex items-center mb-12 justify-between">
      <HeaderLogo/>
      <Nebvar/>
    </header>
  );
}

export default Header;
