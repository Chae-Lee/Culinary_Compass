import React, { useState } from 'react';
import michelin from '../../michelin.json'
import randomIndGen from '../../utils/randomIndex';

// function starFunction(n) {
//   if (n.Award == "3 Stars") {
//     return <img src="../../../public/images/michelin-three.png" />;
//   } else if (n.Award == "2 Stars") {
//     return <img src="../../../public/images/michelin-two.png" />;
//   } else if (n.Award == "Bib Gourmand") {
//     return <img src="../../../public/images/michelin-bib.png" />;
//   } else if (n.Award == "1 Star") {
//     return <img src="../../../public/images/michelin-one.png" />;
//   } else if (n.Award == "1 Star,Green Star") {
//     return <img src="../../../public/images/michelin-one-green.png" />;
//   } else if (n.Award == "2 Stars,Green Star") {
//     return <img src="../../../public/images/michelin-two-green.png" />;
//   } else if (n.Award == "3 Stars,Green Star") {
//     return <img src="../../../public/images/michelin-three-green.png" />;
//   } else if (n.Award == "Bib Gourmand,Green Star") {
//     return <img src="../../../public/images/michelin-bib-green.png" />;
//   } else {
//     return <img src="../../../public/images/michelin-green.png" />;
//   }
// }


function SingleResultCard({ clickEvent, randomRestaurant }) {
  console.log("Props received:", randomRestaurant);
  const randRestaurant = michelin[randomIndGen(michelin.length)];
  if (!randomRestaurant) {
    return null;
  }
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 pb-6 lg:overflow-visible lg:px-0">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 shadow-lg rounded-lg">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg col-span-2">
              <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-4">
                {randomRestaurant.Name}
              </h3>
              <p className="mt-6 text-l leading-8 text-gray-700">
                {randomRestaurant.Address}
              </p>
              <p className="mt-6 text-l leading-8 text-gray-700 italic pb-4">
                {randomRestaurant.Cuisine}
              </p>
              <img src={randomRestaurant.AwardIcon} alt="" />
              {/* <p className="mt-6 text-xl leading-8 text-gray-700">
                Star Rating: {starFunction(randRestaurant)}
              </p> */}
            </div>
          </div>
        </div>
        <div className="col-start-2 row-start-1 pt-4">
          <img
            className="w-[40rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[10rem]"
            src={randomRestaurant.CuisineImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 col-span-2">
            <div className="max-w-xl text-sm leading-7 text-gray-700 lg:max-w-lg pb-4">
              <p>{randomRestaurant.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleResultCard;
