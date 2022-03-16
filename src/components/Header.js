import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import { Cart } from "../Context";
import { useContext } from "react";

const Header = () => {
  const { cart } = useContext(Cart);

  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home Page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
