import React, { Component } from 'react';

class GoogleMap extends Component {

    /**
     *  The code liner is getting confused because google is defined in your index.html file. You can disable the linter
     *  for a certain line like this.
     *  // eslint-disable-next-line
     */
    componentDidMount() {
        // eslint-disable-next-line
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

  render() {
        // this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;
