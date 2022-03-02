// Icons
import {TiLocation} from "react-icons/ti";

const LocationPin = ({text}) => {
    return <div className="google-map__pin">
        <TiLocation size={50} className="google-map__pin-icon"/>
        <p className="google-map__pin-text">{text}</p>
    </div>
}

export default LocationPin;