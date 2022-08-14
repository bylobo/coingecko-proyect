import React from "react";
import "../Styles/Navbar.css";

const Navbar = ({ brand }) => {
  return (
    <div>
      <nav className="nav">
        <a className="" href="/">
          {brand}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
