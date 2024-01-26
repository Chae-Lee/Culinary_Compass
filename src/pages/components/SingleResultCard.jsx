import React from 'react';
import michelin from '../../michelin.json'
import randomIndGen from '../../utils/randomIndex';

function SingleResultCard({ clickEvent, randomRestaurant }) {
  const randRestaurant = michelin[randomIndGen(michelin.length)];
  if (!randomRestaurant) {
    return null;
  }
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 pb-6 overflow-visible px-0">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 mx-0 max-w-none grid-cols-2 items-start gap-y-10 shadow-lg rounded-lg">
        <div className="lg:col-start-1 lg:row-start-1 mx-auto grid w-full max-w-7xl lg:grid-cols-2 gap-x-8 px-8 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2">
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
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-1 pt-4 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:px-5 sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3 sm:px-5">
          <img
            className="w-[40rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[100rem]"
            src={randomRestaurant.CuisineImage}
            alt=""
          />
        </div>
        <div className="col-span-2 col-start-1 row-start-2 mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-8 px-8 sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4 sm:col-start-1 sm:col-end-3 sm:row-start-3 sm:row-end-4">
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
