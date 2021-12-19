import React, {useState} from "react";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState('');

  function handleSearchBar(e) {
    setSearch(e.target.value);
    onSearchChange(e);
  }

  console.log(search);

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchBar} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
