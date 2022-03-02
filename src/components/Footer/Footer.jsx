import "./Footer.scss";
import logo from "../../Assets/Images/logo_white.png";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

// Icons
import {BsFacebook} from "react-icons/bs"
import {FaTripadvisor} from "react-icons/fa"

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="footer__main-content">
            <div className="footer__basic-info">
                <img src={logo} alt=""/>
                <a className="footer__link-to-maps" href="https://goo.gl/maps/neh3ysAx2RQHVMJW6">Derby Rd, Ambergate, Belper DE56 2EJ</a>
                <p>Monday-Saturday: <span className="highlight">8am-3pm</span></p>
                <p>Sunday: <span className="highlight">9am-2pm</span></p>
            </div>
            <div className="footer__menus">
                <h4>Menus</h4>
                <Button type="footer" to="/menus/restaurant" text="Restaurant"/>
                <Button type="footer" to="/menus/bar_garden" text="Bar & Garden"/>
                <Button type="footer" to="/menus/drinks" text="Drinks"/>
            </div>
            <div className="footer__pages">
                <h4>Pages</h4>
                <Link to="/menu/restaurant"></Link>
                <Button type="footer" to="/about" text="About Us"/>
                <Button type="footer" to="/contact" text="Contact"/>
            </div>
            <div className="footer__useful-info">
                <h4>Useful Information</h4>
                <a href="tel:+441332482549">01332 482549</a>
                <a href="mailto:support@bridgehouseambergate.co.uk">Email</a>
                <a href="https://goo.gl/maps/yCK5BfKazBZrhiom7" target="_blank">Directions</a>
                <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g2093189-d23163521-Reviews-Bridge_House-Ambergate_Derbyshire_England.html" target="_blank"><FaTripadvisor size={42}/></a>
                <a href="https://www.facebook.com/BridgeHouseAmbergate"><BsFacebook size={42}/></a>
            </div>
        </div>
        <div className="footer__copywrite">
            <p>2021 Bridgehouse Ambergate 
                All rights reserved</p>
        </div>
    </footer>)
}

export default Footer;