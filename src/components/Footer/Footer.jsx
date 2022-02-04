import "./Footer.scss";
import logo from "../../Assets/Images/logo_white.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
    <footer className="footer">
        <div className="footer__main-content">
            <div className="footer__basic-info">
                <img src={logo} alt=""/>
                <p className="footer__basic-info-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque repellat laudantium minus quis earum fugiat, iure obcaecati tempora beatae vitae sit corporis.</p>
                <a className="footer__link-to-maps" href="https://goo.gl/maps/neh3ysAx2RQHVMJW6">Derby Rd, Ambergate, Belper DE56 2EJ</a>
                <p>Monday-Saturday: <span className="highlight">8am-3pm</span></p>
                <p>Sunday: <span className="highlight">9am-2pm</span></p>
            </div>
            <div className="footer__menus">
                <h4>Menus</h4>
                <Link to="/menus/bar-garden">Bar & Garden</Link>
                <Link to="/menus/restaurant">Restaurant</Link>
                <Link to="/menus/takeaway">Takeaway</Link>
                <Link to="/menus/drinks">Drinks</Link>
            </div>
            <div className="footer__pages">
                <h4>Pages</h4>
                <Link to="/menu/restaurant"></Link>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
            </div>
            <div className="footer__useful-info">
                <h4>Useful Information</h4>
                <a href="tel:+441332482549">01332 482549</a>
                <a href="mailto:test@email.com">test@email.com</a>
                <a href="">Directions</a>
                <a href="">Trip Advisor</a>
                <a href="https://www.facebook.com/BridgeHouseAmbergate"><i className="fab fa-facebook fa-3x"></i></a>
            </div>
        </div>
        <div className="footer__copywrite">
            <p>2021 Bridgehouse Ambergate 
                All rights reserved</p>
        </div>
    </footer>)
}

export default Footer;