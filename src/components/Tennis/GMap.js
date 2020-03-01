import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./css/tennis.css";

class GMap extends React.Component {
    render() {
        return (
          <div className="Mappie">
            <Map
            google={this.props.google}
            zoom={8}
            initialCenter={{ lat: 47.444, lng: -122.176}}
            >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
          </div>
        );
    }
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBDSChLvqBMtpqq0W5WFUKMFmKrZtoICQs'
   })(GMap);