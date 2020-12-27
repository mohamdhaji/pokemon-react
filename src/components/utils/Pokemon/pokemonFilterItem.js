import React from 'react'

export default function PokemonFilterItem({filterName,handleFilter,checked}) {
    return (
        <li>
          <input checked={checked} onChange={handleFilter} id={filterName} type="checkbox" />
          <label htmlFor={filterName}>{filterName}</label>
        </li>
    )
}
