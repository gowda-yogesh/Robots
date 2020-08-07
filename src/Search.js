import React from "react";

const Search = ({ userSearch }) => {
    return (
        <input
            type="search"
            onChange={userSearch}
            placeholder="Robot of your choice ;)"
        />
    )
}

export default Search;