import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/itemSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (

        <div>
            <input type="text" placeholder="Search items..." onChange={handleSearch} style={{ width: 500, padding: 10 }} />
        </div>
    )

};

export default SearchBar;