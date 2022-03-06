// Libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styles
import "./Menu.scss";

// Data
import { menu } from "../../Assets/data/data";

// Components
import MenuSection from "../../components/MenuSection/MenuSection";
import Bookings from "../../components/BookTable/Bookings";
import Button from "../../components/Buttons/Button";


const Menu = () => {
    const { roomId } = useParams();
    const [ room, setRoom ] = useState(roomId);

    useEffect(() => {
        setRoom(roomId);
    }, [roomId])

    const getCategories = () => {
        let categories = [];
        Object.keys(menu).forEach(category => {
            categories.push(category);
        })
        return categories;
    }

    const generateButtons = () => {
        const categories = getCategories();
        
        const buttonHtml = categories.map((category, index) => {
            return <Button key={index} image={menu[category].image} to={`/menus/${category}`} type="menu" className="menu-hero__buttons-btn btn-primary" text={menu[category].altName}/>
        })

        return buttonHtml;
    }

    return (<>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Our Menus | Bridgehouse Ambergate</title>
    </Helmet>
    <header className="container menu-hero">
        <h2 className="menu-hero__title primary">Menus</h2>
        <h3 className="menu-hero__subheader">View our menus.</h3>
        <div className="menu-hero__buttons">
            {generateButtons()}
        </div>
    </header>
    <section className="dark menu">
        <div id="menu" className="container">
            { room === "restaurant" ? <MenuSection data={menu.restaurant.items}/> : null } 
            { room === "bar_garden" ? <MenuSection data={menu.bar_garden.items} /> : null }
            { room === "drinks" ? <MenuSection data={menu.drinks.items} /> : null } 
            { room === "takeaway" ? <MenuSection data={menu.takeaway.items}/> : null } 
        </div>
        <div className="menu__info container">
            <div className="menu__info-card">
                <img className="menu__info-img" src="../../Assets/Images/gluten-free.png" alt=""/>
                <p className="menu__info-desc">Vegan & Gluten Free alternatives available on most items.</p>
                <img className="menu__info-img" src="./assets/images/vegan.png" alt=""/>
                <p className="menu__info-desc">If you have any other dietry requirements please let us know in advance!</p>
            </div>
        </div>
    </section>
    <Bookings type="table"/>
    </>)
}

export default Menu;