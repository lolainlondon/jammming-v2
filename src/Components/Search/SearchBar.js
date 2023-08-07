import react, {useState} from 'react'

function SearchBar() {
    return (
        <form>
            
            <input id="search" name="search" type="text" />
            <button htmlFor="search">Search </button>
        </form>
    )
}

export default SearchBar;