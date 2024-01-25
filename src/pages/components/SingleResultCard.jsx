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
    <div className="relative isolate overflow-hidden bg-white px-6 pb-6 overflow-visible px-0">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mx-0 max-w-none grid-cols-2 items-start gap-y-10 shadow-lg rounded-lg">
        <div className="col-start-1 row-start-1 mx-auto grid w-full max-w-7xl grid-cols-2 sm:grid-cols-1 gap-x-8 px-8">
          <div className="pr-4">
            <div className="">
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
            className="w-[40rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[10rem]"
            src={randomRestaurant.CuisineImage}
            alt=""
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-2 mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 px-8">
          <div className="pr-4 col-span-2">
            <div className="max-w-xl text-sm leading-7 text-gray-700 max-w-lg pb-4">
              <p>{randomRestaurant.Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleResultCard;
