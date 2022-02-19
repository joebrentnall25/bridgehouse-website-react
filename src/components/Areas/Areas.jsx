import "./Areas.scss";
import { Link } from "react-router-dom";

// Components
import Button from "../Buttons/Button";
import { useState } from "react";

const Areas = () => {
    const [link, setLink] = useState("/menus/restaurant");
    const [image, setImage] = useState("../../../public/Images/placeholder_area.jpeg")

    const selectArea = (area) => {
        switch(area){
            case "restaurant":
                setLink("/menus/restaurant");
                setImage("../../../public/Images/placeholder_area.jpeg");
                console.log("restaurant")
                break;
            case "bar":
                setLink("/menus/bar_garden");
                console.log("bar");
                break;
            case "garden":
                setLink("/menus/bar_garden");
                console.log("garden")
                break;
        }
    }

    return (
    <div className="areas">
        <h2 className="areas__heading">Our Areas</h2>
        <p className="areas__para">Select an area to see a description, image and button leading to menu.</p>
        <ul className="areas__buttons">
            <li><Button type="simple" text="Restaurant" onClick={() => selectArea("restaurant")}/></li>
            <li><Button type="simple" text="Bar" onClick={() => selectArea("bar")}/></li>
            <li><Button type="simple" text="Garden" onClick={() => selectArea("garden")}/></li>
        </ul>
        <p className="areas__description" id="areas__description"></p>
        <Link to={link}>View Menu</Link>
        <img className="areas__img" id="areas__img" style={{backgroundImage: `url("${image}")`}} alt=""/>
    </div>)
}

export default Areas;