import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HomeButton from './HomeButton';

const Votes = (props) => {
    const [poll, setPoll] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/question/" + props.id)
            .then(res => {
                setPoll(res.data);
                console.log(res.data)
                setOption1(res.data[0].option1);
                setOption2(res.data[0].option2);
                setOption3(res.data[0].option3);
                setOption4(res.data[0].option4);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        loaded?
        <>
        <HomeButton name="Go back Home" click={() => navigate("/")} />
        <div style={{backgroundColor:'lightgrey', height: '700px', textAlign:'center'}}>
            <div style={{backgroundColor: 'green', textAlign:'center'}}><h2>Thanks for voting! Here are the result</h2></div>
            <div style={{backgroundColor:'lightgrey'}}>
            <h1>{poll.text}</h1>
            
            { 
            option3.content && option4.content === undefined?
            <>
            <h1>{option1.content}: {option1.vote}</h1>
            <h1>{option2.content}: {option2.vote}</h1>
            <h1>{option3.content}: {option3.vote}</h1>
            </>
            :option4.content && option3.content?
            <>
            <h1>{option1.content}: {option1.vote}</h1>
            <h1>{option2.content}: {option2.vote}</h1>
            <h1>{option3.content}: {option3.vote}</h1>
            <h1>{option4.content}: {option4.vote}</h1>
            </>
            :
            <>
            <h1>{option1.content}: {option1.vote}</h1>
            <h1>{option2.content}: {option2.vote}</h1>
            </>
            }
            </div>
        </div>
        </>
        :
        "Loading"
    )
}

export default Votes
