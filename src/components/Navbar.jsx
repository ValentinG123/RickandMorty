import React, {useState } from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { HiBars3BottomLeft } from "react-icons/hi2";


const Navbar = ({
  handleGender,
  handleSpecies,
  handleStatus,
  searchName,
  name,
}) => {
  const [toggle, setToggle] = useState(false);
  const numeros = ["female", "male", "unknow"];
  const species = [
    "Human",
    "alien",
    "Humanoid",
    "Unknown",
    "Poopybutthole",
    "Mythological Creature",
    "Animal",
    "Robot",
    "Cronenberg",
    "Disease",
  ];
  const status = ["Live", "Dead", "Unknown"];

  return (
    <nav className="flex w-full justify-center items-center py-4">
      <div
        className={`z-50  flex-row sm:flex ${
          toggle
            ? "flex flex-col absolute top-10 left-0 w-32 bg-black bg-opacity-50 rounded-r-2xl"
            : "hidden"
        }`}
      >
        <div>
          <button
            className="peer flex justify-center items-center text-white mx-1 italic"
          >
            Gender
          </button>
          <ul
            className={`peer-hover:flex hover:flex flex-col hidden ${
              toggle ? "" : "absolute"
            } bg-black  rounded-b-sm bg-opacity-50 rounded-sm `}
          >
            {numeros.map((numeros, indx) => (
              <button
                className="text-sm py-[3px] font-bold italic text-white"
                value={numeros}
                onClick={handleGender}
                key={indx}
              >
                {numeros}
              </button>
            ))}
            <button
              className="text-sm py-[3px] font-bold italic text-white"
              value=""
              onClick={handleGender}
            >
              All
            </button>
          </ul>
        </div>
      
        <div>
          <button
            className="peer flex justify-center items-center text-white mx-1 italic"
          >
            Status
        
          </button>
          <ul
            className={`peer-hover:flex hover:flex hidden  flex-col  ${
              toggle ? "" : "absolute"
            } bg-black rounded-b-sm bg-opacity-50 rounded-sm`}
          >
            {status.map((status, indx) => (
              <button
                className="text-sm py-[3px] font-bold italic text-white"
                value={status}
                onClick={handleStatus}
                key={indx}
              >
                {status}
              </button>
            ))}
            <button
              className="text-sm py-[3px] font-bold italic text-white"
              value=""
              onClick={handleStatus}
            >
              All
            </button>
          </ul>
        </div>

        <div>
          <button
            className="peer flex justify-center items-center text-white mx-1 italic"
          >
            Specie
          </button>
          <ul
            className={`peer-hover:flex hover:flex hidden flex-col ${
              toggle ? "" : "absolute"
            } bg-black rounded-b-sm bg-opacity-50 rounded-sm`}
          >
            {species.map((numeros, indx) => (
              <button
                className="text-sm py-[3px] font-bold italic text-white"
                value={numeros}
                onClick={handleSpecies}
                key={indx}
              >
                {numeros}
              </button>
            ))}
            <button
              className="text-sm py-[3px] font-bold italic text-white"
              value=""
              onClick={handleSpecies}
            >
              All
            </button>
          </ul>
        </div>
      </div>
      <div className="flex flex-col z-50 ">
        <button
          className="flex sm:hidden"
          onClick={() => setToggle((prev) => !prev)}
        >
          <HiBars3BottomLeft className="w-8 text-[24px] text-white" />
        </button>
      </div>
      <div className="w-[40%] flex justify-center z-50">
        <img
          src={logo}
          className="md:w-44 md:h-16 sm:w-32 w-20 sm:h-10 xl:h-24"
          alt="Rick & Morty"
        />
      </div>

      <Search name={name} searchName={searchName} />
    </nav>
  );
};

export default Navbar;
