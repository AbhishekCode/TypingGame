
import React, { Component } from 'react';
import styled from 'styled-components'

const TextInput = props => {
    return (
        <Container>
            <Input autoFocus onKeyDown={(event) => {
                console.log(event)
                if (event.key === 'Enter') {
                    props.onEnter(event.target.value)
                    event.target.value = ""
                }
            }}></Input>
        </Container>
    )

}

export default TextInput

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Input = styled.input`
        font-size: ${props => props.fontSize ? props.fontSize : 30}px;
        width: 400px;
        height: 60px;
        color: black;
        bottom : 10px;
        position: absolute;
        background-color: transparent;
`