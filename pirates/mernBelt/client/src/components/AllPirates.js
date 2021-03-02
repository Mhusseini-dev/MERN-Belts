import React, { useState, useEffect } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';
import '../App.css'

export default () => {
    const [pirates, setPirates] = useState([]); 

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(response=>setPirates(response.data))
            .catch((err)=>console.log(err))
    }, [pirates])

    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/pirate/' + id)
        .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
        .catch((err)=>console.log(err))  
    }

    // if (pirates === null) return "Loading...";

    return (

        <>
              <h1 className='h1'>Pirate Crew</h1>

            <div className='wrapper'>
            <button className='add' onClick={() => navigate("/pirate/new")}>Add Pirate</button>
            {pirates.map((pirate, index)=>{
                    return (
                        <div className='info'>
                        <div key={index}>
                            <h2>{pirate.name}</h2>
                            <div className='img'>
                            <img src={pirate.image_url} widht='100px' height='100px'></img>
                            </div>
                            <button className='view' onClick={()=>navigate("/pirate/" + pirate._id)}>View Pirate</button> 
                            <button  className='del' onClick={()=>deleteHandler(pirate._id)}>Walk The Plank</button>
                        </div>
                        </div>
                    )
            })}
            </div>
        </>

    )
}