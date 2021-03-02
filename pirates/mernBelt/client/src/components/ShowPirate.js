import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import '../App.css';

export default props => {
    const [pirate, setPirate] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + props.id)
            .then(res => setPirate(res.data))
    }, [props.id])

    return (
        <div className='wrapper'>
        <button  className='goback' onClick={() => navigate("/pirates")}>Crew Board</button>
        <h1 className='pirname'>{pirate.name}</h1>
        <div className='imgshow'>
        <img style={{height: "200px", width: "200px"}} src={pirate.image_url} alt={pirate.name}/><br/>
        <h1>Catch Phrase: {pirate.catch_phrase}</h1>

        </div>
        <div className='ab'>
            <h2>About</h2>
            <h1>Crew Position: {pirate.crew_position}</h1>
            <h1>Treasures: {pirate.num_of_treasures}</h1>
            <h1>Peg leg: {pirate.peg_leg ? "Yes" : "No"}</h1>
            <h1>Eye Patch: {pirate.eye_patch ? "Yes" : "No"}</h1>
            <h1>Hook Hand: {pirate.hook_hand ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}
