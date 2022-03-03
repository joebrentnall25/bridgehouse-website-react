import "./Areas.scss";
import { useState } from "react";

// Data
import { areasData } from "../../Assets/data/data";

// Components
import Button from "../Buttons/Button";
import Carousel from "../Carousel/Carousel";

const Areas = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [currentArea, setCurrentArea] = useState({
        name: areasData.Restaurant.name,
        link: areasData.Restaurant.link,
        description: areasData.Restaurant.description,
        imgLink: areasData.Restaurant.imgLink
    })

    console.log(window.location.origin)

    

    const selectArea = (areaSelected) => {
        Object.keys(areasData).forEach((area) => {
            if (area === areaSelected){ 
                setCurrentArea({
                    name: areasData[areaSelected].name,
                    link: areasData[areaSelected].link,
                    description: areasData[areaSelected].description,
                    imgLink: areasData[areaSelected].imgLink
                });
                setImageIndex(0);
            }
        })
    }

    const getButtons = () => {
        return Object.keys(areasData).map((area, index) => {
            if (area === currentArea.name){
                 return (<li key={index}><Button type="area" text={areasData[area].name} active="true" onClick={() => selectArea(area)}/></li>)
            }
            return (<li key={index}><Button type="area" text={areasData[area].name} onClick={() => selectArea(area)}/></li>)
        })
    }

    const buttonsHtml = getButtons();

    return (
    <div className="areas">
        <div className="areas__main">
            <ul className="areas__main-buttons">
                { buttonsHtml }
            </ul>
            <div className="areas__main-content">
                <h3 className="areas__main-content-title">{currentArea.name}</h3>
                <p className="areas__main-content-para">{currentArea.description}</p>
                <Button className="areas__main-content-link" type="tertiary" to={currentArea.link} text="View Menu"/>
            </div>
            <div className="areas__main-img">
                <Carousel currentArea={currentArea}/>
            </div>
        </div>
    </div>)
}

export default Areas;