import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder'


const Geo = () => {

    // const MAPBOX_TOKEN =
    // "pk.eyJ1IjoidXJlc2N1ZW1lIiwiYSI6ImNraW92bW1rZDAwd3QyenA5YnJvMHR1bDgifQ.Ix9AtlCoNl0f7KFH8lhLWw";

    const [viewport, setViewport] = useState({
        latitude: 14.5995,
        longitude: 120.9842,
        zoom: 8
      });
      const mapRef = useRef();
      const handleViewportChange = useCallback(
        (newViewport) => setViewport(newViewport),
        []
      );
    
      // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
      const handleGeocoderViewportChange = useCallback(
        (newViewport) => {
          const geocoderDefaultOverrides = { transitionDuration: 1000 };
    
          return handleViewportChange({
            ...newViewport,
            ...geocoderDefaultOverrides
          });
        },
        [handleViewportChange]
      );
    

      return (
        <div style={{ height: "100vh" }}>
          <MapGL
            ref={mapRef}
            {...viewport}
            width="100%"
            height="60%"
            onViewportChange={handleViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/urescueme/ckiox3t7j52o917qpxlgtsjou"
          >
            <Geocoder
              mapRef={mapRef}
              onViewportChange={handleGeocoderViewportChange}
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              position="top-left"
            />
          </MapGL>

        </div>
      );
}

export default Geo;
