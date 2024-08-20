import { useState, useEffect } from "react";

import "./Carousel.scss";

import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs';

const Carousel = (props) => {
    const {currentArea, maxIndex, defIndex} = props;
    const [imageIndex, setImageIndex] = useState(defIndex);

    useEffect(() => {
        setImageIndex(0);
    },[currentArea])

    const changeImage = changeAmount => {
        if (imageIndex + changeAmount > currentArea.imgLink.length-1) setImageIndex(0)
        else if (imageIndex + changeAmount < 0) setImageIndex(currentArea.imgLink.length-1)
        else setImageIndex(imageIndex + changeAmount)
    }

    return (     
    <div className="carousel">
        <img className="carousel__img" src={currentArea.imgLink[imageIndex]} alt=""/>
        <button className="carousel__button carousel__button--prev" onClick={() => changeImage(-1)}><BsArrowLeftCircleFill size={28}/></button>
        <button className="carousel__button carousel__button--next" onClick={() => changeImage(1)}><BsArrowRightCircleFill size={28}/></button>
        <p className="carousel__counter">{imageIndex+1}/{maxIndex}</p>
    </div>)
}

export default Carousel;