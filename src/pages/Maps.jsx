import React, { useState, useEffect } from "react";
import UserLocation from "../UserLocation";
import michelinData from "../michelin.json";

function Maps({ restaurantData }) {
  //fetching lng/lat data from michelin.json file
  michelinData.map((michelinData) => {
    const restaurantLongitude = michelinData.Longitude;
    const restaurantLatitude = michelinData.Latitude;
    const restaurantLocation = [restaurantLongitude, restaurantLatitude];
    let { Longitude, Latitude } = michelinData;
    // console.log(Longitude, Latitude);
  });

  // iterating through the michelin.json data and displaying on the map
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");

    michelinData.forEach(function (restaurant) {
      console.log(
        `this is the Longitude: ${restaurant.Longitude}, Latitude ${restaurant.Latitude}`
      );
      iframeData.src = `https://maps.google.com/maps?q=${restaurant.Latitude}, ${restaurant.Longitude}&h1=es;&output=embed`;
    });

    // for (let i = 0; i < michelinData.length; i++) {
    //   const { Latitude, Longitude } = michelinData[i];
    //   iframeData.src = `https://maps.google.com/maps?q=${Latitude}, ${Longitude}&h1=es;&output=embed`;
    // console.log(Longitude);
    // }
  }, [michelinData]);

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
