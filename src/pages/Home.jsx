import React from "react";
import SearchOptions from "./components/SearchOptions";
import MultiResults from "./components/MultiResults";
import SingleResultCard from "./components/RestaurantsCard";

// Home page.
function Home() {
  return (
    <div>
        {/* Modal was here */}
        <div className="overflow-hidden bg-white py-24 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* Sets the two column grid container */} 
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

              {/* SEARCH BOX COMPONENT */}
              <SearchOptions />

              {/* SEARCH RESULTS COMPONENT - need to set up responsiveness */}
              <MultiResults />

              <SingleResultCard />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
