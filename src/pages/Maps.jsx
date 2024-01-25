import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import michelinData from "../michelin.json";
import "../pages/Maps.css";
import userLocation from "../UserLocation";

//Environment variable for API token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX;

function Maps({ userLocation }) {
  const mapContainerRef = useRef(null);
  console.log("in the maps component", userLocation);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [userLocation.longitude, userLocation.latitude],
      zoom: 10,
    });

    //map zoom in/out control
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    //Adding a marker on user's current location
    new mapboxgl.Marker({
      color: "#9966CC",
      draggable: true,
    })
      .setLngLat([userLocation.longitude, userLocation.latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3><b>Your Current Location</b></h3>`)
      )
      .addTo(map);

    //Filtering restaurants within a radius
    const radius = 14; //this is distance in km
    const to = [userLocation.longitude, userLocation.latitude];
    const options = { units: "kilometers" };

    const updatedRestaurants = michelinData.filter((restaurant) => {
      const from = [restaurant["Longitude"], restaurant["Latitude"]];
      const distance = turf.distance(to, from, options);
      if (distance < radius) {
        // console.log(restaurant);
        return restaurant;
      }
    });

    //Adding markers only on the filtered restaurants
    updatedRestaurants.forEach((restaurant) => {
      new mapboxgl.Marker({
        color: "#FF7F50",
        draggable: true,
      })
        .setLngLat([restaurant.Longitude, restaurant.Latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<h3><b>${restaurant.Name}</b></h3>
              <p>${restaurant.Address}</p>
              <p>${restaurant.Price}</p>
              <p>Cuisine: ${restaurant.Cuisine}</p>
              <p> ${restaurant.Award}</p>
              <a href=${restaurant.WebsiteUrl}><b>Visit Website</b></a>
              `
            )
        )
        .addTo(map);
    });
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
