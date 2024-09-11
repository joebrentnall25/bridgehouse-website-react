import { reviews } from "../../Assets/data/data";
import "./Reviews.scss";
import Button from "../Buttons/Button";
import { useState } from "react";

const Reviews = (props) => {
    const { className } = props;
    let [currentIndex, setCurrentIndex] = useState(0);

    const [review, setReview] = useState({
        name: reviews[currentIndex].name,
        year: reviews[currentIndex].year,
        text: reviews[currentIndex].text
    })

    const setPreviousReview = () => {
        if (currentIndex === 0){
            setCurrentIndex(currentIndex = reviews.length-1);
        } else {
            setCurrentIndex(currentIndex = currentIndex - 1);
        }
        setReviewOnScreen();
    }
    const setNextReview = () => {
        if (currentIndex === reviews.length-1) {
            setCurrentIndex(currentIndex = 0);
        } else {
            setCurrentIndex(currentIndex = currentIndex + 1);
        }
        setReviewOnScreen();
    }

    const setReviewOnScreen = () => {
        setReview({
            name: reviews[currentIndex].name,
            year: reviews[currentIndex].year,
            text: reviews[currentIndex].text
        })
    }

    return (
    <section className={`reviews ${className ?? ""}`}>
        <div className="reviews__header">
            <h2 className="reviews__heading primary">Our Reviews</h2>
            <h3>Hear what our customers say.</h3>
            <p>Use buttons to cycle through some of our customers reviews.</p>
            <div className="reviews__buttons">
                <Button type="simple" text="Previous" onClick={setPreviousReview}/>
                <Button type="simple" text="Next" onClick={setNextReview}/>
            </div>
        </div>
        <div className="reviews__review">
            <h2 id="reviews__name" className="reviews__name tertiary">{review.name} ({review.year})</h2>
            <p id="reviews__para" className="reviews__para italics">{review.text}</p>
        </div>
    </section>)
}

export default Reviews;