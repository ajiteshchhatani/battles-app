import React, { useEffect, useState } from 'react';

function BattlesOtherInfo(props) {
    const { battles, otherQuery } = props;
    const [otherInfo, setOtherInfo] = useState([]);

    /**
     * function to search other info like attacker, defender etc inside json based on location prop passed
     * @param {string} query 
     */
    function search(query) {
        const result = battles.filter((battle) => {
            const regex = new RegExp(`^${query}`, 'gi');
            for (let key in battle) {
                if (typeof (battle[key]) === 'string' && typeof (query) === 'string') {
                    if (battle[key].toLowerCase().match(regex)) {
                        return battle;
                    }
                }
            }
        });
        return result;
    }

    /**
     * useEffect to call search function to start other info search if prop supplied
     */
    useEffect(() => {
        if (otherQuery !== '') {
            const info = search(otherQuery);
            setOtherInfo(info);
        }
    }, [otherQuery, setOtherInfo]);

    return (
        <div className="autcomplete-results-container">
            {
                otherInfo.length === 0 ? (
                    <div>No results found</div>
                )
                    :
                    (
                        <div>
                            <p>Search Results:</p>
                            {
                                otherInfo.map((item) => {
                                    return (
                                        <div className="search-result-item" key={item.battle_number}>
                                            <p>Battle Name: {item.name}</p>
                                            <p>Attacker King: {item.attacker_king}</p>
                                            <p>Defender King: {item.defender_king}</p>
                                            <p>Attacker 1: {item.attacker_1}</p>
                                            <p>Defender 1: {item.defender_1}</p>
                                            <p>Battle Type: {item.battle_type}</p>
                                            <p>Attacker Commander: {item.attacker_commander}</p>
                                            <p>Defender Commander: {item.defender_commander}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
            }
        </div>
    )
};

export default BattlesOtherInfo