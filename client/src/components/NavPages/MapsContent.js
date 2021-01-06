import React, {useState, useRef, useCallback } from "react";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder';
import { FaMapMarkerAlt } from "react-icons/fa";

const MapsContent = () => {

  const [showPopup, setShowPopup] = useState(true);

  const [viewport, SetViewport] = useState({
    latitude: 14.5995,
    longitude: 120.9842,
    // width: "90vw",
    // height: "90vh",
    zoom: 10
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => SetViewport(newViewport),
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
    <>
        <div className="py-4 h-screen col-span-3 overflow-auto">
          <div className="h-screen p-4">
            <ReactMapGL 
              ref={mapRef}
              {...viewport} 
              width="100%"
              height="100%"
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapStyle="mapbox://styles/urescueme/ckiox3t7j52o917qpxlgtsjou" 
              onViewportChange={viewport => {
                  SetViewport(viewport);
              }}>

              <Geocoder
                mapRef={mapRef}
                onViewportChange={handleGeocoderViewportChange}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                position="top-left"
                
              />

              <Marker 
              latitude={14.6908} 
              longitude={120.9631} 
              offsetLeft={-10} offsetTop={-5}
              onClick={e => {
                e.prevenDefault();
                setShowPopup(true)
              }}>
                <FaMapMarkerAlt className="text-2xl text-red-900"/>
              </Marker>

              {showPopup ? (
                <Popup
                  latitude={14.6908}
                  longitude={120.9631}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup(false)}
                  anchor="bottom" >
                  <div className="popup">
                      <p>You are Here</p>
                  </div>
              </Popup>
              ) : null}
              {/* <h2 className="text-left">This is the basic map</h2> */}
            </ReactMapGL>
          </div>

        </div>
    </>
  );
};

export default MapsContent;
