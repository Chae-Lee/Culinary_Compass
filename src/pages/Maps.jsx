import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import michelinData from "../michelin.json";
import "../pages/Maps.css";
import userLocation from "../UserLocation";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX;

function Maps({ userLocation }) {
  const mapContainerRef = useRef(null);
  console.log("in the maps component", userLocation);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [userLocation.longitude, userLocation.latitude], // Use the first restaurant's coordinates as the initial center
      zoom: 10,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    //Filtering restaurants within a radius
    const radius = 10; //this is distance in km
    const to = [userLocation.longitude, userLocation.latitude];
    const options = { units: "kilometers" };

    const updatedRestaurants = michelinData.filter((restaurant) => {
      const from = [restaurant["Longitude"], restaurant["Latitude"]];
      const distance = turf.distance(to, from, options);
      if (distance < radius) {
        console.log(restaurant);
        return restaurant;
      }
    });

    //Adding markers only on the filtered restaurants
    console.log(updatedRestaurants);
    updatedRestaurants.forEach((restaurant) => {
      new mapboxgl.Marker()
        .setLngLat([restaurant.Longitude, restaurant.Latitude])
        .addTo(map);
    });

    // //Adding a circle around the radius on map
    // map.addLayer({
    //   id: "user-radius",
    //   type: "circle",
    //   paint: {
    //     "circle-radius": radius,
    //     "circle-color": "#007cbf",
    //     "circle-opacity": 0.3,
    //     "circle-stroke-width": 2,
    //     "circle-stroke-color": "#007cbf",
    //   },
    //   source: {
    //     type: "geojson",
    //     data: {
    //       type: "Feature",
    //       geometry: {
    //         type: "Point",
    //         coordinates: [userLocation.longitude, userLocation.latitude],
    //       },
    //     },
    //   },
    // });

    //adding functionality to the map marker
    map.on("click", (event) => {
      // If the user clicked on one of your markers, get its information.
      const features = map.queryRenderedFeatures(event.point, {
        layers: ["YOUR_LAYER_NAME"], // replace with your layer name
      });
      if (!features.length) {
        return;
      }
      const feature = features[0];

      // Code from the next step will go here.
    });

    // return () => map.remove();
  }, [userLocation]);

  return (
    <div>
      <div className="sidebarStyle">
        <div className="map-container" ref={mapContainerRef}></div>
      </div>
    </div>
  );
}

export default Maps;
