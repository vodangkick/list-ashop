import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
    render() {
        return (
            <div id="mapBox" className="mapBox">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBArE3QDXOzCCAC_Y_lLa96BWhoHavN35s" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={40.701083}
                        lng={-74.1522848}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        )
    }
}
