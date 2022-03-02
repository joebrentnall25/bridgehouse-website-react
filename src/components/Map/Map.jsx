import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.scss";

// Components
import LocationPin from "./LocationPin";

const Map = () => {
    const location = {
        address: 'Derby Rd, Ambergate, Belper DE56 2EJ',
        center: {
            lng: -1.48260,
            lat: 53.05863
        }
    }

    return <section className="google-map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDFdpCcjZM3WPmHGSFfXdgA5bjYd5ZhBlc' }}
            defaultCenter={location.center}
            defaultZoom={16}>
        <LocationPin text={location.address} lat={location.center.lat} lng={location.center.lng}/>
        </GoogleMapReact>
    </section>
}

export default Map;