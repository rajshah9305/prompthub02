import React from "react";

function SearchBar({ value, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search prompts..."
      value={value}
      onChange={e => onSearch(e.target.value)}
      style={{
        width: "100%",
        padding: 10,
        marginBottom: 20,
        borderRadius: 6,
        border: "1px solid #ddd",
      }}
    />
  );
}

export default SearchBar;