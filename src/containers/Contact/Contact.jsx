import "./Contact.scss";
import { Helmet } from "react-helmet";

// Components
import Bookings from "../../components/BookTable/Bookings";
import Map from "../../components/Map/Map";


const Contact = () => {
    // const form = useRef();
    // const [isSuccessful, setIsSuccessful] = useState(false);

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('bridgehouse_support', 'bridgehouse_default_msg', form.current, 'pass')
    //         .then((result) => {
    //             console.log(result.text);
    //             if (result.text === "OK") {
    //                 setIsSuccessful(true)
    //                 setTimeout(() => {
    //                     setIsSuccessful(false)
    //                 }, 15000)
    //             }
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset();
    // };

    return (<>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Contact Us | Bridgehouse Ambergate</title>
        </Helmet>
        <header className="container contact-hero">
            <h2 className="menu-hero__title primary">Contact</h2>
            <h3 className="menu-hero__subheader">Get in touch.</h3>
            <p>We're here to assist with all your reservations. Whether you're looking to book a room, plan an event, or have any other inquiries, our team is ready to help. Get in touch today to discuss your needs and secure your spot.</p>
        </header>
        <section className="about-useful container dark">
            <div className="about-useful-parking">
                <h4 className="about-useful-parking__header">Parking</h4>
                <p className="about-useful-parking__text">We have limited parking on the front of the restaurant.</p>
                <p className="about-useful-parking__text">There is also paid parking at the train station nearby.</p>
            </div>
            <div className="about-useful-info ">
                <h4 className="about-useful-info__header">Nearby Attractions</h4>
                <p className="about-useful-info__text">Shining Cliff Woods (275m)</p>
                <p className="about-useful-info__text">Cromford Canal (2.4km)</p>
                <p className="about-useful-info__text ">Great British Car Journey (1.28km)</p>
            </div>
        </section>
        <Map />
        <section className="about-info container">
            <div className="about-info__address">
                <p>Derby road</p>
                <p>Ambergate</p>
                <p>Belper</p>
                <p>DE56 2EJ</p>
            </div>
            <div className="about-info__contact">
                <a href="tel:+441332482549">01332 482549</a>
                <a href="mailto:test@email.com">test@email.com</a>
            </div>
        </section>
        {/* <div className="contact container">
            <div className="contact__info dark">
                <div className="contact__info-text">
                    <h4 className="contact__info-header">Contact Details</h4>
                    <p>Bridgehouse</p>
                    <p>Derby Road</p>
                    <p>Ambergate</p>
                    <p>Belper</p>
                    <br />
                    <p><a className="contact__info-text-links" href="tel:+441332482549"><i className="fas fa-phone"></i> 01332 482549</a></p>
                    <p><a className="contact__info-text-links" href="mailto:support@bridgehouseambergate.co.uk">Email</a></p>
                    <div className="contact__info-text-times">
                        <br />
                        <h4 className="contact__info-header">Opening Times</h4>
                        <ul>
                            <li>Mon-Sat: <span className="highlight">8am-3pm</span></li>
                            <li>Sun: <span className="highlight">9am-2pm</span></li>
                        </ul>
                        <br />
                        <p>Please note that we stop serving food an hour before close.</p>
                    </div>
                </div>
                <div className="contact__info-links ">
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/BridgeHouseAmbergate"><BsFacebook className="contact__info-links-fb" size={60} /></a>
                    <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g2093189-d23163521-Reviews-Bridge_House-Ambergate_Derbyshire_England.html" target="_blank" rel="noreferrer"><SiTripadvisor className="contact__info-links-ta" size={60} /></a>
                </div>
            </div>
        </div> */}
        <Bookings type="table" />
    </>);
}

export default Contact;