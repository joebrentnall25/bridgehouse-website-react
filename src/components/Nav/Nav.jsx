import { useState } from "react";
import {NavLink} from "react-router-dom";
import logo from "../../Assets/Images/logo_white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Nav.scss";

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
        console.log(toggle);
    }

    return (
    <nav className="dark container">
        <div className="nav">            
            <div className="nav__main">
                <button onClick={() => toggleMenu()}><FontAwesomeIcon icon={faBars}/></button>
                <img src={logo}alt="Bridgehouse Ambergate"/>
            </div>
            <div className="nav__links--large">
                <ul className={toggle ? "nav__links show-nav" : "nav__links"}>
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/menus/restaurant">Menus</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </div>
    </nav>)
}

export default Nav;