import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { BsCart } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function NavBar() {
  const [active, setActive] = useState("menu-active");

  return (
    <nav>
      <div className="navbar">
        <ul
          className={
            active === "close-active" ? "active nav_lists" : "nav_lists"
          }
        >
          <li>
            <NavLink to="/" className="navbar_link home_link">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className="navbar_link contact_link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar_link about_link">
               Singleproduct
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/singleproduct"
              className="navbar_link singleproduct_link"
            >
               Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="navbar_link login">
              <div className="btn">Login</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar_link cart_link">
              <BsCart className="cart_trolley" />
              <span className="cart_total">10</span>
            </NavLink>
          </li>
        </ul>

        <div className="nav_items">
          <div
            className={
              active === "menu-active" ? "menu-active" : "menu-inactive"
            }
          >
            <AiOutlineMenu onClick={() => setActive("close-active")} />
          </div>
          <div
            className={ 
              active === "close-active" ? "close-active" : "close-inactive"
            }
          >
            <AiOutlineClose onClick={() => setActive("menu-active")} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
