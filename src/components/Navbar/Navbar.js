import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        // <nav>
        //     <NavLink to='/spending'>Spending</NavLink>
        //     <NavLink to='/transaction'>Transaction</NavLink>
        //     <NavLink to='/category'>Categories</NavLink>
        // </nav>
        <div className="nav-container">
          <nav className={'nav-menu active'}>
            <ul className='nav-menu-items'>
                <li className={'nav-text'}>
                <Link to='/spending'>
                    {/* {item.icon} */}
                    <span>spending</span>
                </Link>
                </li>
                <li className={'nav-text'}>
                <Link to='/transaction'>
                    {/* {item.icon} */}
                    <span>transaction</span>
                </Link>
                </li>
                <li className={'nav-text'}>
                <Link to='/category'>
                    {/* {item.icon} */}
                    <span>category</span>
                </Link>
                </li>              
            </ul>
          </nav>
        </div>
    )
}

export default Navbar;