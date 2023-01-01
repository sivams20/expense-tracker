import React from "react";
import { Link } from "react-router-dom";
import { menuList } from "../../util/constants";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="nav-menu active">
        <ul className="nav-menu-items">
          {menuList.map((menu) => (
            <li className="nav-text" key={menu.name}>
              <Link to={menu.link}>
                {/* {item.icon} */}
                <span>{menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
