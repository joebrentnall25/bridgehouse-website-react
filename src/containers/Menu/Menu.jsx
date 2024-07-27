// Libraries
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styles
import "./Menu.scss";

// Data
import { menu } from "../../Assets/data/data";

// ComponentsMenuSection";
import Bookings from "../../components/BookTable/Bookings";
import Button from "../../components/Buttons/Button";

const MenuList = ({ menuData }) => {
    const menuCategories = menuData.reduce((acc, item) => {
        const { category } = item;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc
    }, {});
    return (
        <div className="menu">
            {
                Object.keys(menuCategories).map((category) => (
                    <>
                        <div className="menu-header">
                            <h4>{category}</h4>
                        </div>
                        <div className="menu-section">
                            {
                                menuCategories[category].map(item => (
                                    <div className="menu-section-item">
                                        <div className="menu-section-item-header">
                                            <h4 style={{ width: "70%" }}>{item.item}</h4>
                                        </div>
                                        <div>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                ))
            }
        </div>
    )
}

const Menu = () => {
    const menuTitles = menu.map(section => section.altName)
    const [activeMenu, setActiveMenu] = useState(0)
    const handleMenuChange = menuIndex => {
        setActiveMenu(menuIndex)
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
                {menuTitles.map((title, i) => {
                    return <Button
                        className="menu-hero__buttons-button"
                        type="menu"
                        onClick={() => handleMenuChange(i)}
                        text={title}
                        isActive={i === activeMenu}
                    />
                })}
            </div>
        </header>
        <section className="container dark">
            <MenuList menuData={menu[activeMenu].items} />
        </section>
        <Bookings type="table" />
    </>)
}

export default Menu;