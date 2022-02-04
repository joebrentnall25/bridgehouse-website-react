import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Menu.scss";
import MenuSection from "../../components/MenuSection/MenuSection";
import { menu } from "../../Assets/data/data";

const Menu = () => {
    const { roomId } = useParams();
    const [ room, setRoom ] = useState(roomId);
    console.log(menu); 

    useEffect(() => {
        setRoom(roomId);
    }, [roomId])

    return (<>
    <header className="container menu-hero">
        <h2 className="menu-hero__title primary">Menus</h2>
        <h3 className="menu-hero__subheader">View our menus.</h3>
        <div className="menu-hero__buttons">
            <Link to="/menus/restaurant"><button data-menu="restaurant" className="menu-hero__buttons-btn btn-primary" onClick={()=> { setRoom("restaurant")
            }}>Restaurant</button></Link>
            <Link to="/menus/bar-garden"><button data-menu="bar-garden" className="menu-hero__buttons-btn btn-primary" onClick={()=> { setRoom("bar-garden")
            }}>Champagne Breakfast</button></Link>
            <Link to="/menus/drinks"><button data-menu="drinks" className="menu-hero__buttons-btn btn-primary" onClick={()=> { setRoom("drinks")
            }}>Drinks</button></Link>
            <Link to="/menus/takeaway"><button data-menu="takeaway" className="menu-hero__buttons-btn btn-primary" onClick={()=> { setRoom("takeaway")
            }}>Takeaway</button></Link>
        </div>
    </header>
    <section className="dark menu">
        <div className="menu__info container">
            <div className="menu__info-card">
                <img className="menu__info-img" src="./assets/images/gluten-free.png" alt=""/>
                <p className="menu__info-desc">Gluten Free alternatives on most items.</p>
                <img className="menu__info-img" src="./assets/images/vegan.png" alt=""/>
                <p className="menu__info-desc">Vegan Alternatives available</p>
            </div>
        </div>
        <div id="menu" className="container">
            <MenuSection data={menu}/>
        </div>
    </section>
    </>)
}

export default Menu;