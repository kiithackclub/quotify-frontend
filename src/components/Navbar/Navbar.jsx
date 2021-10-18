import React from "react";
import "./Navbar.css";

import logo from "./logo.svg";

export default function Navbar() {
  return (
    <header className="Grid1">
        <logo>
        <img className="logo" src={logo} />
        </logo>
        <nav className="nav">
        <ul className="ul">
          <li>
            <a className="li" href="#"> Quotify </a>
          </li>
          <li>
            <a className="li" href="#">Fetch quote</a>
          </li>
          <li>
            <a className="li" href="#">Push quote</a>
          </li>
          <li>
            <a className="li" href="#">About</a>
          </li>
        </ul>
        </nav>
    </header>
  );
}
