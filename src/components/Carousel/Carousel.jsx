import { useState, useEffect } from "react";

import "./Carousel.scss";

import {BsArrowRightCircleFill, BsArrowLeftCircleFill} from 'react-icons/bs';

const Carousel = (props) => {
    const {currentArea, maxIndex, defIndex} = props;
    const [imageIndex, setImageIndex] = useState(defIndex);

    useEffect(() => {
        setImageIndex(0);
    },[currentArea])
    
    const nextImage = () => {
        if (imageIndex === currentArea.imgLink.length-1){
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex+1);
        }
        console.log(imageIndex);
    }

    const previousImage = () => {
        if (imageIndex === 0) {
            setImageIndex(currentArea.imgLink.length-1);
        } else {
            setImageIndex(imageIndex-1);
        }
        console.log(imageIndex);
    }

    return (     
    <div className="carousel">
        <img className="carousel__img" src={currentArea.imgLink[imageIndex]} alt=""/>
        <button className="carousel__button carousel__button--prev" onClick={() => previousImage()}><BsArrowLeftCircleFill size={28}/></button>
        <button className="carousel__button carousel__button--next" onClick={() => nextImage()}><BsArrowRightCircleFill size={28}/></button>
        <p className="carousel__counter">{imageIndex+1}/{maxIndex}</p>
    </div>)
}

export default Carousel;