import React, { useState, useEffect } from "react";
import UserLocation from "../UserLocation";
import michelinData from "../michelin.json";

function Maps({ restaurantData }) {
  michelinData.map((michelinData) => {
    const restaurantLongitude = michelinData.Longitude;
    const restaurantLatitude = michelinData.Latitude;
    let { Longitude, Latitude } = michelinData;
    console.log(Longitude, Latitude);
  });

  useEffect(() => {
    const iframeData = document.getElementById("iframeId");

    for (let i = 0; i < restaurantData.length; i++) {
      const { Latitude, Longitude } = restaurantData[i];
      iframeData.src = `https://maps.google.com/maps?q=${Latitude}, ${Longitude}&h1=es;&output=embed`;
    }
  }, [restaurantData]);

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
