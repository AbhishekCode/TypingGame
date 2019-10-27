import React, { Component } from 'react';
import styled from 'styled-components'

const ScoreLine = props => {

    return (
        <Container>
            <Text>Score: {props.score} </Text>
            <Text>{props.life > -1 ? `Life: ${props.life}` : "Game Over"} </Text>
        </Container>
    )

}

export default ScoreLine

const Container = styled.div`
          display: flex;
          flex-direction :row;
          justify-content: space-between;
          align-items: center;
          height: 50px;
          background-color: green;
          z-index: 10;
          padding-left: 10px;
          padding-right: 10px;
`;

const Text = styled.h1`
        font-size: 16px;
        color: white;
`