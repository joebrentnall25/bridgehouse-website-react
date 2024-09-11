import "./Home.scss";
import { Helmet } from "react-helmet";

// Components
import Bookings from "../../components/BookTable/Bookings";
import Button from "../../components/Buttons/Button";
import Reviews from "../../components/Reviews/Reviews";
import Areas from "../../components/Areas/Areas";

import homeImage from "../../Assets/Images/Home/Home.jpeg";
import eventPreview from "../../Assets/Images/Preview/EventPreview.jpeg";
import roomPreview from "../../Assets/Images/Preview/RoomPreview.jpeg";

const Home = () => {
    const news = [
        {
            title: "Bridgehouse Rooms",
            para: "Book your room at Bridgehouse and experience the beauty of the Peak District. Enjoy a relaxing stay with plenty of opportunities for exploration nearby. Call use to find out more!",
            image: roomPreview,
            imageAlt: "Book a Bridgehouse Room for you stay in the peak district",
            buttonText: "Find out more",
            linkTo: "/Contact"
        },
        {
            title: "Book us for your private event",
            para: "Elevate your next private event with our exceptional service and bespoke menus tailored to your guests. Whether it’s a small gathering, birthday, or special celebration, we offer everything from buffets to BBQs, ensuring every detail is perfect. Let us bring your vision to life and make your occasion truly memorable.",
            image: eventPreview,
            imageAlt: "Bridgehouse for you private event",
            buttonText: "Get in touch",
            linkTo: "/Contact"
        }
    ]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bridgehouse Ambergate | Book your visit today!</title>
            </Helmet>
            <header className="dark">
                <img src={homeImage} alt="" className="home-hero__img" />
            </header>
            <Bookings type="table" dark={true} />
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
            <Reviews className="home-reviews"/>            
        </>
    );
};

export default Home;
