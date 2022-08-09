import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <NavLink to='/spending'>Spending</NavLink>
            <NavLink to='/transaction'>Transaction</NavLink>
            <NavLink to='/category'>Categories</NavLink>
        </nav>
    )
}

export default Navbar;