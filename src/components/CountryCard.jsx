import React from "react";
import { Link } from "react-router-dom";
import GermanyFlag from "../utils/images/Flag_of_Germany.svg.png";
import CountryDetail from "../pages/CountryDetail";
export default function CountryCard({ country }) {
  return (
    // <Link to="/countrydetail">
    <Link to={`/country/${country.name.common}`}>
      <div className="w-full rounded-[8px] max-w-[260px]  mx-auto  shadow-md dark:border hover:shadow-lg transition-shadow duration-300 border hover:border-[#93919D] dark:hover:border-[#3d384f]">
        <img
          className="rounded-tl-[8px] rounded-tr-[8px] w-full h-[180px] object-cover"
          src={country.flags.png}
          alt={`${country.name.common}_Flag`}
        />
        <div className="p-[18px] mb-[20px] min-h-[160px] truncate overflow-hidden whitespace-nowrap">
          <p className="text-[18px] font-semibold font-sans pb-[10px]">
            {country.name.common}
          </p>
          <p className="font-sans text-[14px] font-medium ">
            Population:{" "}
            <span className="font-normal pl-[6px]">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p className="font-sans text-[14px] font-medium pt-[2px]">
            Region:
            <span className="font-normal pl-[6px]">{country.region}</span>
          </p>
          <p className="font-sans text-[14px] font-medium pt-[2px]">
            Capital:
            <span className="font-normal pl-[6px]">
              {country.capital ? country.capital[0] : "N/A"}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
