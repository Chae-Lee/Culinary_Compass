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

    //Filtering restaurants within a radius
    const radius = 10000;
    const filteredRestaurants = michelinData.filter((restaurant) => {
      const distance = getDistance(
        userLocation.latitude,
        userLocation.longitude,
        restaurant.Latitude,
        restaurant.Longitude
      );
      return distance <= radius;
    });

    //Adding markers only on the filtered restaurants
    filteredRestaurants.forEach((restaurant) => {
      new mapboxgl.Marker()
        .setLngLat([restaurant.Longitude, restaurant.Latitude])
        .addTo(map);
    });

    //Adding a circle around the radius on map
    map.addLayer({
      id: "user-radius",
      type: "circle",
      paint: {
        "circle-radius": radius,
        "circle-color": "#007cbf",
        "circle-opacity": 0.3,
        "circle-stroke-width": 2,
        "circle-stroke-color": "#007cbf",
      },
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [userLocation.longitude, userLocation.latitude],
          },
        },
      },
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => map.remove();
  }, [userLocation]);
  // Function to calculate the distance between two sets of coordinates using the Haversine formula
  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance * 1000; // Convert to meters
  }

  function degToRad(deg) {
    return deg * (Math.PI / 180);
  }

  // // Iterates through the JSON file and places a marker for each restaurant location
  // michelinData.forEach((restaurant) => {
  //   new mapboxgl.Marker()
  //     .setLngLat([restaurant.Longitude, restaurant.Latitude])
  //     .addTo(map);
  // });

  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  //   return () => map.remove();
  // }, []);

  return (
    <div>
      <div className="sidebarStyle">
        <div className="map-container" ref={mapContainerRef}></div>
      </div>
    </div>
  );
}

export default Maps;
