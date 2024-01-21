import { useState, useEffect } from "react";
// import restaurants from "/src/michelin.json";

export default function Countries () {

    // ! Example only
    const [countries, setCountries] = useState(["Spain", "Spain", "France", "Italy", "Spain", "Japan"]);
    
    useEffect(() => {
        // Filter out duplicate values.
        const uniqueCountries = [...new Set(countries)];
        // Update state with unique countries
        setCountries(uniqueCountries);
    }, []);
    
    // Return list of countries without duplicates.
    return (  
        <>
            {countries.map((country, index) => (
                <div key={index}>{country}</div>
            ))}
        </>
    )
};