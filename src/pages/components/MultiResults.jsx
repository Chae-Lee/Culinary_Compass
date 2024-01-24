import React, { useState, useEffect } from "react";
import michelinData from "/src/michelin.json";
import LoadingIcon from "./LoadingIcon";

export default function MultiResults(props) {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [filteredMichelinData, setFilteredMichelinData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedRating, setSelectedRating] = useState("all");


  useEffect(() => {
    setTimeout(() => {
      setIsDataLoading(false);
      filterData(selectedCountry, selectedRating);
    }, 2000);
  }, []);


  useEffect(() => {
    filterData(selectedCountry, selectedRating);
  }, [selectedCountry, selectedRating]);



  const filterData = (country, rating) => {
    const filteredData = michelinData.filter((data) => {
      return (
        (rating === "all" || data.Award === rating) &&
        data.Country.toLowerCase().includes(country.toLowerCase())
      );
    });
    setFilteredMichelinData(filteredData);
  };


    const handleCountryChange = (event) => {
      const newCountry = event.target.value;
      setSelectedCountry(newCountry);
    };

    const handleRatingChange = (event) => {
      const newRating = event.target.value;
      setSelectedRating(newRating);
    };


      if (isDataLoading) {
        return (
          <div className="max-h-[750px] pt-48 flex justify-center align-center">
            <LoadingIcon />
          </div>
        );
  } else {
      return (
        <div className="max-h-[750px] overflow-y-auto">
          <label htmlFor="country" className="bg-indigo-600 h-full w-full">Type Country:</label>
          <input
            type="text"
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
          />

          <label htmlFor="starRating">Select Star Rating:</label>
          <select
            id="starRating"
            onChange={handleRatingChange}
            value={selectedRating}
          >

            <option value="all">All</option>
            <option value="1 Star">1 Star</option>
            <option value="2 Stars">2 Stars</option>
            <option value="3 Stars">3 Stars</option>
          </select>

        <ul role="list" className="divide-y divide-gray-100">
          {filteredMichelinData.map((michelinData) => (
            <li key={michelinData.ID} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img className="h-24 w-24 flex-none rounded-md bg-gray-50 object-cover" src={michelinData.CuisineImage} alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{michelinData.Name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{michelinData.Cuisine}</p>
                  <img className="h-4 mt-1.5 mb-1.5" src={michelinData.AwardIcon} alt="" />
                  <a className="mt-1 truncate text-xs leading-5 text-gray-500 underline" href={michelinData.Url}>Read the Michelin Guide</a>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end pr-4">
                <p className="text-sm leading-6 text-gray-900">{michelinData.Location}</p>
                <p className="text-xs leading-5 text-gray-500">{michelinData.Country}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}