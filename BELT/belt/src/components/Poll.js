import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HomeButton from './HomeButton';

const Poll = (props) => {
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

    const optionHandler = (id) => {
        axios.put("http://localhost:8000/api/getOption/"+ props.id + "/" + id)
            .then(
                navigate("/vote/"+props.id)
            )
    }

    return (
        <div style={{backgroundColor:'gray', height: '900px', paddingTop:'50px'}}>
            <HomeButton name="Go back Home" click={() => navigate("/")} />
            {loaded ?
            option3.content && option4.content === undefined?
            <>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                <div style={{ backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h2>{option1.content}</h2>
                    <button className="button1" onClick={() => optionHandler(option1.name)}>Vote {option1.content}</button>
                </div>
                <div style={{ backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h2>{option2.content}</h2>
                    <button className="button2" onClick={() => optionHandler(option2.name)}>Vote {option2.content}</button>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <div style={{ backgroundColor:'white', width:'455px', height: '174px', textAlign:'center', margin:"29px 920px 10px 10px"}}>
                    <h2>{option3.content}</h2>
                    <button className="button3" onClick={() => optionHandler(option3.name)}>Vote {option3.content}</button>
                </div>
            </div>
            </>
            :option3.content && option4.content?
            <>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                <div style={{display: 'inline-block', backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h3>{option1.content}</h3>
                    <button className="button1" onClick={() => optionHandler(option1.name)}>Vote {option1.content}</button>
                </div>
                <div style={{ backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h3>{option2.content}</h3>
                    <button className="button2" onClick={() => optionHandler(option2.name)}>Vote {option2.content}</button>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent:'space-around'}}>
                <div style={{display: 'inline-block', backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h3>{option3.content}</h3>
                    <button className="button3" onClick={() => optionHandler(option3.name)}>Vote {option3.content}</button>
                </div>
                <div style={{ backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h3>{option4.content}</h3>
                    <button className="button4" onClick={() => optionHandler(option4.name)}>Vote {option4.content}</button>
                </div>
            </div>
            </>
            :
            <>
            <div>
                <div style={{backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h3>{option1.content}</h3>
                    <button className="button1" onClick={() => optionHandler(option1.name)}>Vote {option1.content}</button>
                </div>
                <div style={{ backgroundColor:'white', width:'455px', height: '174px', textAlign:'center'}}>
                    <h3>{option2.content}</h3>
                    <button className="button2" onClick={() => optionHandler(option2.name)}>Vote {option2.content}</button>
                </div>
            </div>
            </>
            :<p>Loading please wait...</p>}
        </div>
    )
}

export default Poll
