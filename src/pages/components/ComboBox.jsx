import { useState, useEffect } from "react";
import { Combobox } from '@headlessui/react'
// import restaurants from "/src/michelin.json";

const ComboBox = () => {
    // ! Example only
    const [countries, setCountries] = useState(["Spain", "Spain", "France", "Italy", "Spain"]);
    
    useEffect(() => {
        // Filter out duplicate values
        const uniqueCountries = [...new Set(countries)];
    
        // Update state with unique countries
        setCountries(uniqueCountries);
    }, []);
    
// ! This is what filters through so each country only appears once - this needs to be added below.
return (  
    <>
{countries.map((country, index) => (
            <li key={index}>{country}</li>
            ))}

</> 
)
}

//     // Set state as empty upon page load.
//     const [selected, setSelected] = useState({
//         Country: "",
//     });

//     // Carry out search, responding to user keystrokes, ignoring uppercase and lowercase differences.
//     const [search, setSearch] = useState('')
//     const filteredrestaurants =
//     search === ''
//         ? restaurants
//         : restaurants.filter((restaurants) =>
//             restaurants.Country
//             .toLowerCase()
//             .replace(/\s+/g, '')
//             .includes(search.toLowerCase().replace(/\s+/g, ''))
//         )

//     // Show results for user to select country.
//     return (
//     <div>
//         <Combobox value={selected} onChange={setSelected}>
//         <div className="relative mt-1">
//             <div className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white w-60">
//                 <Combobox.Input className="bg-indigo-600 w-full font-semibold text-white"
//                     placeholder="Or type a country here!"
//                     displayValue={(restaurants) => restaurants.Country}
//                     onChange={(event) => setSearch(event.target.value)}
//                 />
//             </div>

//             <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md px-1 py-2 text-base ring-gray/5 focus:outline-none sm:text-sm">
//                 {filteredrestaurants.length === 0 && search !== '' ? (
//                 <div className="relative cursor-default select-none px-2 py-2 text-white"></div>
//                 ) : (
//                 filteredrestaurants.map((restaurants) => (
//                     <Combobox.Option
//                     key={restaurants.ID}
//                     className={({ active }) =>
//                         `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                         active ? 'bg-indigo-300 text-white' : 'text-white'
//                         }`
//                     }
//                     value={restaurants}
//                     >
//                     {({ selected, active }) => (
//                         <>
//                         <span
//                             className={`block truncate ${
//                             selected ? 'font-medium' : 'font-normal'
//                             }`}
//                         >
//                             {restaurants.Country}
//                         </span>
//                         {selected ? (
//                             <span
//                             className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                                 active ? 'text-white' : 'text-indigo-500'
//                             }`}
//                             >
//                             </span>
//                         ) : null}
//                         </>
//                     )}
//                     </Combobox.Option>
//                 ))
//                 )}
//             </Combobox.Options>
//         </div>
//         </Combobox>
//     </div>
//     )
// }

export default ComboBox;