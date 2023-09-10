import React, { useContext, useState } from "react";
import { ImageCTX } from "../../context/ImageCTX";

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const { getData, setSearchObject } = useContext(ImageCTX);

    const handleInputValue = (e) => {
        setSearchValue(e.target.value);
    }
    const handleSearch = () => {
        getData(`/api/nl/collection?key=${import.meta.env.VITE_REACT_APP_API_KEY}&ps=100&q=${searchValue}`)
        setSearchValue("");
        setSearchObject(searchValue);
    }

    const enterSearch = (e) => {

        if (e.key === "Enter") {
            getData(`/api/nl/collection?key=${import.meta.env.VITE_REACT_APP_API_KEY}&ps=100&q=${searchValue}`)
            setSearchValue("");
            setSearchObject(searchValue);
        }
    }
    return <div className="flex gap-5">

        <input type="search"
            className="bg-neutral-800 px-28 py-3 indent-0 outline-none w-full 
             rounded-full border-2 border-gray-500 text-lg text-white"
            placeholder=" Search Field ..."
            value={searchValue}
            onChange={handleInputValue}
            onKeyDown={enterSearch}
        />
        <button
            disabled={!searchValue}
            className="bg-pink-600 p-2 rounded-full px-12 text-white"
            onClick={handleSearch}
        >Search</button>
    </div>;
}
export default Search;
