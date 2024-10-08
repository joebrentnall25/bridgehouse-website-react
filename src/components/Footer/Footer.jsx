import "./Footer.scss";
import logo from "../../Assets/Images/logo_white.png";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
// import hygeineRating from "../../Assets/Images/hygeine_rating.jpeg"

// Icons
import {BsFacebook} from "react-icons/bs"
import {FaTripadvisor} from "react-icons/fa"

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="footer__main-content">
            <div className="footer__basic-info">
                <img src={logo} alt="bridgehouse logo"/>
                <a className="footer__link-to-maps" target="_blank" rel="noreferrer" href="https://goo.gl/maps/neh3ysAx2RQHVMJW6">Derby Rd, Ambergate, Belper DE56 2EJ</a>
                <p>Monday-Saturday: <span className="highlight">8am-3pm</span></p>
                <p>Sunday: <span className="highlight">9am-2pm</span></p>
                {/* <Button className="footer__hygeine" type="image" to="https://hygieneratings.uk/1364337-bridge-house-ambergate" img={hygeineRating} alt="5* hygeine rating" />  */}
            </div>
            <div className="footer__menus">
                <h4>Menus</h4>
                <Button type="footer" to="/menus" text="Restaurant"/>
                <Button type="footer" to="/menus" text="Bar & Garden"/>
                <Button type="footer" to="/menus" text="Drinks"/>
            </div>
            <div className="footer__pages">
                <h4>Pages</h4>
                <Link to="/menu/restaurant"></Link>
                <Button type="footer" to="/about" text="About Us"/>
                <Button type="footer" to="/contact" text="Contact"/>
            </div>
            <div className="footer__useful-info">
                <h4>Useful Information</h4>
                <a href="tel:+441773270978">01773 270978</a>
                <a href="mailto:info@bridgehouseambergate.co.uk">Email</a>
                <a href="https://goo.gl/maps/yCK5BfKazBZrhiom7" target="_blank" rel="noreferrer">Directions</a>
                <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g2093189-d23163521-Reviews-Bridge_House-Ambergate_Derbyshire_England.html" target="_blank" rel="noreferrer"><FaTripadvisor size={42}/></a>
                <a href="https://www.facebook.com/BridgeHouseAmbergate" target="_blank" rel="noreferrer"><BsFacebook size={42}/></a>
            </div>
        </div>
        <div className="footer__copywrite">
            <p>2021 Bridgehouse Ambergate 
                All rights reserved</p>
        </div>
    </footer>)
}

export default Footer;