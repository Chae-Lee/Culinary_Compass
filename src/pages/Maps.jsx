import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import michelinData from "../michelin.json";
import "../pages/Maps.css";
import userLocation from "../UserLocation";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2F0ZTExMjkiLCJhIjoiY2xycGpmbXZnMDViaDJpa2c1b2E5bHRudSJ9.E4DlRODK0CBzucjEsdtqOA";

function Maps({ userLocation }) {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [userLocation.longitude, userLocation.latitude], // Use the first restaurant's coordinates as the initial center
      zoom: 10,
    });

    michelinData.forEach((restaurant) => {
      new mapboxgl.Marker()
        .setLngLat([restaurant.Longitude, restaurant.Latitude])
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className="sidebarStyle">
        <div className="map-container" ref={mapContainerRef}></div>
      </div>
    </div>
  );
}

export default Maps;
