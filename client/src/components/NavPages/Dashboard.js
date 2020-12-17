import React, {useState} from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Dashboard = () => {

  const [viewport, SetViewport] = useState({
    latitude: 14.5547,
    longtitude: 121.0244,
    width: "100vw",
    height: "100vh",
    zoom: 10
  })

  return (
    <>
      <h1 className="py-5">Dashboard</h1>
      <ReactMapGL {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/urescueme/ckiox3t7j52o917qpxlgtsjou" 
        onViewportChange={viewport => {
            SetViewport(viewport);
        }}>
        <h2 className="text-left">This is the basic map</h2>
      </ReactMapGL>

    </>
  );
};

export default Dashboard;
