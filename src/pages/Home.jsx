import React, { useEffect, useState } from "react";
import MenuBar from "../components/MenuBar";
import Searchbar from "../components/Searchbar";
import RegionFilter from "../components/RegionFilter";
import CountryCard from "../components/CountryCard";
import CountryCardGrid from "../components/CountryCardGrid";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
export default function Home({ isDarkMode }) {
  const navigate = useNavigate();
  const [countries, setCountries] = useState("");

  const handleSearch = (query) => {
    fetch(
      `https://restcountries.com/v3.1/name/${query}?fullText=true&fields=name,capital,region,population,flags,cca3`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Country not found`);
        }
        return response.json();
      })
      .then((data) => {
        const country = data[0]; // Get the first matching country
        navigate(`/country/${country.name.common}`); // ✅ Redirect to detail page
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error searching country:", error);
        setCountries([]);
      });
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const fetchAllCountries = () => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
    )
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  };

  const handleRegionChange = (region) => {
    if (region === "") {
      fetchAllCountries();
    } else {
      fetch(
        `https://restcountries.com/v3.1/region/${region}?fields=name,capital,region,population,flags,cca3`
      )
        .then((response) => response.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("Error fetching region:", error));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-[#210F37] dark:text-white">
      <Searchbar onSearch={handleSearch} />
      <RegionFilter onRegionChange={handleRegionChange} />
      <CountryCardGrid countries={countries} />
    </div>
  );
}
