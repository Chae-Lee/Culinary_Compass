// import { useState, useEffect } from "react";
// import restaurants from "/src/michelin.json";

// function Countries () {

//     // Create new array of country names only from json data.
//     let countriesData = restaurants.map((
//         { Country }) => ( Country ));

//     // Filter out duplicate values and update state with unique country names only.
//     const [countries, setCountries] = useState(countriesData);
    
//     useEffect(() => {
//         const uniqueCountries = [...new Set(countries)];
//         setCountries(uniqueCountries);
//         console.log(uniqueCountries);
//     }, []);



//     // Return list of unique country names.
//     return (  
//         <>
//             {countries.map((country, index) => (
//                 <div key={index}>{country}</div>
//             ))}
//         </>
//     )
// };

// export default Countries;