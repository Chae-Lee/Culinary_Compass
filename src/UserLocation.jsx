import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function UserLocation() {
  const [userLocation, setUserLocation] = useState(null);
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          setError("Something went wrong getting your location");
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  };
  return (
    <div>
      <p>User Location </p>
      <button onClick={getUserLocation}>Get User Location</button>
      {userLocation == null ? (
        <p> No user information given </p>
      ) : (
        <div>
          <p> Latitude : {userLocation.latitude}</p>{" "}
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}
      {/* <p>Latitude: {userLocation.latitude}</p>
      <p>Longitude: {userLocation.longitude}</p> */}
    </div>
  );
}

// function UserLocation() {
//   const [lat, setLat] = useState(null);
//   const [long, setLong] = useState(null);

//   const getUserCoordinates = () => {
//     if (!geolocationAPI) {
//       setError("Geolocation API is not available in your browser");
//     } else {
//       geolocationAPI.getCurrentPositions(
//         (position) => {
//           const { coords } = position;
//           setLat(coords.latitude);
//           setLong(coords.longitude);
//         },
//         (error) => {
//           setError("Something went wrong getting your location ");
//         }
//       );
//     }
//   };
//   return (
//     <div className="UserLocation">
//       <p> Your coordinates are: {[lat, long]} </p>
//       <p>{getUserCoordinates()}</p>
//     </div>
//   );
// }

export default UserLocation;
