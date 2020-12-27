import React from "react";
import { IoMdArrowDropdown as Arrow } from "react-icons/io";
import PokemonFilterItem from "./pokemonFilterItem";
export default function PokemonFilter({ filter, filters,toggleList,handleFilter,checked }) {
  const { items, show } = filters;
  return (
    <div className="pokemon-filter">
      <button onClick={toggleList}>
        {filter} <Arrow className="button-arrow" />
      </button>
      {show && (
        <ul className="pokemon-filter__items">
          {items.map((filter) => {
           const check=checked(filter);
           return <PokemonFilterItem checked={check} key={filter} filterName={filter} handleFilter={()=>handleFilter(filter)}  />
          }
          )}
        </ul>
      )}
    </div>
  );
}
