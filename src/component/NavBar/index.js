import React from "react";

export const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="logo.png" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="menu 1">1</a></li>
          <li><a href="menu 2">2</a></li>
          <li><a href="menu 3">3</a></li>
        </ul>
      </div>
    </nav>
  );
}