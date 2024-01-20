import { Fragment, useState } from "react";
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

// Test Data

const restaurants = [
{
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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

function ComboBox() {

    // Set state as empty upon page load
    const [selected, setSelected] = useState({
        country: "",
    });

    // Carry out search, responding to user keystrokes, ignoring uppercase and lowercase differences
    const [search, setSearch] = useState('')
    const filteredrestaurants =
    search === ''
        ? restaurants
        : restaurants.filter((restaurants) =>
            restaurants.Country
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(search.toLowerCase().replace(/\s+/g, ''))
        )

    // Show results as user types
    return (
    <div>
        <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-sm sm:leading-6"
                placeholder="Start typing your country here..."
                displayValue={(restaurants) => restaurants.Country}
                onChange={(event) => setSearch(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                className="h-5 w-5 text-green-600"
                aria-hidden="true"
                />
            </Combobox.Button>
            </div>
            <Transition
            as={Fragment}
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearch('')}
            >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredrestaurants.length === 0 && search !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found in that country!
                </div>
                ) : (
                filteredrestaurants.map((restaurants) => (
                    <Combobox.Option
                    key={restaurants.id}
                    className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-green-600 text-white' : 'text-gray-900'
                        }`
                    }
                    value={restaurants}
                    >
                    {({ selected, active }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {restaurants.Country}
                        </span>
                        {selected ? (
                            <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-green-500'
                            }`}
                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                        </>
                    )}
                    </Combobox.Option>
                ))
                )}
            </Combobox.Options>
            </Transition>
        </div>
        </Combobox>
    </div>
    )
}

export default ComboBox;