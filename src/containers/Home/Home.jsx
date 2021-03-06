import "./Home.scss";
import { Helmet } from "react-helmet";

// Components
import Bookings from "../../components/BookTable/Bookings";
import Button from "../../components/Buttons/Button";
import Reviews from "../../components/Reviews/Reviews";
import Areas from "../../components/Areas/Areas";

import heroImage from "../../Assets/Images/bh_hero.jpg";

const Home = () => {
    const news = [
        {
            title: "View Our Story",
            para: "Find out a little more about bridgehouse and how it all started.",
            image: "./something.png",
            imageAlt: "Bridgehouse ",
            buttonText: "Find out more",
            linkTo: "/About"
        },
        {
            title: "Want to be notified?",
            para: "Sign up to our mailing list to hear about any new news about Bridgehouse.",
            image: "./something.png",
            imageAlt: "Image alt",
            buttonText: "Sign Up",
            linkTo: "/About"
        }
    ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bridgehouse Ambergate | Book your visit today!</title>
            </Helmet>
            <header className="dark">
                <div className="home-hero">
                <div className="home-hero__content">    
                        <h3 className="home-hero__content-title">Welcome to Bridgehouse</h3>
                        <p className="home-hero__content-subtitle">Be sure to check out our menus and book a table before your next visit.</p>
                        <Button to="/menus" type="primary" text="View Menus"/>
                    </div>
                    <img src={heroImage} alt="" className="home-hero__img" />
                    
                </div>
            </header>
            <Areas/>
            <section className="home-news">
                {news.map((article, index) => {
                    return (
                    <div key={index} className="home-news__article">
                        <h3 className="home-news__article-title">{article.title}</h3>
                        <img className="home-news__article-img" src={article.image} alt={article.imageAlt} />
                        <p className="home-news__article-para">{article.para}</p>
                        <div className="home-news__article-btn">
                            <Button type="secondary" to={article.linkTo} text={article.buttonText}/>
                        </div>
                    </div>)
                })}
            </section>
            <Reviews/>
            <Bookings type="table" />
        </>
    );
};

export default Home;
