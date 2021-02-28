import React from 'react';
import styled from 'styled-components';

const HomeButton = (props) => {

    const Button = styled.button`
    border: 1px outset black;
    background-color: lightblue;
    float: right;
    display: block;
    margin:-25px 1px 10px 10px;
    `

    return (
        <Button onClick={props.click}>
            {props.name}
        </Button>
    )
}

export default HomeButton
