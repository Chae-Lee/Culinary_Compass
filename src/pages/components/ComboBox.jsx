import { useState, useEffect } from "react";
import { Combobox } from '@headlessui/react'
import restaurants from "/src/michelin.json";

function ComboBox() {

    // Create new array of country names only from json data.
    let countriesData = restaurants.map((
        { Country }) => ( Country ));

    // Filter out duplicate values and update state with unique country names only.
    const [countries, setCountries] = useState(countriesData);
    useEffect(() => {
        const uniqueCountries = [...new Set(countries)];
        setCountries(uniqueCountries);
    }, []);

    // Set state as empty upon page load.
    const [selectedCountry, setSelectedCountry] = useState('')

    // Carry out search, responding to user keystrokes, ignoring uppercase and lowercase differences.
    const [search, setSearch] = useState('')
    const filteredCountries =
    search === ''
        ? countries
        : countries.filter((country) => {
            return country.toLowerCase().includes(search.toLowerCase())
        })

console.log(selectedCountry);

    // Show results as user enters characters.
    return (
        <div className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-40">
            <Combobox value={selectedCountry} onChange={setSelectedCountry}>
                <Combobox.Input className="rounded-md bg-indigo-600 h-full w-full"
                    placeholder="Choose a country"
                    onChange={(event) => setSearch(event.target.value)} />
                <Combobox.Options className="bg-indigo-400">
                    {filteredCountries.map((country) => (
                        <Combobox.Option key={country} value={country}>
                        {country}
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            </Combobox>
        </div>
    )
};

export default ComboBox;