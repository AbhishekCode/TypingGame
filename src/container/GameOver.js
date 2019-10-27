
import React from 'react';
import styled from 'styled-components'
import { Twitter, Facebook } from 'react-social-sharing'

const GameOver = props => {
    let url = "https://abhishekcode.github.io/TypingGame/"
    return (
        <Container>
            <Text fontSize={30}>Game Over</Text>
            <Text fontSize={20}>You scored {props.score}</Text>
            <Twitter circle big message={` Check this out ${url}`} link={url} />
            <Facebook circle big link={url} />
        </Container>
    )

}

export default GameOver

const Container = styled.div`
          display: flex;
          flex-direction :column;
          justify-content: space-between;
          align-items: center;
          padding-left: 10px;
          padding-right: 10px;
          padding-top: 100px;
`;

const Text = styled.h1`
        font-size: ${props => props.fontSize ? props.fontSize : 30}px;
        color: black;
`