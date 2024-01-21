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

    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
    query === ''
        ? countries
        : countries.filter((country) => {
            return country.toLowerCase().includes(query.toLowerCase())
        })

    return (
    <Combobox value={selectedCountry} onChange={setSelectedCountry}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
        <Combobox.Options>
        {filteredPeople.map((country) => (
            <Combobox.Option key={country} value={country}>
            {country}
            </Combobox.Option>
        ))}
        </Combobox.Options>
    </Combobox>
    )
    }

export default ComboBox;