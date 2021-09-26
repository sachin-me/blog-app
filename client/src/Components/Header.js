import React from "react";
import { Link } from "react-router-dom";

function Header(params) {
  return (
    <div className="header">
      <Link to="/">Blog</Link>
    </div>
  );
}

export default Header;
