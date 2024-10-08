import "./About.scss";
import { Helmet } from "react-helmet";

// Components
import Reviews from "../../components/Reviews/Reviews";
import Map from "../../components/Map/Map";
import Areas from "../../components/Areas/Areas";
import Bookings from "../../components/BookTable/Bookings"

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | Bridgehouse Ambergate</title>
            </Helmet>
            <header className="container about-hero">
                <h2 className="about-hero__title primary">Bridgehouse</h2>
                <h3 className="about-hero__subheader">About us.</h3>
                <div className="about-hero__info">
                    <p className="about-hero__info-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero consectetur earum explicabo expedita fugiat distinctio mollitia quos tempore modi unde, ratione ab commodi fugit minima sed ipsum. Reiciendis quod laborum vitae harum quo natus ratione eveniet.</p>
                </div>
            </header>
            <div className="about">
                <section className="about-events dark">
                    <h4 className="about-events__heading">Events</h4>
                    <p className="about-events__para">
                        We can host for a variety of different events. If you would like to book for a function or just have more questions. Give us a call or email us.
                    </p>
                    <div className="about-events__contact">
                        <a href="tel:+441773270978">01773 270978</a>
                        <a className="about-events__contact-mail" href="mailto:info@bridgehouseambergate.co.uk">info@bridgehouseambergate.co.uk</a>
                    </div>
                </section>
                <Areas/>
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
                <Map/>
                <section className="about-info container">
                    <div className="about-info__address">
                        <p>Derby road</p>
                        <p>Ambergate</p>
                        <p>Belper</p>
                        <p>DE56 2EJ</p>
                    </div>
                    <div className="about-info__contact">
                        <a href="tel:+441773270978">01773 270978</a>
                        <a href="mailto:info@bridgehouseambergate.co.uk">info@bridgehouseambergate.co.uk</a>
                    </div>
                </section>
                <Reviews/> 
                <Bookings type="table"/>
            </div>
        </>
    )
}

export default About;