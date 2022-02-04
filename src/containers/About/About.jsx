import "./About.scss";

const About = () => {
    return (
        <>
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
                        <a href="tel:+441332482549">01332 482549</a>
                        <a className="about-events__contact-mail" href="mailto:test@email.com">test@email.com</a>
                    </div>
                </section>
                <section className="areas container">
                    <h2 className="areas__heading">Our Areas</h2>
                    <p className="areas__para">Select an area to see a description, image and button leading to menu.</p>
                    <ul className="areas__buttons">
                        <li><button data-area="Restaurant" className="areas__button areas__buttons--active">Restaurant</button></li>
                        <li><button data-area="Bar" className="areas__button">Bar</button></li>
                        <li><button data-area="Garden" className="areas__button">Garden</button></li>
                        <li><button data-area="Takeaway" className="areas__button">Takeaway</button></li>
                    </ul>
                    <p className="areas__description" id="areas__description"></p>
                    <a id="areas__link" href="/menu.html" className="areas__link btn-primary">View Menu</a>
                </section>
                <section className="about-useful container dark">
                    <div className="about-useful-parking">
                        <h4 className="about-useful-parking__header">Parking</h4>
                        <p className="about-useful-parking__text">We have limited parking on the front of the restaurant.</p>
                        <p className="about-useful-parking__text">There is also paid parking at the train station nearby.</p>
                    </div>
                    <div className="about-useful-info">
                        <h4 className="about-useful-info__header">Nearby Attractions</h4>
                        <p className="about-useful-info__text">Shining Cliff Woods (275m)</p>
                        <p className="about-useful-info__text">Cromford Canal (2.4km)</p>
                        <p className="about-useful-info__text ">Great British Car Journey (1.28km)</p>
                    </div>
                </section>
                <section className="about-map" id="map">
                </section>
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
                <section className="reviews">
                    <div className="reviews__header container">
                        <h2 className="reviews__heading primary">Our Reviews</h2>
                        <h3>Hear what our customers say.</h3>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                        <div className="reviews__buttons">
                            <button className="btn-small" id="reviews__buttons--previous">Previous</button>
                            <button className="btn-small" id="reviews__buttons--next">Next</button>
                        </div>
                    </div>
                    <div className="reviews__review">
                        <h2 id="reviews__name" className="reviews__name tertiary">Ellie Clarke (2021)</h2>
                        <p id="reviews__para" className="reviews__para italics">"This is my review LOL"</p>
                    </div>
                </section>
                <section className="about-gallary container">
                    <div className="about-gallary__img"></div>
                    <div className="about-gallary__img"></div>
                    <div className="about-gallary__img"></div>
                    <div className="about-gallary__img"></div>
                    <div className="about-gallary__img"></div>
                    <div className="about-gallary__img"></div>
                </section>
            </div>
        </>
    )
}

export default About;