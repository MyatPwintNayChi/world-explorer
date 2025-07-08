import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

export default function CountryCardGrid({ countries }) {
  // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,subregion,borders,cca3"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setCountries(data);
  //     })
  //     .catch((error) => console.error("Error fetching countries:", error));
  // }, []);

  return (
    <div className="w-[80%] m-auto mt-[50px] mb-[60px] ">
      <div className="w-[100%] grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]  ">
        {countries.length > 0 ? (
          countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </div>
    </div>
  );
}
