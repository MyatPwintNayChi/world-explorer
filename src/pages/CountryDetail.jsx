import React, { useState, useEffect } from "react";
import MenuBar from "../components/MenuBar";
import Button from "../components/BackBtn";
import Flag from "../utils/images/Flag_of_Germany.svg.png";
import CustomBtn from "../components/CustomBtn";
import { Link, useParams } from "react-router-dom";
export default function CountryDetail() {
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        const fetchedCountry = data[0];
        setCountry(fetchedCountry);

        if (fetchedCountry.borders && fetchedCountry.borders.length > 0) {
          fetch(
            `https://restcountries.com/v3.1/alpha?codes=${fetchedCountry.borders.join(
              ","
            )}&fields=name,cca3`
          )
            .then((response) => response.json())
            .then((borderData) => {
              setBorderCountries(borderData);
            });
        }
      })
      .catch((error) => console.error("Error fetching country:", error));
  }, [countryName]);

  if (!country) return <p>Loading...</p>;
  const currencyKeys = Object.keys(country.currencies);
  const firstCurrencyKey = currencyKeys[0];
  const currencyName = country.currencies[firstCurrencyKey].name;
  const currencySymbol = country.currencies[firstCurrencyKey].symbol;

  const nativeNameKeys = Object.keys(country.name.nativeName);
  const firstNativeNameKey = nativeNameKeys[0];
  const nativeOfficial = country.name.nativeName[firstNativeNameKey].official;

  const languageKeys = Object.keys(country.languages);
  const firstLanguageKey = languageKeys[0];
  const language = country.languages[firstLanguageKey];
  return (
    <div className="dark:bg-gray-900 pt-[80px] min-h-screen">
      <Button />
      <div className="w-[70%] m-auto pt-[50px]">
        <div className="w-[100%] flex flex-col md:flex-row lg:items-center ">
          <img
            className="w-[180px]"
            src={country.flags.png}
            alt={`${country.name?.common}_Flag`}
          />
          <div className="pt-[30px] md:pl-[60px] lg:pt-0">
            <p className="font-bold text-[22px] pb-[6px] dark:text-white truncate">
              {country.name.common}
            </p>

            <p className="dark:text-white">
              {" "}
              {country.name?.official || "N/A"}
            </p>
          </div>
        </div>

        <div className="mt-[40px] ">
          <div className="flex flex-col sm:flex-row   py-[20px] border-b border-gray-400">
            <div className="w-[50%] mb-[20px] lg:mb-0 ">
              <p className="text-[#858585] font-medium pb-[4px] ">
                Native Name
              </p>
              <p className="dark:text-white">{nativeOfficial}</p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#858585] font-medium pb-[4px] ">Population</p>
              <p className="dark:text-white">{country.population}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  py-[20px] justify-between border-b border-gray-400">
            <div className="w-[50%] mb-[20px] lg:mb-0">
              <p className="text-[#858585] font-medium pb-[4px] ">Region</p>
              <p className="dark:text-white">{country.region}</p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#858585] font-medium pb-[4px] ">Sub Region</p>
              <p className="dark:text-white">{country.subregion}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  py-[20px] justify-between border-b border-gray-400">
            <div className="w-[50%] mb-[20px] lg:mb-0">
              <p className="text-[#858585] font-medium pb-[4px] ">Capital</p>
              <p className="dark:text-white">{country.capital}</p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#858585] font-medium pb-[4px]">
                Top Level Domain
              </p>
              <p className="dark:text-white">{country.tld}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row  py-[20px] justify-between border-b border-gray-400">
            <div className="w-[50%] mb-[20px] lg:mb-0">
              <p className="text-[#858585] font-medium pb-[4px] ">Currencies</p>
              <p className="dark:text-white">
                {currencyName}
                {" - "}
                <span>
                  <b>{`  ${currencySymbol}`}</b>
                </span>
              </p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#858585] font-medium pb-[4px] ">Language</p>
              <p className="dark:text-white">{language}</p>
            </div>
          </div>
        </div>

        <div className="mt-[60px]  pb-[15%] w-[70%]">
          <h2 className="font-bold text-[18px] dark:text-[#858585]">
            Border Countries
          </h2>
          <div className="flex   gap-4 mt-[16px] flex-wrap">
            {borderCountries.length > 0 ? (
              borderCountries.map((border) => (
                <Link key={border.cca3} to={`/country/${border.name.common}`}>
                  <CustomBtn key={border.cca3} name={border.name.common} />
                </Link>
              ))
            ) : (
              <p className="dark:text-white">No Border Countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
