import "./header.css";
import { NavLink } from "react-router-dom";
import NavBar from "../navbar/NavBar";

function Header() {
  return (
    <header>
      <div className="nav_container">
        <div className="logo">
          <NavLink className="logo-lnk" to="/">
            <h1>PK Store</h1>
          </NavLink>
        </div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
