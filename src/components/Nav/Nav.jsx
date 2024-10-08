import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/Images/logo_white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Nav.scss";

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="dark" id="nav">
            <div className="nav">
                <div className="nav__main">
                    <button onClick={() => toggleMenu()}><FontAwesomeIcon icon={faBars} /></button>
                    <NavLink to="/home">
                        <img src={logo} alt="Bridgehouse Ambergate" />
                    </NavLink>
                </div>
                <div className="nav__links--large">
                    <ul className={toggle ? "nav__links show-nav" : "nav__links"}>
                        <li><NavLink to="/home" style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#929597'
                        })}><span className="hover">Home</span></NavLink></li>
                        <li><NavLink to="/menus" style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#929597'
                        })}><span className="hover">Our Menus</span></NavLink></li>
                        <li><NavLink to="/contact" style={({ isActive }) => ({
                            color: isActive ? '#FFF' : '#929597'
                        })}><span className="hover">Contact</span></NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Nav;