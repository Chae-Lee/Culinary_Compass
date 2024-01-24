import React, { useEffect, useState } from "react";
import UserLocation from "../../UserLocation";
import { Combobox } from '@headlessui/react'
import michelinData from "../../michelin.json";
import LoadingIcon from "./LoadingIcon";
import randomIndGen from "../../utils/randomIndex";
import SingleResultCard from "./SingleResultCard";
import MultiResults from "./MultiResults";

export default function SearchOptions({
  testButtonClick,
  clickEvent,
  toggle3Stars,
}) {
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [randomRestaurant, setRandomRestaurant] = useState(null); // State to hold the random restaurant
  const [selectedCountry, setSelectedCountry] = useState('') // State to hold country selection, set to empty upon page load.

  // Random search code block
  const handleSurpriseMeClick = () => {
    const randRestaurant = michelinData[randomIndGen(michelinData.length)];
    console.log("Random Restaurant:", randRestaurant);
    setRandomRestaurant(randRestaurant);
  };

  // Country search code block
  // Create new array of unique country names only from michelin.json data.
  let countriesData = michelinData.map((
    { Country }) => ( Country ));
  const [countries, setCountries] = useState(countriesData);
  useEffect(() => {
      const uniqueCountries = [...new Set(countries)];
      setCountries(uniqueCountries);
  }, []);
  // Allow user to search, ignoring uppercase and lowercase differences.
  console.log("Selected country =", selectedCountry);
  const [search, setSearch] = useState('')
  const filteredCountries =
  search === ''
      ? countries
      : countries.filter((country) => {
          return country.toLowerCase().includes(search.toLowerCase())
      })
  
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
        clickEvent={clickEvent}
      />

      {/* COUNTRY SEARCH */}

      <div className="rounded-md custom-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-40">
            <Combobox value={selectedCountry} onChange={setSelectedCountry}>
                <Combobox.Input className="rounded-md custom-blue h-full w-full"
                    placeholder="Type a country"
                    onChange={(event) => setSearch(event.target.value)} />
                <Combobox.Options className="bg-indigo-400">
                    {filteredCountries.map((country) => (
                        <Combobox.Option key={country} value={country}>
                        {country}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
        <MultiResults selectedCountry={selectedCountry} />

{/* Below lines commented out for now due to same 'country' term being used */}
      {/* <SingleResultCard
        country={country}
        clickEvent={clickEvent}
      /> */}

      {/* NEAR ME */}

      <div className="flex flex-col gap-2 mt-8">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={handleFindNearMeClick}
        >
          Find Near Me
        </button>
        {showUserLocation && <UserLocation />}

        {/* TOGGLE BUTTONS */}

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onClick={toggle3Stars}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
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

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <img className="h-6" src="/images/michelin-green.png"></img>
          </span>
        </label>

        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            <img className="h-6" src="/images/michelin-bib.png"></img>
          </span>
        </label>
      </div>

      {/* Test buttons for showing the correct component */}
      <div className="flex flex-col gap-4 pt-4">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
          onClick={() => testButtonClick("SingleResultCard")}
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