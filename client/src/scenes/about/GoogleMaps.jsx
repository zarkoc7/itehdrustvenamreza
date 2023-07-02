import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Circle } from '@react-google-maps/api';

const containerStyle = {

    width: '400px',
    height: '450px'
};

const center = {
    lat: 44.772605,
    lng: 20.475169
};

const options = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 20,
    zIndex: 1
}

const onLoad = circle => {
    console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
    console.log('Circle onUnmount circle: ', circle)
}

class GoogleMaps extends Component {

    render() {
        return (
            <LoadScript
                googleMapsApiKey="AIzaSyBfEVqY5s_O8x5OiPRvoISk3kJ2NVKYVAs"
            >
                <GoogleMap
                    id="circle-example"
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={21}
                >
                    <Circle
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        center={center}
                        options={options}
                    />
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default GoogleMaps