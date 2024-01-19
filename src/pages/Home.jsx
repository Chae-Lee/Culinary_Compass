import React from "react";
// import WelModal from "./components/WelcomeModal";

const people = [
    
    {
      name: 'LOSIER',
      imageUrl:
        'https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Tokyo",
      Country: "Japan",
      Cuisine: "French, Contemporary",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurant/l-osier",
    },
    {
      name: 'Azabu Kadowaki',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1674062989120-4ccc0eb35be0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Tokyo",
      Country: "Japan",
      Cuisine: "Japanese",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurant/azabu-kadowaki",
    },
    {
      name: 'Schloss Schauenstein',
      imageUrl:
        'https://images.unsplash.com/photo-1625938146357-754891591b16?q=80&w=3397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Fürstenau",
      Country: "Switzerland",
      Cuisine: "Creative, Country cooking",
      Award: "3 Stars, Green Star",
      Url: "https://guide.michelin.com/en/graubunden/frstenau/restaurant/schloss-schauenstein",
    },
    {
      name: 'JAN',
      imageUrl:
        'https://images.unsplash.com/photo-1542444256-164bd32f11fc?q=80&w=3405&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Munich",
      Country: "Germany",
      Cuisine: "Creative, Modern Cuisine",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/bayern/mnchen/restaurant/jan-1204321",
    },
    {
      name: 'Fat Duck',
      imageUrl:
        'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Bray",
      Country: "United Kingdom",
      Cuisine: "Creative",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/windsor-and-maidenhead/bray/restaurant/fat-duck",
    },
    {
      name: 'Enoteca Paco Pérez',
      imageUrl:
        'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Barcelona",
      Country: "Spain",
      Cuisine: "Spanish",
      Award: "2 Stars",
      Url: "https://guide.michelin.com/en/catalunya/barcelona/restaurant/enoteca204150",
    },
  ]

// Home page.
function Home() {
    return (
        <div>
            {/* <WelModal /> */}
            <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">A Header</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Title</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                            iste dolor cupiditate blanditiis ratione.
                        </p>
                    </div>
                    <div className="mt-2 flex flex-col gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
                        >
                            Random ⭐⭐⭐
                        </a>
                    </div>
                    <div className="mt-2 flex flex-col gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
                        >
                            Random ⭐⭐
                        </a>
                    </div>

                    <div className=" mt-2 flex flex-col gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-36"
                        >
                            Random ⭐
                        </a>
                    </div>

                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Country Search
                        </label>
                        <div className="mt-2.5">
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>  
                    </div>

                    <div className="flex gap-2">
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">⭐⭐⭐</span>
                        </label>

                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">⭐⭐</span>
                        </label>

                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">⭐</span>
                        </label>

                        
                    </div>

                    


                </div>

                {/* SEARCH RESULTS */}
                <div>
                    <ul role="list" className="divide-y divide-gray-100">
                        {people.map((person) => (
                            <li key={person.name} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                
                                <img className="h-24 w-24 flex-none rounded-md bg-gray-50" src={person.imageUrl} alt="" />
                                
                                <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.Cuisine}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.Award}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.Url}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{person.Location}</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">{person.Country}</p>
                            </div>
                            </li>
                        ))}
                    </ul>
                </div>
 
            </div>
        </div>
        </div>
    </div>
    )
};

export default Home;