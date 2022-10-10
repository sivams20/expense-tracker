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
        <>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            </Link>
          </div>
          <nav className={'nav-menu active'}>
          {/* <nav className={'nav-menu'}> */}
            <ul className='nav-menu-items'>
              {/* {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })} */}
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
      </>
    )
}

export default Navbar;