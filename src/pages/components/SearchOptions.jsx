import React, { useState } from "react";
import UserLocation from "../../UserLocation";
import michelinData from "../../michelin.json";
import randomIndGen from "../../utils/randomIndex";
import SingleResultCard from "./SingleResultCard";


export default function SearchOptions() {
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [randomRestaurant, setRandomRestaurant] = useState(null); // State to hold the random restaurant

  // Random search code block
  const handleSurpriseMeClick = () => {
    const randRestaurant = michelinData[randomIndGen(michelinData.length)];
    setRandomRestaurant(randRestaurant);
  };

  // Location search code block
  const handleFindNearMeClick = () => {
    setShowUserLocation(true);
  };

  return (
    <div className="lg:pr-8 lg:pt-4 rounded-lg shadow-lg p-4 bg-white">
      <div className="lg:max-w-lg">
        <h1 className="font-semibold leading-7 text-[#1683d1]">
          Culinary Compass
        </h1>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Find your next culinary experience, anywhere in the world
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Use the search options below to explore quality cuisine anywhere on
          the globe, with data straight from the Michelin Guide.
        </p>
      </div>

      {/* RANDOM SEARCH */}

      <div className="mt-4 mb-8 flex flex-col gap-x-6">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={handleSurpriseMeClick}
        >
          Surprise me!
        </button>
      </div>

      <SingleResultCard
        randomRestaurant={randomRestaurant}
      />


      <div className="flex flex-col gap-2 mt-8">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={handleFindNearMeClick}
        >
          Find Near Me
        </button>
        {showUserLocation && <UserLocation />}
      </div>
    </div>
  );
}