import React from "react";

// Test Data

const testData = [
    
    {
      name: 'LOSIER',
      imageUrl:
        'https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Tokyo",
      Country: "Japan",
      Cuisine: "French, Contemporary",
      Award: "/images/michelin-three.png",
      Url: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurant/l-osier",
    },
    {
      name: 'Azabu Kadowaki',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1674062989120-4ccc0eb35be0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Tokyo",
      Country: "Japan",
      Cuisine: "Japanese",
      Award: "/images/michelin-three.png",
      Url: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurant/azabu-kadowaki",
    },
    {
      name: 'Schloss Schauenstein',
      imageUrl:
        'https://images.unsplash.com/photo-1625938146357-754891591b16?q=80&w=3397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Fürstenau",
      Country: "Switzerland",
      Cuisine: "Creative, Country Cooking",
      Award: "/images/michelin-three-green.png",
      Url: "https://guide.michelin.com/en/graubunden/frstenau/restaurant/schloss-schauenstein",
    },
    {
      name: 'JAN',
      imageUrl:
        'https://images.unsplash.com/photo-1542444256-164bd32f11fc?q=80&w=3405&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Munich",
      Country: "Germany",
      Cuisine: "Creative, Modern Cuisine",
      Award: "/images/michelin-three.png",
      Url: "https://guide.michelin.com/en/bayern/mnchen/restaurant/jan-1204321",
    },
    {
      name: 'Fat Duck',
      imageUrl:
        'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Bray",
      Country: "United Kingdom",
      Cuisine: "Creative",
      Award: "/images/michelin-three.png",
      Url: "https://guide.michelin.com/en/windsor-and-maidenhead/bray/restaurant/fat-duck",
    },
    {
      name: 'Enoteca Paco Pérez',
      imageUrl:
        'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Barcelona",
      Country: "Spain",
      Cuisine: "Spanish",
      Award: "/images/michelin-two.png",
      Url: "https://guide.michelin.com/en/catalunya/barcelona/restaurant/enoteca204150",
    },
  ]

export default function MultiResults() {
    return (
      <div className="max-h-[750px] overflow-y-auto">
        {/* Creates a UL for all results */}
        <ul role="list" className="divide-y divide-gray-100">
            {testData.map((restaurant) => (
              <li key={restaurant.name} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                {/* CuisineImage */}
                <img className="h-24 w-24 flex-none rounded-md bg-gray-50" src={restaurant.imageUrl} alt="" />      
                  {/* Restaurant Info */}
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{restaurant.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{restaurant.Cuisine}</p>           
                    <img className="h-4 mt-1.5 mb-1.5" src={restaurant.Award} alt="" />
                    <a className="mt-1 truncate text-xs leading-5 text-gray-500 underline" href ={restaurant.Url}>Read the Michelin Guide</a>
                  </div>
                </div>
                {/* Restaurant Location */}
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end pr-4">
                  <p className="text-sm leading-6 text-gray-900">{restaurant.Location}</p>
                  <p className="text-xs leading-5 text-gray-500">{restaurant.Country}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    )
}