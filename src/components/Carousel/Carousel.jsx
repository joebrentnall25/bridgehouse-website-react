import { useState } from "react";

import "./Carousel.scss";

const Carousel = (props) => {
    const {currentArea} = props;

    const [imageIndex, setImageIndex] = useState(0);

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
        <button className="carousel__button--prev" onClick={() => previousImage()}>Previous</button>
        <button className="carousel__button--next" onClick={() => nextImage()}>Next</button>
    </div>)
}

export default Carousel;