import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="bg-size-color bg-position-center py-5">
      <div className="container">
        <h1 className="text-start text-light text-uppercase">
          Fast food catalogue
        </h1>
      </div>
    </header>
  );
};

export default Header;
