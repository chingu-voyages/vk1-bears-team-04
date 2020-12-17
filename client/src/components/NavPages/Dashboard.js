import React, {useState, useEffect} from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaMapMarker } from "react-icons/fa";

const Dashboard = () => {

  const [showPopup, setShowPopup] = useState(true);

  const [viewport, SetViewport] = useState({
    latitude: 14.5995,
    longitude: 120.9842,
    width: "90vw",
    height: "90vh",
    zoom: 10
  });

  return (
    <>
      <div className="py-16">
        <h1 className="py-5">Dashboard</h1>
        <ReactMapGL {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/urescueme/ckiox3t7j52o917qpxlgtsjou" 
          onViewportChange={viewport => {
              SetViewport(viewport);
          }}>

          <Marker 
          latitude={14.6908} 
          longitude={120.9631} 
          offsetLeft={-10} offsetTop={-5}
          onClick={e => {
            e.prevenDefault();
            setShowPopup(true)
          }}>
            <FaMapMarker className="text-2xl text-red-900"/>
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


          <h2 className="text-left">This is the basic map</h2>
        </ReactMapGL>

      </div>

    </>
  );
};

export default Dashboard;
