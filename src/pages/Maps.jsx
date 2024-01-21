import React, { useState, useEffect } from "react";
import userLocation from "../UserLocation";
import michelinData from "../michelin.json";

function Maps({ restaurantData, userLocation }) {
  //fetching lng/lat data from michelin.json file (KEEP)
  michelinData.map((michelinData) => {
    const restaurantLongitude = michelinData.Longitude;
    const restaurantLatitude = michelinData.Latitude;
    const restaurantLocation = [restaurantLongitude, restaurantLatitude];
    let { Longitude, Latitude } = michelinData;
    // console.log(Longitude, Latitude);
  });

  // iterating through the michelin.json data and displaying on the map (KEEP)
  useEffect(() => {
    michelinData.forEach(function (restaurant) {
      // console.log(
      //   `this is the Longitude: ${restaurant.Longitude}, Latitude ${restaurant.Latitude}`
      // );
      const iframeDataRestaurant = document.getElementById("iframeRestaurant");
      iframeDataRestaurant.src = `https://maps.google.com/maps?q=${restaurant.Latitude}, ${restaurant.Longitude}&h1=es;&output=embed`;
    });
  }, [michelinData]);

  useEffect(() => {
    if (userLocation) {
      console.log(
        "User's Location",
        userLocation.latitude,
        userLocation.longitude
      );
    }
  }, [userLocation, restaurantData]);

  //KEEP
  return (
    <div>
      <iframe id="iframeRestaurant" height="400px" width="800px"></iframe>
    </div>
  );
}

export default Maps;
