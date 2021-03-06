import "./Bookings.scss";
import { typeData as data } from "../../Assets/data/data";

const Bookings = (props) => {
    const { type } = props;
    const typeData = data;

    let currentType;

    switch (type) {
        case "table": 
            currentType = typeData.table;
            break;
        case "event":
            currentType = typeData.event;
            break;
        default:
            console.warn = function() {
                throw new Error("ERROR: Unknown booking type!");
            };
            currentType = typeData.default;
    }

    return (
    <section className="table-booking__container container">
        <div className="table-booking">
            <h3 className="table-booking__header">{currentType.header}</h3>
            <div className="table-booking__info">
                <p className="table-booking__info-text">{currentType.text}</p>
                <a className="table-booking__info-phone" href="tel:+441332482549">01332 482549</a>
            </div>
        </div>
    </section>)
}

export default Bookings;