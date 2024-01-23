import React from "react";
import restaurants from "/src/michelin.json";

export default function MultiResults() {

  //! Test value only
  let testCountry = "Italy"

    return (
      <div className="max-h-[750px] overflow-y-auto">
        {/* Creates a UL for all results */}
        <ul role="list" className="divide-y divide-gray-100">
          {restaurants.filter((restaurant) => restaurant.Country = testCountry).map((restaurants) => (
              <li key={restaurants.Name} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                {/* CuisineImage */}
                <img className="h-24 w-24 flex-none rounded-md bg-gray-50 object-cover" src={restaurants.CuisineImage} alt="" />      
                  {/* Restaurant Info */}
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{restaurants.Name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{restaurants.Cuisine}</p>           
                    <img className="h-4 mt-1.5 mb-1.5" src={restaurants.AwardIcon} alt="" />
                    <a className="mt-1 truncate text-xs leading-5 text-gray-500 underline" href ={restaurants.Url}>Read the Michelin Guide</a>
                  </div>
                </div>
                {/* Restaurant Location */}
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end pr-4">
                  <p className="text-sm leading-6 text-gray-900">{restaurants.Location}</p>
                  <p className="text-xs leading-5 text-gray-500">{restaurants.Country}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    )
}