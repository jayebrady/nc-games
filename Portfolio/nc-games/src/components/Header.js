import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="Header">
        <Link to="/">Jaye's House of Games</Link>
      </h1>
    </div>
  );
};

export default Header;
