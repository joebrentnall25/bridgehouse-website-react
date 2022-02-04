import {Link} from "react-router-dom";
import logo from "../../Assets/Images/logo_white.png";

import "./Nav.scss";

const Nav = () => {
    return (
    <nav className="dark container">
        <div id="nav" className="nav">
            <img src={logo}alt="Bridgehouse Ambergate"/>
            <div className="nav__links">
                <ul className="nav__links-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menus/restaurant">Menus</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </nav>)
}

export default Nav;