import "./Bookings.scss";

const Bookings = (props) => {
    const { type } = props;
    const typeData = {
        table: {
            header: "Book your table now.",
            text: "Would you like to book a table with us? Get in touch by phone. Whether this is for food or just drinks."
        },
        event: {
            header: "Book your event now.",
            text: "Would you like to book an event with us? Get in touch by phone. We will accomodate for your needs."
        }
    }

    let currentType;

    switch (type) {
        case "table": 
            currentType = typeData.table;
            break;
        case "event":
            currentType = typeData.event;
        default:
            console.log("INVALID TYPE: bookings type invalid.");
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