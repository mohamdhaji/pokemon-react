import React from "react";
import logo from "../../../assets/images/logo.png";
import StyledLink from "../../utils/styledLink";
export default function Header() {
  return (
    <header className="main-header">
      <img className="header-logo" src={logo} alt="" />
      <nav className="main-header__nav">
        <ul className="main-header__links">
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/pokemon">Pokédex</StyledLink>
          </li>
          <li> <StyledLink to="/legendaries">Legendaries</StyledLink></li>
          <li>Documentation</li>
        </ul>
      </nav>
    </header>
  );
}
