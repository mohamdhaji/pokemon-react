import React from "react";
import { NavLink } from "react-router-dom";

export default function StyledLink({ to, children }) {
  return (
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "white",
      }}
      style={{ color: "inherit", textDecoration: "inherit" }}
      to={to}
      exact
    >
      {children}
    </NavLink>
  );
}
