import React, { useEffect, useState } from 'react';
import battlesList from '../api/battles.json';
import BattlesLocation from '../BattlesLocation';
import BattlesOtherInfo from '../BattlesOtherInfo';
import '../App.css';
import searchIcon from '../search-icon.svg';
import clearIcon from '../clear-icon.svg';

function BattlesAutocomplete() {
    const [battles, setBattlesData] = useState([]);
    // State to hold prop for location autocomplete
    const [locationQueryProp, setLocationQueryProp] = useState('');
    // State to hold prop for other info autocomplete
    const [otherQueryProp, setOtherQueryProp] = useState('');

    /**
     * useEffect to run once to get json data
     */
    useEffect(() => {
        setBattlesData(battlesList);
    }, []);
    /**
     * function to track value of location autocomplete
     * @param {event} e 
     */
    function onLocationInputChange(e) {
        setLocationSearchQuery(e.target.value);
    }

    /**
     * function to track value of other info autocomplete
     * @param {event} e 
     */
    function onOtherInputChange(e) {
        setOtherSearchQuery(e.target.value)
    }

    /**
     * function to set prop for location autocomplete component
     * @param {string} query 
     */
    function setLocationSearchQuery(query) {
        setLocationQueryProp(query);
    }

    /**
     * function to set prop for other info autocomplete component
     * @param {string} query 
     */
    function setOtherSearchQuery(query) {
        setOtherQueryProp(query);
    }

    /**
     * function to be called on clear button of location
     */
    function onClearLocationSearchBox() {
        setLocationQueryProp('');
    }

    /**
     * function to be called on clear button of other info
     */
    function onClearOtherSearchBox() {
        setOtherQueryProp('');
    }

    return (
        <div className="autocomplete-container">
            <div className="location-container">
                <img src={searchIcon} alt="Search Icon" className="search-icon" />
                <input className="location-autocomplete-box" type="text" value={locationQueryProp} onChange={onLocationInputChange} placeholder="Search battles" />
                {locationQueryProp !== '' && <img src={clearIcon} alt="Clear Icon" className="clear-icon" onClick={onClearLocationSearchBox} />}
                {locationQueryProp !== '' && <BattlesLocation battles={battles} locationQuery={locationQueryProp} />}
            </div>

            <div className="other-container">
                <img src={searchIcon} alt="Search Icon" className="other-search-icon" />
                <input className="other-autocomplete-box" type="text" value={otherQueryProp} onChange={onOtherInputChange} placeholder="Search other info" />
                {otherQueryProp !== '' && <img src={clearIcon} alt="Clear Icon" className="other-clear-icon" onClick={onClearOtherSearchBox} />}
                {otherQueryProp !== '' && <BattlesOtherInfo battles={battles} otherQuery={otherQueryProp} />}
            </div>
        </div>
    )
};

export default BattlesAutocomplete