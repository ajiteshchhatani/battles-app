import React, { useEffect, useState } from 'react';
import '../App.css';

function BattlesLocation(props) {
    const { battles, locationQuery } = props;
    const [searchResult, setSearchResult] = useState([]);

    /**
     * function to search location inside json based on location prop passed
     * @param {string} query 
     */
    function getList(query) {
        const result = battles.filter((battle) => {
            const regex = new RegExp(`^${query}`, 'gi');
            return battle.location.match(regex);
        });
        return result;
    };

    /**
     * useEffect to call getList function to start location search if prop supplied
     */
    useEffect(() => {
        if (locationQuery !== '') {
            const battleLocations = getList(locationQuery.toLowerCase());
            setSearchResult(battleLocations);
        }
    }, [locationQuery, setSearchResult]);

    return (
        <div className="autcomplete-results-container">
            {
                searchResult.length === 0 ? (
                    <div>No locations found</div>
                )
                    :
                    (
                        <div>
                            <p>Search Results:</p>
                            {
                                searchResult.map((item) => {
                                    return (
                                        <div className="search-result-item" key={item.battle_number}>
                                            <p>Location: {item.location}</p>
                                            <p>Battle Name: {item.name}</p>
                                        </div>
                                    )
                                })
                            }
                            <p>Total battles fought at {locationQuery}: {searchResult.length}</p>
                        </div>
                    )
            }
        </div>
    )
};

export default BattlesLocation