import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

const RecentPolls = () => {
    const [polls, setPolls] = useState();
    const[loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/getPolls")
            .then(res => {
                setPolls(res.data);
                setLoaded(true);
            })
    }, [])


    return (
        <div style={{display: 'inline-block', padding:'100px' ,bordeRadius:"10px",backgroundColor: 'lightgrey', border: '1px solid black'}}>
                            <h1>Top Polls</h1>

            {loaded ? polls.map( poll => {
                return(
                    
                    <div className="article" key={poll._id}>
                        <Link to={`/poll/${poll._id}`}>{poll.text}</Link>
                        
                                <p>{poll.option1.content}: {poll.option1.vote}    {poll.option2.content}:    {poll.option2.vote}     {poll.option3.content}:    {poll.option3.vote} {poll.option4.content}: {poll.option4.vote}</p>
                            
                        <p><em>{poll.createdAt}</em></p>
                    </div>
                )
            }) : <p>Loading please wait...</p>}
        </div>
    )
}

export default RecentPolls
