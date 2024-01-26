import { useState, useEffect } from "react";
import michelinData from "/src/michelin.json";
import LoadingIcon from "./LoadingIcon";
import { Combobox } from "@headlessui/react";

function MultiResults() {

  // Use state hooks

  // Unique countries state
  const [uniqueCountries, setUniqueCountries] = useState([]);
  // loading icon state
  const [isDataLoading, setIsDataLoading] = useState(true);
  // filtered JSON state
  const [filteredMichelinData, setFilteredMichelinData] = useState([]);
  // user selected country state for filtering options 
  const [selectedCountry, setSelectedCountry] = useState("");
  // user selected rating state for filtering options 
  const [selectedRating, setSelectedRating] = useState("all");

  // function to handle getting countries based on users input
  const getUniqueCountries = () => {
    const countries = new Set(michelinData.map(data => data.Country));
    return Array.from(countries);
  };
// ==================================================

// Use effect hooks

  // Displays the countries as they are being searched
  useEffect(() => {
    setUniqueCountries(getUniqueCountries());
  }, []);

  // delay to show the loading animation while data is retrieved
  useEffect(() => {
    setTimeout(() => {
      setIsDataLoading(false);
    }, 2000);
  }, []);

// updates the filtered data in the list as the user searches
  useEffect(() => {
    filterData(selectedCountry, selectedRating);
  }, [selectedCountry, selectedRating, isDataLoading]);
// =======================================================

// event functions 

// filtering the JSON file based on the users choices
  const filterData = (country, rating) => {
    if (!isDataLoading) {
      const filteredData = michelinData.filter((data) => {
        return (
          (rating === "all" || data.Award === rating) &&
          data.Country.toLowerCase().includes(country.toLowerCase())
        );
      });
      setFilteredMichelinData(filteredData);
    }
  };

// sets state for the country
  const handleCountryChange = (event) => {
    const newCountry = event.target.value;
    setSelectedCountry(newCountry);
  };

  const handleRatingChange = (event) => {
    const newRating = event.target.value;
    setSelectedRating(newRating);
  };

  const preventDefault = (e) => {
    e.preventDefault()
  }
// ================================================

// Checks for the load time to finish and shows animation while rendering
  if (isDataLoading) {
    return (
      <div className="max-h-[750px] pt-48 flex justify-center align-center">
        <LoadingIcon />
      </div>
    );
  } else {
    
    // search filter box box and dropdown menu
    return (
      <>
        <section className="border-black">
          <div className=" drop-shadow-md display-flex flex-col justify-center max-h-20 rounded-md bg-[#1683d1] 0 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-auto">
            <Combobox >
              <Combobox.Input className="rounded-md bg-[#1683d1] h-8 w-full text-white color-white"
                placeholder="Choose a country"
                type="text"
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                onSubmit={preventDefault} />
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {uniqueCountries.filter(country =>
                  country.toLowerCase().includes(selectedCountry.toLowerCase())
                ).map((country, idx) => (
                  <Combobox.Option
                    key={idx}
                    value={country}
                    className={({ active }) => `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'bg-[#1683d1] text-white' : 'text-gray-900'}`}>
                    {country}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>

            <label className="pt-5 pr-4">Select Star Rating:</label>
            <select
              id="starRating"
              onChange={handleRatingChange}
              value={selectedRating}>

              <option className="bg-blue-500" value="all">All</option>
              <option className="bg-blue-500" value="1 Star">⭐</option>
              <option className="bg-blue-500" value="2 Stars">⭐⭐</option>
              <option className="bg-blue-500" value="3 Stars">⭐⭐⭐</option>
              <option className="bg-blue-500" value="Bib Gourmand">🅱️</option>
              <option className="bg-blue-500" value="Green Star">🍀</option>
              <option className="bg-blue-500" value="1 Star,Green Star">⭐🍀</option>
              <option className="bg-blue-500" value="2 Stars,Green Star">⭐⭐🍀</option>
              <option className="bg-blue-500" value="3 Stars,Green Star">⭐⭐⭐🍀</option>
              <option className="bg-blue-500" value="Bib Gourmand,Green Star">🅱️🍀</option>
            </select>
          {/* ================================= */}

          {/* Maps list of filtered results */}
          </div>
          <div className="max-h-screen overflow-y-auto">
            <ul role="list" className="divide-y divide-gray-100">
              {filteredMichelinData.map((michelinData) => (
                <li
                  key={michelinData.ID}
                  className="flex justify-between gap-x-6 py-5"
                >
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
        </section>
      </>
    );
  }
}

export default MultiResults;