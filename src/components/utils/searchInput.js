import React from "react";

export default function SearchInput({search,onChange}) {
  return (
    <input
      value={search}
      onChange={onChange}
      className="search-bar"
      type="text"
      placeholder="Search.."
      name="search"
    />
  );
}
