import React from "react";
import Btn from "./Button";

const NavBar = () => {
  return (
    <nav>
      <h3 className="logo">Recipe App</h3>

      <ul>
         <li>Home</li>
         <li>Recipes</li>
         <li>Blog</li>
         <li>About</li>
         <li>Contact</li>
      </ul>

      <Btn>Book a Table</Btn>
    </nav>
  );
};

export default NavBar;
