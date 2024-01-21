import React, { useState, useEffect } from "react";
import userLocation from "../UserLocation";
import michelinData from "../michelin.json";

function Maps({ restaurantData, userLocation }) {
  //fetching lng/lat data from michelin.json file (KEEP)
  // michelinData.map((michelinData) => {
  //   const restaurantLongitude = michelinData.Longitude;
  //   const restaurantLatitude = michelinData.Latitude;
  //   const restaurantLocation = [restaurantLongitude, restaurantLatitude];
  //   let { Longitude, Latitude } = michelinData;
  //   // console.log(Longitude, Latitude);
  // });

  // iterating through the michelin.json data and displaying on the map (KEEP)
  // useEffect(() => {
  //   michelinData.forEach(function (restaurant) {
  //     console.log(
  //       `this is the Longitude: ${restaurant.Longitude}, Latitude ${restaurant.Latitude}`
  //     );
  //     const iframeData = document.getElementById("iframeId");
  //     iframeData.src = `https://maps.google.com/maps?q=${restaurant.Latitude}, ${restaurant.Longitude}&h1=es;&output=embed`;
  //   });
  // }, [michelinData]);

  // fetching user location and displaying on map (testing)
  // useEffect(() => {
  //   const iframeData = document.getElementById("iframeId");
  //   iframeData.src = `https://maps.google.com/maps?q=${userLocation.Latitude}, ${userLocation.Longitude}&h1=es;&output=embed`;
  // }, [userLocation]);

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
      <iframe id="iframeId" height="400px" width="600px"></iframe>
    </div>
  );
}

export default Maps;

// if (restaurantData && restaurantData.length > 0) {
//   const iframeData = document.getElementById("iframeId");
//   const markers = restaurantData.map((restaurant) => {
//     return `${restaurant.Latitude}, ${restaurant.Longitude}`;
//   });
// }
// const { Latitude, Longitude } = restaurantData;

// const latitude = 38.921295;
// const longitude = -77.043915;
