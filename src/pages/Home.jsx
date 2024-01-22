import React from "react";
import { useState } from "react";
import SearchOptions from "./components/SearchOptions";
import MultiResults from "./components/MultiResults";
import SingleResultCard from "./components/SingleResultCard";
import Maps from "./Maps";
import michelinData from "../michelin.json";
import userLocation from "../UserLocation";
import randomIndGen from "../utils/randomIndex";

const randRestaurant = michelinData[randomIndGen(michelinData.length)]
// Home page.
function Home() {
  // Control the state i.e. which results card needs to be shown, with the restaurants card as the default
  const [restaurant, setRestaurant] = useState(michelinData[randomIndGen(michelinData.length)])

  const [renderedComponent, setRenderedComponent] = useState("SingleResultCard");
  
  // assume we need to adapt the below so it is our search buttons which set the state, rather than the test buttons
  
  const clickTestButton = (component) => {
    setRenderedComponent(component);
  };
  
  
  const handleClick = (restaurant) => {
    setRestaurant(restaurant)
  };


  return (
    <div>
      <div className="overflow-hidden bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Sets the two column grid container */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* SEARCH BOX COMPONENT */}
            <SearchOptions
              testButtonClick={clickTestButton}
               clickEvent={handleClick}
            />
            {/* SEARCH RESULTS COMPONENT - need to set up responsiveness */}

            {/* test showing one or the other */}

            {renderedComponent === "SingleResultCard" ? (
              <SingleResultCard />
            ) : null}
            {renderedComponent === "MultiResults" ? <MultiResults /> : null}

            {/* <MultiResults />

            <SingleResultCard /> */}
            <Maps restaurantData={michelinData} userLocation={userLocation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
