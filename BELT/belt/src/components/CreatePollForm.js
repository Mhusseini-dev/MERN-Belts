import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react'
import HomeButton from './HomeButton';

const CreatePollForm = () => {
    const [question, setQuestion] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [errors, setErrors] = useState([]);

    const createPoll = e => {
        e.preventDefault();
        option3.length > 0 && option4.length === 0 ?
        axios.post("http://localhost:8000/api/createQuestion", {
            text: question,
            option1: {content: option1},
            option2: {content: option2},
            option3: {content: option3}
        })  .then(navigate('/'))
            .then(res => {
                setQuestion("")
                setOption1("")
                setOption2("")
                setOption3("")
                setOption4("")
            })
            .catch(err => {
                console.log(err)
            })
            :option3.length > 0 && option4.length > 0?
            axios.post("http://localhost:8000/api/createQuestion", {
            text: question,
            option1: {content: option1},
            option2: {content: option2},
            option3: {content: option3},
            option4: {content: option4}
        })
            .then(res => {
                setQuestion("")
                setOption1("")
                setOption2("")
                setOption3("")
                setOption4("")
            })
            .catch(err => {
                console.log(err)
            })
            :
        axios.post("http://localhost:8000/api/createQuestion", {
            text: question,
            option1: {content:option1},
            option2: {content:option2}
        })
            .then(res => {
                setQuestion("")
                setOption1("")
                setOption2("")
                setOption3("")
                setOption4("")
            })
            .catch(err => { console.log(err)
            })
    }

    const questionHandler = e => {
        setQuestion(e.target.value);
        if(question.length < 10){ setErrors("Question must be at least 10 characters")} else {
            setErrors("")
        }
    }

    return (
        <>
        <HomeButton path="/" name="Go Back Home" click={() => navigate("/")} />
        <div className="form" style={{marginTop: "50px", marginRight:"20px", marginLeft: "20px"}}>
                    

            <form onSubmit={createPoll}>
            <label htmlFor="question">Your question: <span>*</span> </label>
            <textarea style={{}} type="text" name="question" onChange={questionHandler} value={question} required></textarea>
            {errors? <span>Question must be at least 10 characters</span> : ""}
            <div style={{display:'inline-block', margin:'200px 2000px 200px 100px'}}>
            <label htmlFor="option_1">Option 1: <span>*</span> </label>
            <input type="text" name="option_1" onChange={(e) => setOption1(e.target.value)} value={option1} required/>
            <label htmlFor="option_2">Option 2: <span>*</span> </label>
            <input type="text" name="option_2" onChange={(e) => setOption2(e.target.value)} value={option2} required/>
            <label htmlFor="option_3">Option 3: </label>
            <input type="text" name="option_3" onChange={(e) => setOption3(e.target.value)} value={option3}/>
            <label htmlFor="option_4">Option 4: </label>
            <input type="text" name="option_4" onChange={(e) => setOption4(e.target.value)} value={option4}/>
            <input style={{backgroundColor: 'green'}} type="submit" value="Submit Poll"/>

            </div>
        </form>
        <span><em>* Indicates a required feild</em></span>
        {errors.length?
        <p>{errors[0]}</p>
        :
        ""
        }
        </div>
        </>
    )
}

export default CreatePollForm
