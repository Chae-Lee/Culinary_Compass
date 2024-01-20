import React, { useState, useEffect } from "react";
import UserLocation from "../UserLocation";
import "../michelin.json";

function Maps() {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");
    const latitude = 38.921295;
    const longitude = -77.043915;
    iframeData.src = `https://maps.google.com/maps?q=${latitude}, ${longitude}&h1=es;&output=embed`;
  });
  return (
    <div>
      <iframe id="iframeId" height="500px" width="100%"></iframe>
    </div>
  );
}

export default Maps;
