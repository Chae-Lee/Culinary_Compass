import React, { useState } from "react";
import UserLocation from "../../UserLocation";
import ComboBox from "./ComboBox";
import resultFilter from "../../utils/starFilters";
import michelin from "../../michelin.json";
import LoadingIcon from "./LoadingIcon";

export default function SearchOptions({ testButtonClick, clickEvent }) {
  const [showUserLocation, setShowUserLocation] = useState(false);

  const handleFindNearMeClick = () => {
    setShowUserLocation(true);
  };

  return (
    <div className="lg:pr-8 lg:pt-4">
      <div className="lg:max-w-lg">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Culinary Compass
        </h2>
        <LoadingIcon />
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Find your next culinary experience, anywhere in the world
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Use the search options below to explore quality cuisine anywhere on
          the globe, with data straight from the Michelin Guide.
        </p>
      </div>

      {/* RANDOM BUTTON */}

      <div className="mt-4 mb-8 flex flex-col gap-x-6">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={clickEvent}
        >
          Surprise me!
        </button>
      </div>

      {/* COUNTRY SEARCH */}
      <ComboBox />

      {/* NEAR ME */}

      <div className="flex flex-col gap-2 mt-8">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={handleFindNearMeClick}
        >
          Find Near Me
        </button>
        {showUserLocation && (
          <UserLocation setShowUserLocation={setShowUserLocation} />
        )}
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <img className="h-6" src="/images/michelin-three.png"></img>
          </span>
        </label>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <img className="h-6" src="/images/michelin-two.png"></img>
          </span>
        </label>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <img className="h-6" src="/images/michelin-one.png"></img>
          </span>
        </label>
      </div>

      {/* Test buttons for showing the correct component */}
      <div className="flex flex-col gap-4 pt-4">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={() => testButtonClick("RestaurantCard")}
        >
          Test - Show RestaurantCard
        </button>

        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={() => testButtonClick("MultiResults")}
        >
          Test - Show MultiResults
        </button>
      </div>
    </div>
  );
}
