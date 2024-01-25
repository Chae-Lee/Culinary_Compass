import React from "react";
import { useState } from "react";
import SearchOptions from "./components/SearchOptions";
import MultiResults from "./components/MultiResults";
import SingleResultCard from "./components/SingleResultCard";
import michelinData from "../michelin.json";
import userLocation from "../UserLocation";
import randomIndGen from "../utils/randomIndex";


const randRestaurant = michelinData[randomIndGen(michelinData.length)];
// Home page.
function Home() {
  // Control the state i.e. which results card needs to be shown, with the restaurants card as the default
  const [restaurant, setRestaurant] = useState(
    michelinData[randomIndGen(michelinData.length)]
  );

  const [filteredResults, setFilteredResults] = useState()

  const [renderedComponent, setRenderedComponent] =
    useState("SingleResultCard");

  // assume we need to adapt the below so it is our search buttons which set the state, rather than the test buttons



  const clickTestButton = (component) => {
    setRenderedComponent(component);
    console.log(component);
  };

  const handleClick = (restaurant) => {
    setRestaurant(restaurant);
    console.log();
  };

  return (
    <div>
      <div className="overflow-hidden bg-white py-24 sm:py-24 custom-home">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 custom-home">
          {/* Sets the two column grid container */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* SEARCH BOX COMPONENT */}
            <SearchOptions
              testButtonClick={clickTestButton}
              clickEvent={() => handleClick("randRestaurant")}
            />
            {/* SEARCH RESULTS COMPONENT - need to set up responsiveness */}

            {/* test showing one or the other */}

            {renderedComponent === "SingleResultCard" ? (
              <SingleResultCard />
              ) : null}
            {renderedComponent === "MultiResults" ? <MultiResults /> : null}

             <MultiResults 
             filteredResults={filteredResults}/>
             

            {/* <SingleResultCard /> */ }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


// old code just in case we need it
// const toggleThreeStars = () => {
//   if(threeStarToggle){
//     setThreeStarToggle(!threeStarToggle)
//     // change name later!!
//     const list = resultFilter("Award", "3 Stars");
//     setFilteredResults(list)
//   } else {
//     setThreeStarToggle(!threeStarToggle)
//      }
// };